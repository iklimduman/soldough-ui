import react from "react";
import "./Roadmap.css"

const Roadmap = () => {
    return (
        <div className="roadmap-container">

            <span className="roadmap-header">The Roadmap!</span>

            <div className="glass-stage">
                <div className="image-div-glass">
                </div>
                <div className="text-div-glass">
                    <ul>
                        <li>Launch Discord & Twitter</li>
                        <li>Grow our comunity</li>
                        <li>Publish website</li>
                        <li>Organize giveaways</li>
                        <li>Colabration with influencers</li>
                        <li>Colabration with different NFT projects</li>
                    </ul>
                </div>

            </div>

            <div className="light-stage">
                <div className="text-div-light">
                </div>
                <div className="image-div-light">
                    <ul>
                        <li>Public launch of 4000 SolDough</li>
                        <li>Marketplace launch</li>
                        <li>Airdrop to those who have won competitions</li>
                        <li>Website update</li>
                        <li>Rarity launch</li>
                    </ul>
                </div>

            </div>
            <div className="angel-stage">
                <div className="image-div-angel">
                </div>
                <div className="text-div-angel">
                    <ul>
                        <li>Use 15% amount of launch income to buyback and burn</li>
                        <li>Use 20% amount of loyalty income to buyback and burn</li>
                        <li>Use 20% amount of loyalty income to organize NFT airdrops for SolDough holders</li>
                        <li>Grape verification</li>
                        <li>Use 20% amount of royalty income to send DAO, if community established </li>
                    </ul>
                </div>


            </div>
            <div className="question-stage">
                <div className="text-div-quest">
                </div>
                <div className="image-div-quest">
                    <ul>
                        <li>Deciding together the Roadmap V2 with DAO or community.</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Roadmap;