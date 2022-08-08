const { TwitterApi } = require('twitter-api-v2');

import clientPromise from '../../../database/mongoDBClient'
import createGuid from "../../../utils/createGuid";


export default async (req, res) => {
  try {

    const client = await clientPromise;
    const db = client.db("ACQR")
    let users = await db.collection('users');
    var userExists = await users.count({email: req.body.email.toLowerCase()}) > 0 ? true : false;
  
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
  } catch (err) {
   // LOG ERROR
   let client = await clientPromise;
   var db = client.db('ACQR');
   let log = await db.collection('log');
   var data = {
     message: err,
     from: "verifyEmail.js",
     timestamp: new Date().toLocaleString(),
   }

  await log.insertOne(data);
    return res.json({
      message: JSON.parse(JSON.stringify('failed verify email')),
      success: false,
    })
  }
}
