const config = require('./config');
const twit = require('twit');
const T = new twit(config);
const twts = require('./data/tweets.js');
const tweets = twts.tweets;

// function gets users tweets and will store them as an array of objects

// T.get('statuses/user_timeline', {screen_name: 'spencepeacock1', language: 'en', include_rts: false, exclude_replies: true, count: 2 } , gotData);
//  function gotData(err, data, response) {
//    for(var i = 0; i < data.length; i++){
//
//      var statusObj = {status: "@" + data[i].user.screen_name + " @willfisher4cong is running to replace michael burgess join us!",
//                 in_reply_to_status_id: data[i].id_str
//       }
//       if(data[i].created_at < 10)
//       console.log("tweet" + (i+1));
//       console.log("Text:  " + data[i].text);
//       console.log("User:   " + data[i].user.name);
//       console.log("Time:" + data[i].created_at);
//       console.log("user id string: " + data[i].id_str);
//       var date = new Date();
//       var day = date.getDay();
//   }
// }


//streams for a specific user

console.log("listening...")
var stream = T.stream('statuses/filter', {follow: '880634071419846657'});
stream.on('tweet', function(tweet, err){
  console.log("we found a tweet...");
  console.log(tweet);
  var statusObj = {status: "@" + tweet.user.screen_name + " superfast reply",
                in_reply_to_status_id: tweet.id_str
}
  T.post('statuses/update', statusObj, function(err,tweetReply, resp){
    if(err){
      console.log("error in posting", err)
    }
    console.log("it worked!!");
    console.log(tweetReply.text);
  });
});
