// console.log('The bot is starting')
 
// var Twit = require('twit');
// var config = require('./config');
// var T = new Twit(config);
// // var rita = require('rita');
// // var inputText = 'WHY this flower is now called so, List, sweet maids, and you shall know. Understand this firstling was Once a brisk and bonny lass, Kept as close as Danae was, Who a sprightly springald loved; And to have it fully proved, Up she got upon a wall, Tempting down to slide withal; But the silken twist untied, So she fell, and, bruised, she died. Jove, in pity of the deed, And her loving, luckless speed, Turn d her to this plant we call Now "the flower of the wall.';
// // var markov = new rita.RiMarkov(3);
// // markov.loadText(inputText);
// // var sentences = markov.generateSentences(1);
// // console.log(sentences); 

// var statuses = [
// 	"🌼",
// 	"🌺",
// 	"🌸"
// ];

// var tweetIndex = 0;

// 	var tweet = { 
// 		status: statuses[tweetIndex] + Date.now()
// 	};

// 	T.post('statuses/update', tweet, tweeted); 
// }

// function tweeted(err, data, response) {
// 	if (err) {
// 		console.log("Something went wrong!");
// 	} else {
// 		console.log("It worked!");
// 	}
// }

// //setInterval(postTweet, 1000*5);


var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');

// File system for loading text files
var fs = require('fs');

// Now using rita.js!
var rita = require('rita');
var markov = new rita.RiMarkov(3, true);

var txt = fs.readFileSync('data/flowertxt.txt', 'utf8');
markov.loadText(txt);

function generate() {
  var status = markov.generateSentences(1)[0];
  var maxlen = 8;
  if (status.length > maxlen) {
    status = status.substring(0, maxlen);
  }
  return status;
}

// Making a Twit object for connection to the API
var T = new Twit(config);

// Start once
tweeter();

// Once every N milliseconds
setInterval(tweeter, 1000*60);

// Here is the bot!
function tweeter() {

  // This is a random number bot
  var tweet = generate() + '🌺';
  
  // Post that tweet!
  T.post('statuses/update', { status: tweet }, tweeted);

  // Callback for when the tweet is sent
  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
    }
  };
}
