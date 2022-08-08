import TwitterButtonProps from '../../../interfaces/twitterButtonProps'
import LoaderSmall from '../../svgs/LoaderSmall'

export default function TwitterButton({
  HideShowDropDown,
  twitterVerified,
  dropDowns,
  setTwitterUserName,
  failedTwitterVerification,
  isVerifyingTwitter,
  verifyTwitter,
}: TwitterButtonProps) {
  var classNames = require('classnames')
  return (
    <>
      {/* Twitter */}
      <div className="join__button">
        <button
          className="join__button--content"
          onClick={() => (twitterVerified ? '' : HideShowDropDown('twitter'))}
        >
          <div
            className={classNames(
              'join__inner--button',
              dropDowns.includes('twitter') ? ' rounded-t-xl' : ' rounded-xl'
            )}
          >
            <div className="join__button--social">
              <svg
                width="20"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.547 1.846a7.648 7.648 0 0 1-.967.345c.39-.432.689-.94.87-1.496a.31.31 0 0 0-.105-.342.329.329 0 0 0-.366-.025 7.716 7.716 0 0 1-2.25.869A4.366 4.366 0 0 0 13.722 0C11.356 0 9.43 1.882 9.43 4.195c0 .182.011.363.035.542A11.072 11.072 0 0 1 1.92.827.325.325 0 0 0 1.645.71a.323.323 0 0 0-.254.156 4.119 4.119 0 0 0 .44 4.829 3.68 3.68 0 0 1-.574-.251.33.33 0 0 0-.317.002.314.314 0 0 0-.162.266v.056c0 1.509.83 2.867 2.101 3.608a3.796 3.796 0 0 1-.326-.047.327.327 0 0 0-.302.101.31.31 0 0 0-.066.305c.47 1.435 1.681 2.49 3.145 2.812a7.728 7.728 0 0 1-4.06 1.132c-.305 0-.61-.017-.91-.052a.323.323 0 0 0-.341.207.312.312 0 0 0 .13.372A11.776 11.776 0 0 0 6.409 16c4.372 0 7.106-2.014 8.63-3.704 1.902-2.106 2.991-4.895 2.991-7.65 0-.115-.002-.231-.005-.347a8.238 8.238 0 0 0 1.92-1.988.31.31 0 0 0-.02-.378.325.325 0 0 0-.378-.087Z"
                  fill="#fff"
                />
              </svg>

              <span className="join__button--text">Follow Us on Twitter</span>
            </div>

            <span className="mr-4 ">
              {twitterVerified ? (
                <svg
                  className="mob__svg"
                  width="95"
                  height="25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity=".4"
                    width="95"
                    height="25"
                    rx="5"
                    fill="#168C2A"
                  />
                  <path
                    className="mob"
                    d="M35.095 17 31.3 7.265h1.575l3.27 8.61h-.45l3.27-8.61h1.545L36.745 17h-1.65Zm11.62-2.43h1.364c-.08.49-.27.93-.57 1.32-.3.39-.695.7-1.185.93-.49.23-1.065.345-1.725.345-.78 0-1.475-.165-2.085-.495a3.71 3.71 0 0 1-1.44-1.365c-.35-.58-.525-1.255-.525-2.025 0-.78.17-1.46.51-2.04.34-.59.81-1.05 1.41-1.38.6-.33 1.285-.495 2.055-.495.81 0 1.49.16 2.04.48.55.32.955.795 1.215 1.425.27.62.38 1.395.33 2.325h-6.135c.05.45.185.85.405 1.2.23.35.53.625.9.825.38.2.815.3 1.305.3.55 0 1.01-.125 1.38-.375.37-.25.62-.575.75-.975Zm-2.176-3.975c-.65 0-1.19.175-1.62.525-.43.34-.715.795-.855 1.365h4.605c-.04-.61-.26-1.075-.66-1.395-.4-.33-.89-.495-1.47-.495Zm5.087-1.08h1.44V17h-1.44V9.515ZM53.6 10.79c-.52 0-.965.12-1.335.36-.36.24-.65.535-.87.885-.21.35-.35.685-.42 1.005l-.015-.855c.01-.1.035-.255.075-.465.05-.22.135-.465.255-.735.12-.27.28-.525.48-.765.2-.25.45-.455.75-.615.3-.16.66-.24 1.08-.24v1.425Zm3.023-4.365V7.97H54.84V6.425h1.785Zm-1.605 3.09h1.425V17H55.02V9.515Zm7.25 1.545V9.83h3.254v1.23h-3.255Zm2.04-1.23h1.424V17h-1.425V9.83ZM59.402 17V9.08l1.425.075V17h-1.425Zm2.64-10.485h3.69v1.32h-3.54c-.26-.01-.495.025-.705.105a.91.91 0 0 0-.495.39c-.11.19-.165.465-.165.825l-1.425-.075c0-.6.105-1.09.315-1.47.22-.38.53-.655.93-.825.4-.18.865-.27 1.395-.27ZM57.948 9.83h4.905v1.23h-4.905V9.83Zm15.412 4.74h1.365c-.08.49-.27.93-.57 1.32-.3.39-.695.7-1.185.93-.49.23-1.065.345-1.725.345-.78 0-1.475-.165-2.085-.495a3.71 3.71 0 0 1-1.44-1.365c-.35-.58-.525-1.255-.525-2.025 0-.78.17-1.46.51-2.04.34-.59.81-1.05 1.41-1.38.6-.33 1.285-.495 2.055-.495.81 0 1.49.16 2.04.48.55.32.955.795 1.215 1.425.27.62.38 1.395.33 2.325H68.62c.05.45.185.85.405 1.2.23.35.53.625.9.825.38.2.815.3 1.305.3.55 0 1.01-.125 1.38-.375.37-.25.62-.575.75-.975Zm-2.175-3.975c-.65 0-1.19.175-1.62.525-.43.34-.715.795-.855 1.365h4.605c-.04-.61-.26-1.075-.66-1.395-.4-.33-.89-.495-1.47-.495Zm8.176 6.555c-.65 0-1.24-.165-1.77-.495-.53-.33-.95-.785-1.26-1.365-.3-.59-.45-1.265-.45-2.025s.15-1.43.45-2.01c.3-.59.71-1.05 1.23-1.38.52-.34 1.12-.51 1.8-.51.59 0 1.08.1 1.47.3.39.2.695.48.915.84.22.36.375.775.465 1.245.1.47.15.975.15 1.515 0 .4-.05.825-.15 1.275-.1.45-.26.875-.48 1.275-.22.4-.525.725-.915.975-.39.24-.875.36-1.455.36Zm.405-1.245c.53 0 .975-.115 1.335-.345.37-.24.645-.56.825-.96.18-.4.27-.845.27-1.335 0-.53-.095-.995-.285-1.395-.18-.4-.455-.71-.825-.93-.36-.22-.8-.33-1.32-.33-.78 0-1.385.25-1.815.75-.42.5-.63 1.135-.63 1.905 0 .52.105.98.315 1.38.21.39.495.7.855.93.37.22.795.33 1.275.33Zm2.43-9.39h1.44V17h-1.32c-.03-.22-.06-.49-.09-.81-.02-.32-.03-.595-.03-.825v-8.85Z"
                    fill="#81EC87"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.692 16.429 14.308 18 24 8.571 22.385 7l-9.693 9.429Z"
                    fill="#81EC87"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.923 16.429 14.308 18 10 13.81l1.615-1.572 4.308 4.19Z"
                    fill="#81EC87"
                  />
                </svg>
              ) : dropDowns.includes('twitter') ? (
                <svg
                  width="15"
                  height="9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m1.5 7.5 6-6 6 6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m13.5 1.5-6 6-6-6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
        </button>
        {/* DROPDOWN */}
        <div
          className={classNames(
            'join__drop',
            dropDowns.includes('twitter') ? '' : 'hidden'
          )}
        >
          <div>
            <a
              href="https://twitter.com/acqr_co"
              target="_blank"
              className="twitter__link"
            >
              Follow Twitter
            </a>
            {failedTwitterVerification ? (
              <a className="twitter__error">Failed, Try again</a>
            ) : (
              ''
            )}
          </div>

          <p className="twitter__text">
            Log in to your Twitter account to verify Twitter actions in 1 click.
            We will not post without permission.
          </p>

          <div className="join__drop--input--inner">
            <input
              type="text"
              placeholder="Enter your Twitter username"
              className="input join__drop--input"
              onChange={(e) => setTwitterUserName(e.target.value)}
            />
            {isVerifyingTwitter ? (
              <LoaderSmall className="loader animate-spin" />
            ) : (
              <button
                className="join__drop--input--button"
                onClick={() => verifyTwitter()}
              >
                Enter
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
