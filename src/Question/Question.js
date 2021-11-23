import react from "react";

import "./Question.css"


const Question = () => {
    return (
        <div className="question-container">

            <div className="master-div">
                <div className="question-box">
                    <span className="question-heading">Which network will the project launch at?</span>
                    <span className="answer-span">Our precious, SOLANA! </span>
                    <div className="moving-dough-left"></div>
                </div>
            </div>

            <div className="question-box">
                <span className="question-heading">Where will the NFT that I mint go to, and which wallet I should be using?</span>

                <span className="answer-span">SolDough will appear in the connected wallet that used for purchase. Phantom Wallet is our favorite and sweetest wallet recommendation!
                    If you don't know how to get a Phantom Wallet visit <a href="https://phantom.app/" target="_blank" className="phantom">https://phantom.app/</a> and start!</span>
                <div className="moving-dough"></div>
            </div>

            <div className="question-box">
                <span className="question-heading">What will be the mint price for these beautiful and precious doughnuts?</span>

                <span className="answer-span">We believe that mint prices should be affordable for the whole Solana community. Doughnuts are not a breed apart pleasure, it is for all of us!
                    So that our mint price will be 0.4◎!</span>
                <div className="moving-dough-left"></div>
            </div>

            <div className="question-box">
                <span className="question-heading">How many SolDough will be created?</span>

                <span className="answer-span">1375 will be the total supply of SolDough! 1125 of them will be minted by the community, 200 of them will be airdropped for free to SolDough Market Mini-Collection holders, and 50 will be used for marketing operations of the project. A big part of those 50 SolDough will be used to airdrop to communities of blue-chip projects with diamond-hand investors. We are aware that the blue-chip collections are the ones with diamond-hand holders and we will bring those holders to our community. Some parts of our airdrop items will be shared with Solana influencers to bring more attention! Lastly, no worries! We are aware that airdropped NFTs created sell-pressure to some projects in the past, we will always keep that under control.</span>
                <div className="moving-dough"></div>
            </div>

            <div className="question-box">
                <span className="question-heading">Secondary market?</span>

                <span className="answer-span">We are in talks with the famous and large marketplaces of the Solana network.</span>
                <div className="moving-dough-left"></div>
            </div>

            <div className="question-box">
                <span className="question-heading">What is going to be the supply and price for the SolDough Market NFTs?</span>

                <span className="answer-span">We will be creating 200 of SolDough Market NFTs. 150 of them will be released to the community for sale and 50 of them will be airdropped to our OG members on discord with a lottery. Mint price of SolDough Market NFTs will be 0.6◎. </span>
                <div className="moving-dough"></div>
            </div>

            <div className="question-box">
                <span className="question-heading">What kind of exclusive perks SolDough Market NFT owners will have?</span>

                <span className="answer-span">We will be airdropping free SolDoughs to owners of SolDough Market NFTs on our SolDough collection launch day. In the future, we will continue to provide new surprises and new advantages to SolDough Market owners.</span>
                <div className="moving-dough-left"></div>
            </div>

            <div className="question-box">
                <span className="question-heading">Why I should be an OG?</span>

                <span className="answer-span">We will have exclusive surprises for OG members. There will be 200 OG members and we will give 50 SolDough Market NFTs to our OG members with a lottery for free.</span>
                <div className="moving-dough"></div>
            </div>

            <div className="question-box">
                <span className="question-heading">Mysterious Conditions and Contests?</span>

                <span className="answer-span">We advise you to pay attention to the mysterious attributes of your doughnuts. We may have surprises for the holders of some beautiful SolDoughs.
Further, we will always plan some new and adventurous contests!</span>
                <div className="moving-dough-left"></div>
            </div>

        </div>
    )
}

export default Question;