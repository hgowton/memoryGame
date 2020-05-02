import React from "react";
import "./style.css"

function ScoreCard(props) {
  return <h1 className="scoreCard">{props.children}</h1>;
}

export default ScoreCard;