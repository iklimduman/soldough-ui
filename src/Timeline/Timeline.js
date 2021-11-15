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
                                    <li>Growing our Community</li>
                                    <li>Organize Giveaways</li>
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
                            <div className="light-container">
                                <div className="text-div-light">
                                </div>
                            </div>

                            <div calssName="yatay-2">
                                <ul>
                                    <li>SolDough supply reduced from 4444 to 2750, price reduced from 0.44 to 0.4</li>
                                    <li>SolDough Market Supply reduced from 250 to 200. Price reduced from 0.66 to 0.6 </li>
                                    <li>Official Announcement of $POM Token partnership</li>
                                    <li>Tier system & roadmap v1.1 is announced</li>
                                    <li> 1:1 art-work released</li>
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
                                    <li>Public Launch of SolDough Market Mini-Collection (19th of November)</li>
                                    <li>Secondary Marketplace for SolDough Markets</li>
                                    <li>50.000 $POM token airdrop to SolDough Market Holders</li>
                                    <li>Public Launch of SolDough Collection (26th of November)</li>
                                    <li>Airdrops SolDough to SolDough Market Holders</li>
                                    <li>Secondary Marketplace for SolDough</li>
                                    <li>Rarity List Publication</li>
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
                            <div className="question-container-1">
                                <div className="text-div-quest"></div>
                            </div>

                            <ul className="last-text">
                                <li>Deflationary buyback & burn starts (Up to 750 SolDough NFTs)</li>
                                <li>Tier system goes live</li>
                                <li>Grape verification</li>
                                <li>$POM airdrop starts.(Equals to 5.000$ in every two weeks untill 200.000.000 $POM is over)</li>
                                <li>Poster airdrops for SolDough Market holders</li>
                                <li>DAO establishment</li>
                                <li>DAO decides the second airdrop token (500$ in every two weeks)</li>
                                <li>Beauty rank system goes live </li>
                                <li>Staking system launch for airdrops</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;