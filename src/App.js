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
    let savedFriends = this.state.friends;

    savedFriends.forEach( element => {
      // if the ID has already been clicked, then restart the game
      if(element.id === id) {
        // console.log("element.clicked " + element.clicked)
        console.log(element.id)
        if(element.clicked) {
          this.resetGame()
          return
        } else {
          element.clicked = true;
          this.handleIncrement();
          this.handleScoreIncrement();
          this.handleTopScoreIncrement();
          savedFriends.sort((a,b) => Math.random() - 0.5);
          this.setState({friends: savedFriends});
        }
      }
    })

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