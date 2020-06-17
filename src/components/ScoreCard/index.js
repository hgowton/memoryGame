import React from "react";
import "./style.css"


function ScoreCard(props) {
  return (
  <div className="container scoreCard">
    <div className="row">
        Score: {props.score}
      </div>
      <div className="row">
        High Score: {props.topScore}
    </div>
  </div>)
}

export default ScoreCard;