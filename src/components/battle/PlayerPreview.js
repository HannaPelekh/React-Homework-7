import React from "react";

const PlayerPreview = (props) => {   
    return (
        <div className="user-container">            
            <img className="userImg" src={props.userimg} alt="Avatar"/>
            <h2 className="username">{props.username}</h2> 
            {props.children}
        </div>
    );
};

export default PlayerPreview;
