import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import SelectedGif from './selected_gif.jsx'

const App = ({ name }) => {
  return (
    <div>
      <div className='left-scene'>
        <div className='form-search'>
          <SearchBar />
          <SelectedGif />
        </div>
      </div>
      <div className='right-scene'></div>
    </div>
  );
};

export default App;
