import React from 'react'
import { useEffect, useRef, useState, useMemo } from 'react'




const Protocol = () => {
  var classNames = require('classnames')
  return (
    <>
      <section className="help default__padding wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="help__inner">
            <img
              src="/assets/img/help-bg1.svg"
              alt="img"
              className="help__img help__img1"
            />
            <img
              src="/assets/img/help-bg2.svg"
              alt="img"
              className="help__img help__img2"
            />

            <h2 className="help__title">
              ACQR Helps You Acquire More{' '}
              <span className="gradient3">Users</span> And{' '}
              <span className="gradient3">Growth</span> For Your Web3 Protocol.
            </h2>

            <p className="mission__text">
              ACQR is an on-chain platform that provides you with effective
              marketing and user acquisition tools from discovery to onboarding.
            </p>

            <a href="#" target="_blanc" className="button main__button">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="here default__padding wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="here__inner">
            <img
              src="/assets/img/circle.svg"
              alt="stars"
              className="here__bg here__bg1 circle"
            />
            <img
              src="/assets/img/here-bg.svg"
              alt="stars"
              className="here__bg here__bg2"
            />

            <h2 className="here__title gradient3 protocol__here--title">
              The Problem in Web3
            </h2>

            <p className="here__text">
              Web2 marketing is difficult for web3 protocols. Most web3
              protocols fail because they cannot acquire enough users and
              implement new marketing strategies. ACQR combines the best of both
              worlds to provide protocols with unmatched tools for growth.
            </p>
          </div>
        </div>
      </section>

      <section className="leading default__padding wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="leading__inner">
            <img
              src="/assets/img/leading-bg1.svg"
              alt="img"
              className="leading__img leading__img1"
            />
            <img
              src="/assets/img/leading-bg2.svg"
              alt="img"
              className="leading__img leading__img2"
            />

            <div className="leading__title--inner">
              <h2 className="leading__title">
                Leading web3 Protocols Use{' '}
                <span className="gradient3">ACQR</span> to -
              </h2>
            </div>

            <div className="leading__content">
              <div className="leading__point">
                <img
                  src="/assets/img/point-star.svg"
                  alt="arrow"
                  className="leading__point--icon"
                />
                Educate and onboard new users.
              </div>

              <div className="leading__point">
                <img
                  src="/assets/img/point-star.svg"
                  alt="arrow"
                  className="leading__point--icon"
                />
                Guarantee protocol usage.
              </div>

              <div className="leading__point">
                <img
                  src="/assets/img/point-star.svg"
                  alt="arrow"
                  className="leading__point--icon"
                />
                Jumpstart community growth and increase social followings.
              </div>

              <div className="leading__point">
                <img
                  src="/assets/img/point-star.svg"
                  alt="arrow"
                  className="leading__point--icon"
                />
                Add instant token utility.
              </div>

              <div className="leading__point">
                <img
                  src="/assets/img/point-star.svg"
                  alt="arrow"
                  className="leading__point--icon"
                />
                Implement marketing campaigns that work.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission default__padding wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="mission__inner">
            <h2 className="mission__title">
              Co-design a Mission with <span className="gradient3">ACQR</span>
            </h2>

            <p className="mission__text">
              Missions help educate and onboard more users for your protocol.
              Missions are fully customizable to fit your protocols&rsquo;
              needs.
            </p>

            <div className="mission__content">
              <div className="mission__text--inner">
                <div className="mission__item   ">
                  <p className="mission__item--title ">Determine Rewards</p>

                  <p className="mission__item--text">
                    Set the rewards users earn for completing a Mission (Tokens
                    or NFTs).
                  </p>
                </div>

                <div className="mission__item">
                  <p className="mission__item--title">Describe Your Protocol</p>

                  <p className="mission__item--text">
                    Tell users about your amazing protocol and why users should
                    participate in it.
                  </p>
                </div>

                <div className="mission__progress"></div>

                <div className="mission__item">
                  <p className="mission__item--title">Determine Tasks</p>

                  <p className="mission__item--text">
                    Decide what tasks users should complete in order to receive
                    the prize.
                  </p>
                </div>
              </div>

              <div className="mission__img--inner">
                <img
                  src="/assets/img/mission-img.svg"
                  alt="img"
                  className="mission__img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="default__padding wow animate__animated animate__fadeIn block">
        <div className="container">
          <div className="block__inner">
            <div className="block__item">
              <div className="block__item--img--inner">
                <img src="./assets/img/img1.png" alt="img" className="img" />
              </div>

              <div className="block__item--text--inner">
                <h3 className="block__item--title">
                  Partners we work best with…
                </h3>

                <div className="block__point--inner">
                  <div className="block__point">
                    <img
                      src="/assets/img/plus.svg"
                      alt="plus"
                      className="block__point--icon"
                    />
                    Positive and like-minded.
                  </div>

                  <div className="block__point">
                    <img
                      src="/assets/img/plus.svg"
                      alt="plus"
                      className="block__point--icon"
                    />
                    Excited to educate and onboard the next wave of web3 users.
                  </div>

                  <div className="block__point">
                    <img
                      src="/assets/img/plus.svg"
                      alt="plus"
                      className="block__point--icon"
                    />
                    Have protocols that are safe and reliable.
                  </div>

                  <div className="block__point">
                    <img
                      src="/assets/img/plus.svg"
                      alt="plus"
                      className="block__point--icon"
                    />
                    Want to grow the community and userbase.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

            <h2 className="protocol__title protocol__wrap">
              Ready to grow your <span className="gradient3">Web3</span>{' '}
              protocol?
            </h2>

            <a href="#" target="_blanc" className="button main__button">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Protocol


