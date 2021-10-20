import React from "react";
import { ReactDOM } from "react";

import "./Part.css"

const Part = () => {
    return (
        <div className="part-container">

            <div className="gif-container">
                <div className="grid-container">
                    <div className="img-container" style={{"background-color" : "#C12EC1"}}></div>
                    <div className="img-container" style={{"background-color" : "#402EC1"}}></div>
                    <div className="img-container" style={{"background-color" : "#EC1F12"}}></div>

                    <div className="img-container" style={{"background-color" : "#E2EC12"}}></div>
                    <div className="img-container" style={{"background-color" : "#31B60E"}}></div>
                    <div className="img-container" style={{"background-color" : "#76FEBC"}}></div>

                    <div className="img-container" style={{"background-color" : "#76F2FE"}}></div>
                    <div className="img-container" style={{"background-color" : "#769FFE"}}></div>
                    <div className="img-container" style={{"background-color" : "#B476FE"}}></div>
                </div>
            </div>

            <div className="part-text-container">
                <h1 className="heading">How can I be a part?</h1>
                <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh venenatis cras sed.</p>
                <p className="about-paragraph"> Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Mattis enim ut tellus elementum sagittis vitae. In ornare quam viverra orci sagittis. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Orci dapibus ultrices in iaculis. Morbi tempus iaculis urna id volutpat. In vitae turpis massa sed elementum tempus. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Commodo elit at imperdiet dui accumsan sit amet.</p>
                <p className="about-paragraph">Tincidunt lobortis feugiat vivamus at augue eget. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Tincidunt arcu non sodales neque sodales. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Blandit cursus risus at ultrices mi tempus imperdiet. Ut etiam sit amet nisl. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Nulla facilisi etiam dignissim diam quis enim.</p>
            </div>

        </div>
    )
}

export default Part;