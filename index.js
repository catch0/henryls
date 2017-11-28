const config = require('./config');
const twit = require('twit');
const T = new twit(config);

//function gets brandnewcongress tweets and will store them as an array of objects
T.get('statuses/user_timeline', {screen_name: 'realwhchef', language: 'en', include_rts: false, exclude_replies: true } , gotData);
 function gotData(err, data, response) {
   for(var i = 0; i < data.length; i++){
     var randomNumber = Math.floor(Math.random() * 20);
     var statusObj = {status: "@" + data[i].user.screen_name + " ? lol" + randomNumber + " funniest tweet today",
                in_reply_to_status_id: data[i].id_str
      }
    T.post('statuses/update', statusObj, function(err,tweetReply, resp){
      if(err){
        console.log("error in posting", err)
      }
      console.log("it worked!!");
      console.log(tweetReply.text);
    });
  }
}
