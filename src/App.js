import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import ScoreCard from "./components/ScoreCard";
import friends from "./friends.json";

class App extends Component {
  //Setting this.state.friends to the friends json array
  state={
    count: 0,
    friends
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  }

  //sorts cards on page
  removeFriend = () => {
    // friends[id].clicked = true;
    friends.sort((a,b) => Math.random() - 0.5);

    //Set this.state.friends equal to the new friends array
    this.setState({friends});
  };

  //Map over this.state.friends and rend a FriendCard component for each friend object
  render() {
    return(
      <Wrapper>
        <ScoreCard count={this.state.count} />
        {this.state.friends.map(friend => (
          <FriendCard
          removeFriend={this.removeFriend}
          count={this.state.count}
          handleIncrement={this.handleIncrement}
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