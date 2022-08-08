import clientPromise from '../../../database/mongoDBClient'

export default async (req, res) => {
  try {
    console.log(req.body);
    const client = await clientPromise
    const db = client.db('ACQR')
    let log = await db.collection('log')

    var data = {
      message: req.message,
      from: req.from,
      timestamp: new new Date().toLocaleString(),
    }

   await log.insertOne(data)

    return res.json({
      success: true,
    })
  } catch (err) {
    console.log(err)
    return res.json({
      message: JSON.parse(JSON.stringify('failed loggin')),
      success: false,
    })
  }
}
