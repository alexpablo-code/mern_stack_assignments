
import './App.css';
import React from 'react';
import Album from './components/Album'

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn react</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>

      <Album 
      albumName={'Blue Side Park'}
      bandName={'Mac Miller'}
      releaseYear={'2012'}
      />

      <Album 
      albumName={'Titanic Rising'}
      bandName={'Weyes Blood'}
      releaseYear={'2021'}
      />
    </div>
  );
}

export default App;
