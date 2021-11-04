import React from "react";
import { ReactDOM } from "react";

import "./Part.css"

const Part = () => {
    return (
        <div className="part-container">
            <div className="part-row">
                <div className="gif-container">

                    <div className="grid-container">
                        <div className="img-container-1"></div>
                        <div className="img-container-2"></div>
                        <div className="img-container-3"></div>

                        <div className="img-container-4"></div>
                        <div className="img-container-5"></div>
                        <div className="img-container-6"></div>

                        <div className="img-container-7"></div>
                        <div className="img-container-8"></div>
                        <div className="img-container-9"></div>
                    </div>

                </div>

                <div className="part-text-container">

                    <span className="heading">Narrative & Difference of SolDough</span>
                    <p className="about-paragraph">We want to share with you how we designed SolDough. We are a group of people who love doughnuts and have been active in the crypto markets for years. While we were enjoying our doughnuts with our coffees on a beautiful evening, we started to discuss passionately which doughnut cream and variety were more delicious. As a result of this discussion, we couldn't decide which doughnut was the most tempting, so we wanted to consult that with you!</p>
                    <p className="about-paragraph">At the end of that evening, we decided to create SolDough and share it with you! In this collection, it is difficult to discern which SolDough is the best, you decide which one is the most beautiful!</p>
                    <p className="about-paragraph">Our entire team consists of people who have served as investors in all major Solana projects since SolPunks, including Solana Monkey Business, Solsteads, Thugbirz, and others. In addition, this team carried out studies on crypto marketing and consulted on different projects in different networks. Along with all these, the people in our team have worked for years on subjects such as data science, software engineering, blockchain, and financial markets in their professional working lives. We want to share all this expertise and create the sweetest and most enjoyable community of the network with you!</p>
                
                </div>

            </div>



        </div>
    )
}

export default Part;