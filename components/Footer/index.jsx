import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="footer wow animate__animated animate__fadeIn">
                <div className="container">
                    <div className="footer__inner">
                        <Link href="/">
                            <a href="/" className="footer__logo">
                                <Image
                                    src="/assets/img/logo.svg"
                                    width="100%"
                                    height="100%"
                                />
                            </a>
                        </Link>

                        <p className="footer__copy">
                            All Rights Reserved - Copyright 2022 - ACQR Labs
                        </p>

                        <div className="header__wrapper">
                            <Link href="/">
                                <a className="header__link">
                                    <span className="header__link--icon">
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
                                <a className="header__link">
                                    <span className="header__link--icon">
                                        <Image
                                            src="/assets/img/twitter.svg"
                                            width="18"
                                            height="15"
                                        />
                                    </span>
                                    Twitter
                                </a>
                            </Link>

                            <Link href="/">
                                <a className="header__link">
                                    <span className="header__link--icon">
                                        <Image
                                            src="/assets/img/file.svg"
                                            width="14"
                                            height="18"
                                        />
                                    </span>
                                    Docs
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            <script src="assets/js/jquery-3.4.1.min.js"></script>
            <script src="assets/js/wow.min.js"></script>
            <script>new WOW().init();</script>
        </>
    );
};

export default Footer;
