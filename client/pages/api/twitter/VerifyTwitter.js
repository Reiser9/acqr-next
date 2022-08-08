const { TwitterApi } = require('twitter-api-v2');

import clientPromise from '../../../database/mongoDBClient'
import createGuid from "../../../utils/createGuid";


export default async (req, res) => {
  try {
// Create a client with an already known bearer token
const appOnlyClient = new TwitterApi(process.env.BEARER_TOKEN);
const roClient = appOnlyClient.readOnly;

var ACRQFollowers = await roClient.v2.followers("1529689832527499264");

//If found username is following us
if(ACRQFollowers.data.find(x => x.username.toLowerCase() == req.body.twitterUsername.toLowerCase())){
    const client = await clientPromise;
    const db = client.db("ACQR")
    let users = await db.collection('users');
    var userExists = await users.count({twitterUsername: req.body.twitterUsername.toLowerCase()}) > 0 ? true : false;
  
    //Save and verify user
    if(!userExists){
      return res.json({
        success: true,
      })
    }

    //Already verified
    return res.json({
      message:"already verified",
      success: false,
    })

} else{
    return res.json({
        success: false,
      })
}

  } catch (err) {
// LOG ERROR
let client = await clientPromise
var db = client.db('ACQR')
let log = await db.collection('log')
var data = {
  message: err,
  from: "verifyTwitter.js",
  timestamp: new Date().toLocaleString(),
}
await log.insertOne(data)

    return res.json({
      message: JSON.parse(JSON.stringify('failed verify Twitter')),
      success: false,
    })
  }
}
