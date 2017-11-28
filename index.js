const config = require('./config');
const twit = require('twit');
const T = new twit(config);
const twts = require('./data/tweets.js');
const tweets = twts.tweets;

//function gets users tweets and will store them as an array of objects
T.get('statuses/user_timeline', {screen_name: 'spencepeacock1', language: 'en', include_rts: false, exclude_replies: true } , gotData);
 function gotData(err, data, response) {
   for(var i = 0; i < data.length; i++){
     var myStatus = tweets[Math.floor(Math.random()*tweets.length)];
     var statusObj = {status: "@" + data[i].user.screen_name + myStatus,
                in_reply_to_status_id: data[i].id_str
      }
      console.log(data[i].user.screen_name);
      console.log(data[i].)
    T.post('statuses/update', statusObj, function(err,tweetReply, resp){
      if(err){
        console.log("error in posting", err)
      }
      console.log("it worked!!");
      console.log(tweetReply.text);
    });
  }
}
