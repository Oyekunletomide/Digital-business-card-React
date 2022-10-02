import React from "react"

export default function Info(){
    return (
    <div className="info">
        <img className="my-image" src="./IMG_20220728_170741.jpg"/>
        <h3>Oyekunle Tomide</h3>
        <h4>Frontend Developer</h4>
        <h5>tomideoyekunle.website</h5>
        <div className="btn-container">
            <button className="email-btn"><img className="btn-email" src="./icons/icons8-circled-envelope-30.png"/> Email</button>
            <button className="linkedln-btn"><img className="btn-linkedin" src="./icons/icons8-linkedin-circled-50.png"/> LinkedIn</button>
        </div>
    </div>
    )
}