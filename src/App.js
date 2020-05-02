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
    friends
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  }

  handleScoreIncrement = () => {
    this.setState({score: this.state.score + 10})
  }

  //sorts cards on page
  removeFriend = id => {
    const savedFriends = this.state.friends;

    savedFriends.forEach( element => {
      //if the ID has already been clicked, then restart the game
      if(element.id === id) {
        if(element.clicked) {
          return this.resetGame()
        } else {
          element.clicked = true;
          savedFriends.sort((a,b) => Math.random() - 0.5);
        }
      }
    })

    //Set this.state.friends equal to the new friends array
    this.setState({"friends": savedFriends});
  };
  
  resetGame = () => {
    //resets friends array to json (fixes all true to false)
    //CONFIGURE score for highest score ___________
    console.log("made it to reset")
    this.setState({ "count": 0, friends })
  }

  //Map over this.state.friends and rend a FriendCard component for each friend object
  render() {
    return(
      <Wrapper>
        <ScoreCard count={this.state.count} score={this.state.score} />
        {this.state.friends.map(friend => (
          <FriendCard
          removeFriend={this.removeFriend}
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleScoreIncrement={this.handleScoreIncrement}
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