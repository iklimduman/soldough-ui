import React from "react";

import "./Banner.css"

const Banner = () => {
    return (
        <header className="banner-container">
            <div className="image-div">
                <span className="welcome">Welcome to</span>
                <div className="banner-header"><div className="actual-header">
                    </div>
                </div>
                <span className="solana">4,444 SOLDOUGHS MINTING ON SOLANA</span>
                


            </div>
            <div>

                <div className="button-div">
                    <a
                        className="discord-button-top"
                        href="https://discord.gg/wVAxxw3rn4"
                        target="_blank">
                        Join the community on Discord</a>
                    <a className="twitter-button-top" href="https://twitter.com/SolDough" target="_blank">
                        Follow us on twitter
                    </a>
                </div>

            </div>

        </header>
    )
}

export default Banner;
