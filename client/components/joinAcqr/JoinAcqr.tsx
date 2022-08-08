import Image from 'next/image'
import Acqr from '../../components/svgs/Acqr'
import TwitterButton from './buttons/TwitterButton'
import { useEffect, useState } from 'react'
import EmailButton from './buttons/EmailButton'
import DiscordButton from './buttons/DiscordButton'
import ConnectWalletButton from './buttons/ConnectWalletButton'
import { NextResponse } from 'next/server'
export default function JoinAcqr({}) {
  const [dropDowns, setDropDowns] = useState([''])
  //Twitter
  const [twitterUsername, setTwitterUserName] = useState('')
  const [isVerifyingTwitter, setIsVerifyingTwitter] = useState(false)
  const [failedTwitterVerification, setFailedTwitterVerification] =
    useState(false)
  const [twitterVerified, setTwitterVerified] = useState(false)

  //Email
  const [emailVerified, setEmailVerified] = useState(false)
  const [failedEmailVerification, setFailedEmailVerification] = useState(false)
  const [email, setEmail] = useState('')

  //Discord
  const [discordVerified, setDiscordVerified] = useState(false)

  //Reward
  const [canClaim, setCanClaim] = useState(false)

  //Wallet
  const [walletConnected, setWalletConnected] = useState('')

  useEffect(() => {
    setCanClaim(
      discordVerified &&
        twitterVerified &&
        emailVerified &&
        walletConnected.length > 0
    )
  }, [discordVerified, twitterVerified, emailVerified, walletConnected])

  const HideShowDropDown = (button: string) => {
    let temp: string[] = []
    //Filter out clicked button
    temp = dropDowns.filter((x) => x !== button)
    //collapse
    if (temp.length != dropDowns.length) {
      //Do nothing
    } else {
      //expand
      temp.push(button)
    }
    setDropDowns(temp)
  }

  const verifyTwitter = async () => {
    setIsVerifyingTwitter(true)
    var data = {
      twitterUsername: twitterUsername.replace('@', '').toLowerCase(),
    }
    var res: any = {}
    res = await fetch('/api/twitter/VerifyTwitter', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    res = await res.json()
    setIsVerifyingTwitter(false)

    if (!res.success) {
      setFailedTwitterVerification(true)
    } else {
      setTwitterVerified(true)
      //Close drop down
      let temp: string[] = []
      temp = dropDowns.filter((x) => x !== 'twitter')
      setDropDowns(temp)
    }
  }

  const verifyEmail = async () => {
    if (isEmail(email)) {
      var data = {
        email: email.toLowerCase(),
      }
      var res: any = {}
      res = await fetch('/api/email/verifyEmail', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      res = await res.json()

      if (!res.success) {
        setFailedEmailVerification(true)
      } else {
        setEmailVerified(true)
        //Close drop down
        let temp: string[] = []
        temp = dropDowns.filter((x) => x !== 'email')
        setDropDowns(temp)
      }
    } else {
      setFailedEmailVerification(true)
      setTimeout(() => setFailedEmailVerification(false), 3000)
    }
  }

  const verifyDiscord = async () => {
    window.open(
      'https://discord.com/invite/gEFgd9at6C',
      '_blank',
      'noopener,noreferrer'
    )
    let temp: string[] = []

    setTimeout(() => {
      setDiscordVerified(true), //Close drop down
        (temp = dropDowns.filter((x) => x !== 'discord'))
      setDropDowns(temp)
    }, 5000)
  }
  function isEmail(email: any) {
    return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
      email
    )
  }

  const claim = async () => {
    try {
      var data = {
        email: email,
        twitterUsername: twitterUsername,
        userAddress: walletConnected,
      }
      var res: any = {}
      res = await fetch('/api/claim/validateNFTClaim', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      res = await res.json()

      if (!res.success) {
        alert('Failed')
        throw 'Claiming NFT failed'
      } else {
        //Sign to send nft
        var nonce: any
        nonce = 'To claim your NFT please sign this message: ' + res.nonce
        //Sign nonce
        const Web3 = require('web3')
        const web3 = new Web3(Web3.givenProvider)
        const __message__ = nonce
        var signature = await web3.eth.requestAccounts().then(
          (accounts: any = []) =>
            web3.eth.personal.sign(__message__, accounts[0]) // this will return a 'signature'
        )

        //Send signature to backend to verify
        res = await fetch('/api/claim/claimAcqrNFT', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({ ...data, signature: signature }), // body data type must match "Content-Type" header
        })
        res = await res.json()
        if (res.success) {
          alert(
            'YOUR NFT IS MINTED AND SEND TO YOUR ADDRESS: GO TO https://opensea.io/account?tab=private TO VIEW. (Unhide it to add to your collection)'
          )
        } else {
          alert('Something went wrong, We could not mint your NFT.')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  var classNames = require('classnames')
  return (
    <section className="join default__padding wow animate__animated animate__fadeIn">
      <div className="container">
        <div className="join__inner">
          <h2 className="join__title">
            Get a Glimpse of ACQR and{' '}
            <span className="gradient3">Join Our Community</span>
          </h2>

          <p className="protocol__subtitle">
            Claim ACQR&rsquo;s very first NFT by joining our community!
          </p>

          <div className="join__img--inner">
            <img src="/assets/img/join-bg.svg" alt="bg" className="join__bg" />

            <div className="join__content">
              <div className="join__reward">
                <p className="reward__title">Reward</p>

                <img
                  src="assets/img/reward.png"
                  alt="reward"
                  className="reward__img"
                />

                <p className="reward__text">ACQR Early Community Member</p>

                {canClaim ? (
                  <button
                    className="reward__claim--button"
                    onClick={() => claim()}
                  >
                    Claim
                  </button>
                ) : (
                  ''
                )}
              </div>

              <div className="join__wrapper">
                <div className="join__platform">
                    <img src="assets/img/logo-circle.svg" alt="logo" className="join__platform--img" />

                    <p className="join__platform--text">
                        An On-Chain Rewards Platform
                    </p>
                </div>

                <div className="join__buttons">
                    <p className="join__buttons--title">
                        Be the first to join ACQR&rsquo;s community!
                    </p>

                    <p className="join__buttons--text">
                        ACQR is on on-chain platform that benefits both Web3 users and Web3 protocols by incentivizing participation.
                    </p>

                    <p className="join__buttons--text">
                        Be the first join ACQR&rsquo;s community of Web3 users and protocols!
                    </p>

                    <p className="join__buttons--title">
                        Complete the following tasks in order to mint your NFT.
                    </p>

                    <EmailButton
                      emailVerified={emailVerified}
                      HideShowDropDown={HideShowDropDown}
                      dropDowns={dropDowns}
                      failedEmailVerification={failedEmailVerification}
                      setFailedEmailVerification={setFailedEmailVerification}
                      setEmail={setEmail}
                      verifyEmail={verifyEmail}
                    />

                    <TwitterButton
                      HideShowDropDown={HideShowDropDown}
                      twitterVerified={twitterVerified}
                      dropDowns={dropDowns}
                      setTwitterUserName={setTwitterUserName}
                      failedTwitterVerification={failedTwitterVerification}
                      isVerifyingTwitter={isVerifyingTwitter}
                      verifyTwitter={verifyTwitter}
                    />

                    <DiscordButton
                      discordVerified={discordVerified}
                      HideShowDropDown={HideShowDropDown}
                      dropDowns={dropDowns}
                      verifyDiscord={verifyDiscord}
                    />

                    <ConnectWalletButton
                      walletConnected={walletConnected}
                      setWalletConnected={setWalletConnected}
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
