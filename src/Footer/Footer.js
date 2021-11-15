import reactDom from "react-dom";
import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="text-div">
                <h1 className="footer-header">Want to Join Us?</h1>
                <span className="text">SolDough is the sweetest community of the Solana Network. Stay tuned and join us!</span>
            </div>
            <div className="button-cont">
                <a className="discord-button"
                    href="https://discord.gg/kFZ48KkNaY"
                    target="_blank"
                    rel="noopener noreferrer">
                    Join the community on Discord</a>
                    <a className="twitter-button"
                    href="https://twitter.com/SolDough"
                    target="_blank"
                    rel="noopener noreferrer">
                    Follow us on Twitter</a>
            </div>
        </div>
    )
}

export default Footer;