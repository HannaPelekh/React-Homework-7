import React from "react";
import './loader.css'; 

const Loader = () => {
    return (
        <div className="loading-container">
            <div className="circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>

    )
}
export default Loader;