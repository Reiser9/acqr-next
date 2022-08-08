import clientPromise from '../../../database/mongoDBClient'
import createGuid from '../../../utils/createGuid'

export default async (req, res) => {
  try {
    let client = await clientPromise
    const db = client.db('ACQR')
    let users = await db.collection('users')

    await Validate(users)

    //All data to lowercase
    req.body = Object.fromEntries(
          Object.entries( req.body).map(([key, value]) => [key, value.toLowerCase()])
        );
var nonce = createGuid() ;
    //Save user
    users.insertOne({ ...req.body, nonce: nonce});


      return res.json({
        success: true,
        nonce: nonce
      })


  } catch (err) {
   // LOG ERROR
   let client = await clientPromise;
   var db = client.db('ACQR');
   let log = await db.collection('log');
   var data = {
     message: err,
     from: "validateNFTClaim.js",
     timestamp: new Date().toLocaleString(),
   }

  await log.insertOne(data);

    return res.json({
      message: JSON.parse(JSON.stringify('failed to validate NFT Claim')),
      success: false,
    })
  }

  async function Validate(users) {
    var emailExists = (await users.count({
      email: req.body.email.toLowerCase()
    })) > 0
      ? true
      : false

    if (emailExists) {
      throw 'email already claimed: ' + req.body.email
    }

    var twitterExists = (await users.count({
      twitterUsername: req.body.twitterUsername.toLowerCase()
    })) > 0
      ? true
      : false

    if (twitterExists) {
      throw 'twitterUsername already claimed: ' + req.body.twitterUsername
    }

    var addressExists = (await users.count({
      userAddress: req.body.userAddress.toLowerCase()
    })) > 0
      ? true
      : false

    if (addressExists) {
      throw 'address already claimed'
    }
  }
}
