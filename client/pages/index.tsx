import Link from 'next/link'
import JoinAcqr from '../components/joinAcqr/JoinAcqr'

export default function Home() {
  return (
    <div>
      <section className="main wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="main__inner">
            <div className="main__content">
              <h2 className="main__title">
                <img
                  src="assets/img/main-text.svg"
                  alt="img"
                  className="main__decor"
                />
                Get rewarded for acquiring new skills in{' '}
                <span className="gradient3">Web3</span>
              </h2>

              <p className="main__text">
                ACQR helps you &lsquo;acquire&rsquo; new skills from different
                web3 protocols and rewards you for completing specific on and
                off-chain tasks.
              </p>
              <Link href="/protocol">
                <a className="button main__button">Learn more</a>
              </Link>
            </div>

            <div className="main__img--inner">
              <img src="assets/img/main-img.svg" alt="img" className="img" />
            </div>
          </div>
        </div>
      </section>

      <section className="here default__padding wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="here__inner">
            <img
              src="/assets/img/here-stars.svg"
              alt="stars"
              className="here__bg here__bg1"
            />
            <img
              src="/assets/img/here-bg.svg"
              alt="stars"
              className="here__bg here__bg2"
            />

            <h2 className="here__title gradient3">Here&rsquo;s the thing…</h2>

            <p className="here__text">
              Web3 is complicated and hard to navigate. Especially amongst all
              of the scams, schemes, and unsecured protocols. ACQR makes it easy
              to understand and participate in leading web3 protocols.
            </p>
          </div>
        </div>
      </section>

      <section className="default__padding wow animate__animated animate__fadeIn block">
        <div className="container">
          <div className="block__inner">
            <div className="block__item">
              <div className="block__item--text--inner">
                <h3 className="block__item--title">Acquire Skills in Web3</h3>

                <p className="block__item--text">
                  Missions allow you to learn about each web3 protocol and
                  actively participate. Best of all you are rewarded after all
                  tasks are completed!
                </p>

                <button className="button block__item--button">
                  View Missions
                </button>
              </div>

              <div className="block__item--img--inner">
                <img src="./assets/img/img2.png" alt="img" className="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <JoinAcqr/>

      <section className="protocol default__padding wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="protocol__inner">
            <img
              src="/assets/img/protocol-img1.svg"
              alt="img"
              className="protocol__bg protocol__bg1"
            />
            <img
              src="/assets/img/protocol-img2.svg"
              alt="img"
              className="protocol__bg protocol__bg2"
            />

            <img
              src="/assets/img/protocol-img3.png"
              alt="img"
              className="protocol__img"
            />

            <h2 className="protocol__title">Are you a web3 protocol?</h2>

            <p className="protocol__subtitle">
              Find the best users for your community and protocol.
            </p>

            <p className="protocol__text">
              Find out how ACQR can help incentivize protocol usage, user
              acquisition, and growth.
            </p>

            <div className="protocol__button--inner">
              <Link href="/protocol">
                <a className="header__link button protocol__button protocol__button--learn">
                  {' '}
                  Learn More
                </a>
              </Link>

              <button className="button protocol__button">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
