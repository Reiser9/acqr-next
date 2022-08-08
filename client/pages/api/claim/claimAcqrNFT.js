import clientPromise from '../../../database/mongoDBClient'
import createGuid from '../../../utils/createGuid'

export default async (req, res) => {
  try {
    let client = await clientPromise
    const db = client.db('ACQR')
    let users = await db.collection('users')

    //All data to lowercase
    req.body = Object.fromEntries(
      Object.entries(req.body).map(([key, value]) => [key, value.toLowerCase()])
    )

    var userDB = await users.findOne({
      userAddress: req.body.userAddress,
      twitterUsername: req.body.twitterUsername,
      email: req.body.email,
    })

    if (!userDB) {
      throw 'no user found'
    }

    //Verify signature
    const ethUtil = require('ethereumjs-util')
    const sig = ethUtil.fromRpcSig(ethUtil.addHexPrefix(req.body.signature))
    const msg = ethUtil.hashPersonalMessage(
      Buffer.from('To claim your NFT please sign this message: ' + userDB.nonce)
    )
    const publicKey = ethUtil.ecrecover(msg, sig.v, sig.r, sig.s)
    const pubAddress = ethUtil.pubToAddress(publicKey)
    const address = ethUtil.addHexPrefix(pubAddress.toString('hex'))

    //update nonce
    await users.updateOne(
      {
        userAddress: req.body.userAddress,
        twitterUsername: req.body.twitterUsername,
        email: req.body.email,
      },
      {
        $set: {
          nonce: createGuid(),
        },
      }
    )

    //If success full send one nft to the address
    if (address.toLowerCase() === userDB.userAddress.toLowerCase()) {
      //Contract address
      let contractAddress = '0xa6c59D9c0D5c455Ec91E272af8A4D21b8AaD6750'

      //SET UP WEB3
      const HDWalletProvider = require('@truffle/hdwallet-provider');
      var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker");

      require('dotenv').config()
    
      var provider = new HDWalletProvider(
        'spend under slogan cheap raven hold leave smoke skin runway draft man',
        'https://polygon-mainnet.infura.io/v3/ece7e47d22d74e1e8b766a7c78bce1a1'
      )
     var nonceTracker = new NonceTrackerSubprovider()
     provider.engine._providers.unshift(nonceTracker)
     nonceTracker.setEngine(provider.engine)

      const Web3 = require('web3')
      const web3 = new Web3(provider)
      const acqrRewardContract = new web3.eth.Contract(
        contractABI,
        contractAddress
      )
      acqrRewardContract.setProvider(provider)


  var gasPrice = 0;
  var gasResp = await fetch('https://gasstation-mainnet.matic.network/v2');
  gasResp = await gasResp.json();
  gasPrice = gasResp.fast.maxFee;
  gasPrice = Web3.utils.toWei(gasPrice.toFixed(3).toString(), 'gwei');

      await acqrRewardContract.methods
        .safeTransferFrom(
          '0x72189679cD3857E01D10999602BDc95b71e1473b',
          req.body.userAddress,
          '0',
          '1',
          '0x00'
        )
        .send(
          { from: '0x72189679cD3857E01D10999602BDc95b71e1473b', gasPrice: gasPrice },
         async function (error, result) {
            if (error) {
              console.log(error)
              throw 'Could not setd nft'
            }

            if (result) {
               //SAVE TX HASH TO USER
         await users.updateOne(
        {
          userAddress: req.body.userAddress,
          twitterUsername: req.body.twitterUsername,
          email: req.body.email,
        },
        {
          $set: {
            claimAcqrTxHash: result,
          },
        }
      )
              return res.json({
                success: true,
              })
            } else {
              return res.json({
                success: false,
              })
            }
          }
        )
    } else {
      throw 'invalid signature'
    }
  } catch (err) {
// LOG ERROR
    let client = await clientPromise
    var db = client.db('ACQR')
    let log = await db.collection('log')
    var data = {
      message: err,
      from: "claimAcqrNFT.js",
      timestamp: new Date().toLocaleString(),
    }
   await log.insertOne(data)

    return res.json({
      message: JSON.parse(JSON.stringify('failed to send NFT')),
      success: false,
    })
  }
}

var contractABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
    ],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'URI',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'accounts',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'uri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
