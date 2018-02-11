// app.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
// Set up your search parameters
var params = {
  id:1
}

T.get('trends/place', params, function(err, data, response) {
  if(!err){
    // This is where the magic will happen
    // Loop through the returned tweets
    //console.log("Session: %j",data[0].trends[0]);


    var fs = require('fs');

    let s="";
    for(let i = 0; i < data[0].trends.length; i++){
      //console.log("Trend %i:  %j",i,data[0].trends[i]);
      console.log("Trend %i --> name:  %s",i,data[0].trends[i].name);
      console.log("Trend %i--> url:  %s",i,data[0].trends[i].url);

      s=s+"Trend  "+i+"\n";
      s=s+" --> name:"+data[0].trends[i].name +"\n";
      s=s+" --> url:"+data[0].trends[i].url+"\n";
      s=s+" --> promoted_content:"+data[0].trends[i].promoted_content+"\n";
      s=s+" --> query:"+data[0].trends[i].query+"\n";
      s=s+" --> tweet_volume:"+data[0].trends[i].tweet_volume+"\n";
    }

    fs.writeFile('myjsonfile.json', s, 'utf8', function Callback(err){
    if (err){
        console.log(err);
    }});

  } else {
    console.log(err);
  }
})
