import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import ScoreCard from "./components/ScoreCard";
import friends from "./friends.json";
import villian from "./villian.json";
import './App.css'

class App extends Component {
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
      this.setState({topScore: this.state.score + 10})
    }
  }
  
  changeDeck = () => {
    this.resetGame();
    if(this.state.friends === friends) {
      this.setState({ friends: villian })
    } else {
      this.setState({ friends: friends })
    }
  }

  //sorts cards on page
  updateFriend = id => {
    let correct = false;

    let savedFriends = this.state.friends.map( element => {
      // if the ID has already been clicked, then restart the game

      let newElt = {...element}
      if(newElt.id === id) {
        if(newElt.clicked) {
          alert(`Oops you have already clicked ${newElt.name}`)
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
    console.log('score: ', this.state.score)
  };
  
  resetGame = () => {
    const resetData = this.state.friends.map(item => ({ ...item, clicked: false }));
    this.setState({ count: 0, score: 0, friends: resetData })
  }

  render() {
    return(
      <div>
        <header className="App-header">
              <img src='./img/MarvelLogo.png' alt="logo"/>
        </header>
              <ScoreCard 
                count={this.state.count} 
                score={this.state.score} 
                topScore={this.state.topScore}/>
                <button onClick={this.changeDeck}>Change Deck</button>
          {this.state.score > 150 ? 
          <h1> Contragulations on reaching the top score!</h1> : 
          (<Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
          updateFriend={this.updateFriend}
          handleIncrement={this.handleIncrement}
          handleScoreIncrement={this.handleScoreIncrement}
          handleTopScoreIncrement={this.handleTopScoreIncrement}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          />
        ))} </Wrapper>) }

      </div>

    );
  }
}

export default App;