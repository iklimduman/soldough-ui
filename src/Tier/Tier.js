import React from "react";

import "./Tier.css";

const Tier = () => {
    return (
        <div className="tier-container">
            <div className="content-container">
                <div className="hold-cont">
                    <div className="holdCont-header">
                        SolDough DAO Tiers
                    </div>
                    <div>
                        <ul className="tier-list">
                            <li>

                                <div className="tier-item">
                                    <span className="tier-header"> Holding 15+ SolDough </span><span className="x"> 11 X coefficients of the airdrop</span>
                                </div>

                            </li>
                            <li>
                                <div className="tier-item-1">
                                    <span className="tier-header" >Holding 8-14 SolDough</span>
                                    <span className="x"> 5 X coefficients of the airdrop</span>
                                </div>
                            </li>
                            <li>
                                <div className="tier-item-2">
                                    <span className="tier-header" >Holding 4-7 SolDoug</span>
                                    <span className="x"> 2 X coefficients of the airdrop</span>
                                </div>
                            </li>
                            <li>
                                <div className="tier-item-3">
                                    <span className="tier-header" >Holding 2-4 SolDough</span>
                                    <span className="x"> 1 X coefficients of the airdrop</span>
                                </div>
                            </li>
                            <li>
                                <div className="tier-item-4">
                                    <span className="tier-header" >Holding 0-1 SolDough</span>
                                    <span className="x"> 0 X coefficients of the airdrop</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="nft-tokenomics">
                    <div className="tokenomics-header">
                        NFTokenomics
                    </div>

                    <div>
                        <ul className="tier-list">
                            <li>
                                <div className="token-item">
                                    <span className="token-text-circle">25%</span>
                                    <span className="token-text"> of Launch Income to DAO Wallet</span>
                                </div>
                            </li>
                            <li>
                                <div className="token-item">
                                    <span className="token-text-circle">25%</span><span className="token-text"> of Launch Income to POM Token Wallet</span>
                                </div>
                            </li>
                            <li>
                                <div className="token-item">
                                    <span className="token-text-circle">60%</span><span className="token-text"> of Royalty Income to DAO Wallet</span>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Tier;