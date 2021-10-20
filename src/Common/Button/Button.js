import React from "react";
import { ReactDOM } from "react";

import "./Button.css" ;

const DiscordButton = () => {
    return (
        <div className="button-div">
            <a className="discordButton" 
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer">Join the community on Discord</a>
        </div>
    )
}

export default DiscordButton ;