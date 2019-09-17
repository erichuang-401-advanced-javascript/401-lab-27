import React from 'react';

import './counter.scss';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      thumbsUp: 0,
      thumbsDown: 0,
      colorChange: "black"
    };
  }

  handleLikeButton = event => {
    event.preventDefault();
    this.setState(previousState => {
      return {
        score: previousState.score + 1,
        thumbsUp: previousState.thumbsUp + 1,
        thumbsDown: previousState.thumbsDown,
        colorChange: "blue"
      };
    });
  };

  handleDislikeButton = event => {
    event.preventDefault();
    this.setState(previousState => {
      return {
        score: previousState.score - 1,
        thumbsUp: previousState.thumbsUp,
        thumbsDown: previousState.thumbsDown + 1,
        colorChange: "red"
      };
    });
  };

  handleResetButton = event => {
    event.preventDefault();
    this.setState({
      score: 0,
      thumbsUp: 0,
      thumbsDown: 0,
      colorChange: "black"
    });
  };

  render() {
    return (
      <div>
        <button id="currentScore" className={this.state.colorChange} onClick={this.handleResetButton}>Score: {this.state.score}</button>
        <div id="counterWrap">
          <div id="like">Likes: {this.state.thumbsUp}</div>
          <div id="dislike">Dislikes: {this.state.thumbsDown}</div>
        </div>
        <div id="buttonWrap">
          <button onClick={this.handleLikeButton}>Thumbs Up</button>
          <button onClick={this.handleDislikeButton}>Thumbs Down</button>
        </div>
      </div>
    );
  }
}

export default Counter;
