import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import ScoreCard from "./components/ScoreCard";
import friends from "./friends.json";

class App extends Component {
  //Setting this.state.friends to the friends json array
  state={
    count: 0,
    score: 0,
    friends: friends,
    topScore: 0,
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  }

  handleScoreIncrement = () => {
    this.setState({score: this.state.score + 10})
  }

  handleTopScoreIncrement = () => {
    if (this.state.score >= this.state.topScore) {
      console.log("topscore lower")
      this.setState({topScore: this.state.score + 10})
    }

    }
  

  //sorts cards on page
  updateFriend = id => {
    let correct = false;

    let savedFriends = this.state.friends.map( element => {
      // if the ID has already been clicked, then restart the game

      let newElt = {...element}
      if(newElt.id === id) {
        console.log(newElt.name)
        if(newElt.clicked) {
          console.log("already clicked " + newElt.clicked)
        } else {
          correct = true;
          newElt.clicked = true
        }
      }
      return newElt
    })
    if (correct) {
      this.handleIncrement();
      this.handleScoreIncrement();
      this.handleTopScoreIncrement();
    } else {
      return this.resetGame();
    }
    savedFriends.sort((a,b) => Math.random() - 0.5);
    this.setState({friends: savedFriends});
  };
  
  resetGame = () => {
    console.log("made it to reset")
    //resets friends array to json (fixes all true to false)
    const resetData = this.state.friends.map(item => ({ ...item, clicked: false }));
    this.setState({ count: 0, score: 0, friends: resetData })
  }

  //Map over this.state.friends and rend a FriendCard component for each friend object
  render() {
    return(
      <Wrapper>
        <ScoreCard count={this.state.count} score={this.state.score} topScore={this.state.topScore}/>
        {this.state.friends.map(friend => (
          <FriendCard
          updateFriend={this.updateFriend}
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleScoreIncrement={this.handleScoreIncrement}
          handleTopScoreIncrement={this.handleTopScoreIncrement}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;