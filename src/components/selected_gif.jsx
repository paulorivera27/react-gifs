import React, { Component } from 'react';

class SelectedGif extends Component {
  render() {
    const src = "https://media.giphy.com/media/58F36GFKeCfeZd7Mh7/giphy.gif";
    return (
      <div className='selected-gif '>
        <img src={src} alt='' className='gif'></img>
      </div>
    )
  }
}

export default SelectedGif;
