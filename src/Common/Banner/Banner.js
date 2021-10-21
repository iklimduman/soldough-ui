import react from "react";
import { ReactDOM } from "react";

import "./Banner.css";
import Welcome from "../Welcome/Welcome.js";
import DiscordButton from "../Button/Button";

const Banner = () => {
    return (
        <div className="banner-container">
            <Welcome />
            <div>
                <span className="solana">4,444 SOLDOUGHS MINTING ON SOLANA</span>
            </div>
            <DiscordButton />
        </div>
    )
}

export default Banner;