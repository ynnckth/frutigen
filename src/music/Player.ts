import * as Tone from 'tone';
import {accompanimentNotes, leadMelodyNotes} from './Notes';

Tone.Transport.timeSignature = [6, 8];
Tone.Transport.bpm.value = 120;

const accompanimentSynth = new Tone.PolySynth(Tone.Synth, {
  volume: -8,
  envelope: {
    release: '1n',
    decay: '1n',
  },
  oscillator : {
    type : 'square2'
  }
}).toDestination();

const leadSynth = new Tone.PolySynth(Tone.Synth, {
  volume: -8,
  oscillator : {
    type : 'square1'
  }
}).toDestination();

export const accompaniment = new Tone.Part((time, note) => {
  accompanimentSynth.triggerAttackRelease(note.note, note.duration, time);
}, accompanimentNotes);

export const leadMelody = new Tone.Part((time, note) => {
  leadSynth.triggerAttackRelease(note.note, note.duration, time);
}, leadMelodyNotes);
