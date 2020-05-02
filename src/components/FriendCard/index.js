import React from "react";
import "./style.css"

function FriendCard(props) {
    return(
        <div className="card select" onClick={() => 
        {props.removeFriend(props.id);
        props.handleIncrement();
        props.handleScoreIncrement();
        props.handleTopScoreIncrement();
        ;
        }}>

            <div className="img-container" >
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <h4>{props.name}</h4>
            </div>
        </div>
    );
}

export default FriendCard;