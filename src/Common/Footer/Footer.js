import reactDom from "react-dom";
import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="text-div">
                <h1 className="footer-header">Want to Join Us?</h1>
                <span className="text">We want you to be a part! Help us shape the future of the Grim Syndicate and unlock rewards for community members and ambassadors!</span>
            </div>
            <div className="button-cont">
                <a className="discord-button"
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Join the community on Discord</a>
                    <a className="twitter-button"
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Follow us on Twitter</a>
            </div>
        </div>
    )
}

export default Footer;