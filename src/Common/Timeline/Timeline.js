import react from "react";

import "./Timeline.css"

const Timeline = () => {
    return (
        <div className="timeline-container">
            <span className="timeline-header">The Roadmap!</span>
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <div className="item-1">
                            <ul>
                                <li>Launch Discord & Twitter</li>
                                <li>Grow our comunity</li>
                                <li>Publish website</li>
                                <li>Organize giveaways</li>
                                <li>Colabration with influencers</li>
                                <li>Colabration with different NFT projects</li>
                            </ul>
                            <div className="image-div-glass">
                            </div>

                        </div>

                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <div className="item-1">
                            <div className="text-div-light">
                            </div>
                            <ul>
                                <li>Public launch of 4000 SolDough</li>
                                <li>Marketplace launch</li>
                                <li>Airdrop to those who have won competitions</li>
                                <li>Website update</li>
                                <li>Rarity launch</li>
                            </ul>

                        </div>

                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <div className="item-1">
                            <div className="deneme">
                                <ul>
                                    <li>Use 15% amount of launch income to buyback and burn</li>
                                    <li>Use 20% amount of loyalty income to buyback and burn</li>
                                    <li>Use 20% amount of loyalty income to organize NFT airdrops for SolDough holders</li>
                                    <li>Grape verification</li>
                                    <li>Use 20% amount of royalty income to send DAO, if community established </li>
                                </ul>
                            </div>
                            <div className="gorsel">
                                <div className="image-div-angel">
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <div className="item-1">
                            <div className="text-div-quest">
                            </div>
                            <ul className="last-text">
                                <li>Deciding together the Roadmap V2 with DAO or community.</li>
                            </ul>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;