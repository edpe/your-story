import * as Tone from "tone";

const envelope: Tone.EnvelopeOptions = {
  attack: 1,
  release: 4,
  releaseCurve: "linear",
};

const envelopeLong: Tone.EnvelopeOptions = {
  attack: 2,
  release: 2,
  decay: 0,
  sustain: 0,
  releaseCurve: "linear",
};

const filterEnvelope: Tone.FilterEnvelopeOptions = {
  baseFrequency: 200,
  octaves: 2,
  attack: 0,
  decay: 0,
  release: 1000,
};

let polySynth: Tone.PolySynth;

export const initializeMusic = () => {
  const Reverb = new Tone.Reverb(4);

  const descendPolySynth = new Tone.PolySynth(Tone.Synth, {
    envelope: envelopeLong,
    oscillator: { type: "sine" },
    portamento: 0.2,
    vibratoRate: 0.5,
    vibratoAmount: 0.2,
  }).chain(Reverb, Tone.Destination);

  polySynth = new Tone.PolySynth(Tone.DuoSynth, {
    harmonicity: 1,
    volume: -30,
    voice0: {
      oscillator: { type: "square" },
      envelope,
      filterEnvelope,
    },
    voice1: {
      oscillator: { type: "sine" },
      envelope,
      filterEnvelope,
    },
    vibratoRate: 0.5,
    vibratoAmount: 0.1,
    portamento: 1,
  }).chain(Reverb, Tone.Destination);

  const polySynthHigh = new Tone.PolySynth(Tone.DuoSynth, {
    harmonicity: 1,
    volume: -10,
    voice0: {
      oscillator: { type: "square" },
      envelope,
      filterEnvelope,
    },
    voice1: {
      oscillator: { type: "square" },
      envelope,
      filterEnvelope,
    },
    vibratoRate: 1,
    vibratoAmount: 0.2,
    portamento: 1,
  }).chain(Reverb, Tone.Destination);

  const scale = ["F3", "Eb3", "Db3", "C3", "Bb2", "Ab2", "G2", "F2"];
  const scaleHigh = ["F6", "Eb6", "Db6", "C6", "Bb5", "Ab5", "G5", "F5"];

  new Tone.Loop((time) => {
    polySynth.triggerAttackRelease("F4", "1m", time, 0.95);
  }, 19.7).start(4);
  new Tone.Loop((time) => {
    polySynth.triggerAttackRelease("Ab4", "1m", time, 0.89);
  }, 17.8).start(8.1);
  new Tone.Loop((time) => {
    polySynth.triggerAttackRelease("C5", "1m", time, 0.78);
  }, 21.3).start(5.6);
  new Tone.Loop((time) => {
    polySynth.triggerAttackRelease("Db5", "1m", time, 0.82);
  }, 18.5).start(12.6);
  new Tone.Loop((time) => {
    polySynth.triggerAttackRelease("Eb5", "1m", time, 0.7);
  }, 20.0).start(9.2);
  new Tone.Loop((time) => {
    polySynth.triggerAttackRelease("F5", "1m", time, 0.7);
  }, 20.0).start(14.1);
  new Tone.Loop((time) => {
    polySynth.triggerAttackRelease("Ab5", "1m", time, 0.85);
  }, 17.7).start(3.1);
  new Tone.Loop((time) => {
    descendPolySynth.triggerAttackRelease(scale[0], "2m", time, 0.1);
  }, 28).start(32);
  new Tone.Loop((time) => {
    descendPolySynth.triggerAttackRelease(scale[1], "2m", time, 0.1);
  }, 28.1).start(36);
  new Tone.Loop((time) => {
    descendPolySynth.triggerAttackRelease(scale[2], "2m", time, 0.1);
  }, 28.2).start(40);
  new Tone.Loop((time) => {
    descendPolySynth.triggerAttackRelease(scale[3], "2m", time, 0.1);
  }, 28.3).start(44);
  new Tone.Loop((time) => {
    descendPolySynth.triggerAttackRelease(scale[4], "2m", time, 0.1);
  }, 28.4).start(48);
  new Tone.Loop((time) => {
    descendPolySynth.triggerAttackRelease(scale[5], "2m", time, 0.1);
  }, 28.5).start(52);
  new Tone.Loop((time) => {
    descendPolySynth.triggerAttackRelease(scale[6], "2m", time, 0.1);
  }, 28.6).start(56);
  new Tone.Loop((time) => {
    descendPolySynth.triggerAttackRelease(scale[7], "2m", time, 0.1);
  }, 28.7).start(60);
  new Tone.Loop((time) => {
    polySynthHigh.triggerAttackRelease(scaleHigh[0], "2m", time, 0.1);
  }, 28).start(70);
  new Tone.Loop((time) => {
    polySynthHigh.triggerAttackRelease(scaleHigh[1], "2m", time, 0.1);
  }, 28.1).start(74);
  new Tone.Loop((time) => {
    polySynthHigh.triggerAttackRelease(scaleHigh[2], "2m", time, 0.1);
  }, 28.2).start(78);
  new Tone.Loop((time) => {
    polySynthHigh.triggerAttackRelease(scaleHigh[3], "2m", time, 0.1);
  }, 28.3).start(82);
  new Tone.Loop((time) => {
    polySynthHigh.triggerAttackRelease(scaleHigh[4], "2m", time, 0.1);
  }, 28.4).start(86);
  new Tone.Loop((time) => {
    polySynthHigh.triggerAttackRelease(scaleHigh[5], "2m", time, 0.1);
  }, 28.5).start(90);
  new Tone.Loop((time) => {
    polySynthHigh.triggerAttackRelease(scaleHigh[6], "2m", time, 0.1);
  }, 28.6).start(94);
  new Tone.Loop((time) => {
    polySynthHigh.triggerAttackRelease(scaleHigh[7], "2m", time, 0.1);
  }, 28.7).start(98);

  Tone.Transport.start();
};
