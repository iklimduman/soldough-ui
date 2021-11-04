import react from "react";

import "./Timeline.css"

const Timeline = () => {
    return (
        <div className="timeline-container">
            <span className="timeline-header">The Roadmap!</span>
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                        <div className="item-1">
                            <div className="yatay-1">
                                <ul>
                                    <li>Launch Discord & Twitter</li>
                                    <li>Growing our Community & Organize Giveaways</li>
                                    <li>Collaboration with Influencers & Other Projects</li>
                                    <li>OG Contest & Lottery</li>
                                </ul>
                            </div>

                            <div className="image-div-glass"></div>

                        </div>

                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="container right">
                    <div className="content">
                        <div className="item-1-sag">
                            <div className="text-div-light">
                            </div>
                            <div calssName="yatay-2">
                                <ul>
                                    <li>Public Launch of SolDough Market Mini-Collection</li>
                                    <li>Secondart Marketplace for SolDough Markets</li>
                                    <li>Public Launch of SolDough Collection</li>
                                    <li>Airdrops to SolDough Market Holders & Giveaways</li>
                                    <li>Secondary Marketplace for SolDough</li>
                                    <li>Rarity List Publication</li>
                                </ul>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="container left">
                    <div className="content">
                        <div className="item-1">
                            <div className="deneme">
                                <ul>
                                    <li>15% of Launch Income to Buyback</li>
                                    <li>20% of Loyalty to Buyback </li>
                                    <li>20% of Loyalty to Giveaway of other Collections</li>
                                    <li>20% of Loyalty to DAO</li>
                                    <li>Grape Verification</li>
                                </ul>
                            </div>
                            <div className="gorsel">
                                <div className="image-div-angel">
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="container right">
                    <div className="content">
                        <div className="item-1-son">
                            <div className="text-div-quest"></div>
                            <ul className="last-text">
                                <li>Deciding Together the Roadmap V2 with DAO & Community</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;