import React from "react";
import "./style.css"


function ScoreCard(props) {
  return (
  <div className="container scoreCard">
    <div className="row">
      <div className="col-md-12">
        Card Count: {props.count}
      </div>
    </div>
  </div>)
}

export default ScoreCard;