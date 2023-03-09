import React from "react";

function Footer () {
    return (
        <div className="footer-general">
            <img className="twitter-img" src={require("../images/Twitter.png")}/>
            <img src={require("../images/Facebook.png")}/>
            <img src={require("../images/Instagram.png")}/>
            <img src={require("../images/GitHub.png")}/>
        </div>
    )
}

export default Footer