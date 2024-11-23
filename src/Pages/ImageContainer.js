import React from "react";
import mobile from "../assest/image/mobile.png"
import mobile2 from "../assest/image/mobile2.webp"
import "../Styles/LargestNetwork.css"

const ImageContainer = () => {
    return (
        <div>
            <img
                className="mobile"
                crossOrigin="anonymous"
                src={mobile}
                draggable="false"
                alt="Proposal"
            />
            <img
                className="mobile2"
                crossOrigin="anonymous"
                src={mobile2}
                draggable="false"
                alt="Proposal"
            />
            
        </div>
    );
};

export default ImageContainer;
