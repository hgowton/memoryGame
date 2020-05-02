import React from "react";
import "./style.css"


function ScoreCard(props) {
  return (
  <div className="container scoreCard">
    <div className="row">
      <div className="col-md-6">
        Card Count: {props.count}
      </div>
      <div className="col-md-6">
        Score: {props.score}
      </div>
    </div>
  </div>)
}

export default ScoreCard;