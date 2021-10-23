import react from "react";

import "./Question.css"


const Question = () => {
    return (
        <div className="question-container">
            <div className="master-div">
                <div className="question-box">
                    <span className="question-heading">Which network will the project launch at?</span>
                    <span className="answer-span">Our precious, SOLANA! </span>
                    <div className="moving-dough"></div>
                </div>
            </div>
            


            <div className="question-box">
                <span className="question-heading">Where will the NFT that I mint go to and which wallet I should be using? </span>

                <span className="answer-span">SolDough will appear in the connected wallet that used for purchase. Phantom Wallet is our favorite and sweetest wallet recommendation!
                    If you don't know how to get a Phantom Wallet visit https://phantom.app/ and start!</span>
            </div>

            <div className="question-box">
                <span className="question-heading">How many SolDough will be created?</span>

                <span className="answer-span">4444 will be the total supply of SolDough! 4000 of them will be minted by the community, and 444 will be used for marketing operations of the project.

                    A big part of of those 444 SolDough will be used to airdrop to communities of blue-chip projects such as Solana Monkey Business, Thugbirdz, Aurory, SolSocks & others.

                    We are aware that the blue-chip projects are the ones with diamond-hand holders and we will bring those holders to our project!

                    Some part of our airdrop SolDough will be shared with Solana influencers to bring more attention!

                    And the rest of the SolDough will be shared within mysterious contests to our holders.

                    Lastly, no worries! We are aware that airdropped NFTs created sell-pressure to some projects in the past, we will never airdrop too much of them in a short term! It will take months and years to airdrop them all!  </span>
            </div>

            <div className="question-box">
                <span className="question-heading"> Secondary market? </span>

                <span className="answer-span">Alpha Art is going to be the first secondary market that we open the marketplace!</span>
            </div>

            <div className="question-box">
                <span className="question-heading">What about royalty and buybacks?</span>

                <span className="answer-span">Are we going to do buybacks? Yes! We will be using 15% of the launch income for buyback and burn operations! We also will be using 20% of the loyalty income for buyback and burn!

                    We won't be airdropping cash to our holders, instead, we will be using our instruments to keep up the floor and volume of the project!</span>
            </div>

            <div className="question-box">
                <span className="question-heading">When are you going to do the buyback? </span>

                <span className="answer-span">No-one knows! If we let everyone know about when we will be buying back, we are aware that it will create selling pressure. Buyback is our sharpest and ruthless weapon to manipulate the price. We will manage this budget with the logic that central banks manage their price policies.

                    But at the and we definetely will support the community! </span>
            </div>

            <div className="question-box">
                <span className="question-heading">What will be those misterious contests? </span>

                <span className="answer-span">Be careful to those Baby Doughs! They may bring great profit if you use them properly!</span>
            </div>

        </div>
    )
}

export default Question;