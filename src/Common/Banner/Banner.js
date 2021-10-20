import react from "react";
import { ReactDOM } from "react";

import "./Banner.css";
import DiscordButton from "../Button/Button";

const Banner = () => {
    return (
        <div className="banner-container">
            <DiscordButton />
        </div>
    )
}

export default Banner;