import React from "react";
import "./style.css"


function ScoreCard(props) {
  return (
  <div className="scoreCard">
        Score: {props.score}  High Score: {props.topScore}
  </div>)
}

export default ScoreCard;