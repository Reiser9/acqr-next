import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <title>ACQR</title>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&amp;display=swap"
                    rel="stylesheet"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="assets/img/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="assets/img/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="assets/img/favicon/favicon-16x16.png"
                />
                <link
                    rel="manifest"
                    href="assets/img/favicon/site.webmanifest"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <link rel="stylesheet" href="assets/css/animate.min.css" />
            </Head>

            <header className="header wow animate__animated animate__fadeIn">
                <div className="container">
                    <div className="header__inner">
                        <Link href="/">
                            <a className="header__logo">
                                <Image
                                    src="/assets/img/logo.svg"
                                    width="100%"
                                    height="100%"
                                />
                            </a>
                        </Link>

                        <div className="header__wrapper">
                            <Link href="/protocol">
                                <a className="header__link">About Us</a>
                            </Link>

                            <Link href="/">
                                <a className="header__link">Docs</a>
                            </Link>

                            <div className="header__link header__link--menu">
                                Follow Us
                                <div className="header__link--arrow">
                                    <Image
                                        src="/assets/img/arrow-bottom.svg"
                                        width="10"
                                        height="8"
                                    />
                                </div>
                                <div className="header__drop">
                                    <Link href="/">
                                        <a className="header__drop--link">
                                            <span className="header__drop--icon">
                                                <Image
                                                    src="/assets/img/discord.svg"
                                                    width="21"
                                                    height="16"
                                                />
                                            </span>
                                            Discord
                                        </a>
                                    </Link>

                                    <Link href="/">
                                        <a className="header__drop--link">
                                            <span className="header__drop--icon">
                                                <Image
                                                    src="/assets/img/twitter.svg"
                                                    width="21"
                                                    height="16"
                                                />
                                            </span>

                                            Twitter
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <button className="button header__button">
                                Use ACQR
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
