import React, {useState} from 'react';
import './App.css';
import * as Tone from 'tone';
import {accompaniment, leadMelody} from './music/Player';

function App() {

  const [initialized, setInitialized] = useState<boolean>(false);
  const [stopped, setStopped] = useState<boolean>(true);

  const play = async () => {
    if (!initialized) {
      await Tone.start();
      Tone.Transport.start();
      setInitialized(true);
    }
    if (stopped) {
      accompaniment.start();
      leadMelody.start();
      console.log('Starting');
    } else {
      accompaniment.stop();
      leadMelody.stop();
      console.log('Stopping');
    }
    setStopped(!stopped);
  };

  return (
    <div className="app">
      <div onClick={() => play()}>
        {stopped ? 'START' : 'STOP'}
      </div>
      <div/>
      <div/>
    </div>
  );
}

export default App;
