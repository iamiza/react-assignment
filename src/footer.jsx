import React from "react";
import './footer.css'

const Footer = (props) => {
    return(
        <div className="footer">
            <h1>{props.title}</h1>
        </div>
    )
}
export default Footer;