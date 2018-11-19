import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  // and this.state.count to zero
  state = {
    friends,
    count: 0
  };

  jumbleFriends = id => {
    let friendsCopy = [...friends];

    // If this friend has been previously clicked, restart the game
    if (friendsCopy[id].clicked) {

      // Reset the count
      this.setState({ count: 0 });
      
      // Reset the clicked values of all of the friends to false
      for (let i = 0; i < friendsCopy.length; i++) {
        friendsCopy[i].clicked = false;
      }
    }
    // Else increment the count and set the clicked value of this friend to true
    else {
      this.setState({ count: this.state.count + 1 });
      friendsCopy[id].clicked = true;
    }

    let newIndex = 0;
    let temp = {};
    
    
    // Jumble the friends array
    for (let i = 0; i < friendsCopy.length; i++) {
      newIndex = Math.floor(Math.random() * friendsCopy.length);
      temp = friendsCopy[newIndex];
      friendsCopy[newIndex] = friendsCopy[i];
      friendsCopy[newIndex].id = newIndex;
      friendsCopy[i] = temp;
      friendsCopy[i].id = i;
    }

    // Reset the state of friends
    this.setState({ friends: friendsCopy });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
          <Title>Clicky Game</Title>
          <Counter>Count: {this.state.count}</Counter>
        {this.state.friends.map(friend => (
          <FriendCard
            jumbleFriends={this.jumbleFriends}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
