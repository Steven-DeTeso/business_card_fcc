import React from "react";

function Info () {
    return (
        <div>
            <img className="headshot" src={require("../images/headshot.jpg")} alt="steve's headshot"/>
            <div className="info-general">
                <h1 className="info-name">Steven DeTeso</h1>
                <h2 className="info-job">Full Stack Developer</h2>
                <p className="info-website">stevendeteso.dev</p>
            </div>
            <div className="info-general btns">
                <button className="info-btn info-btn-email"> <img className="email-img" src={require("../images/Mail.png")}/>Email</button>
                <button className="info-btn info-btn-linkedin">LinkedIn</button>
            </div>
        </div>
    )
}

export default Info