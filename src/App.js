import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import ScoreCard from "./components/ScoreCard";
import friends from "./friends.json";

class App extends Component {
  //Setting this.state.friends to the friends json array
  state={
    friends
  };

  //removes friend -- need to repurpose!!!========
  removeFriend = id => {
    //Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);

    //Set this.stat.friends equal to the new friends array
    this.setState({friends});
  };

  //Map over this.state.friends and rend a FriendCard component for each friend object
  render() {
    return(
      <Wrapper>
        <ScoreCard>Total</ScoreCard>
        {this.state.friends.map(friend => (
          <FriendCard
          removeFriend={this.removeFriend}
          id={friend.id}
          key={friend.id}
          image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;