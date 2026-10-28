// Web Audio API procedural sound engine for Bengali festive sound effects
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Synthesizes the sacred Shankh (Conch shell) blow
 */
export function playShankh() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 2.4;

    // Dual oscillator for rich spiritual acoustic resonance
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();

    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Fundamental frequencies of a traditional Shankha
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(370, now); // F#4
    osc1.frequency.linearRampToValueAtTime(415, now + 0.4); // rise
    osc1.frequency.linearRampToValueAtTime(425, now + 1.8);
    osc1.frequency.linearRampToValueAtTime(380, now + duration);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(370 * 2, now);
    osc2.frequency.linearRampToValueAtTime(415 * 2, now + 0.4);
    osc2.frequency.linearRampToValueAtTime(425 * 2, now + 1.8);
    osc2.frequency.linearRampToValueAtTime(380 * 2, now + duration);

    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(370 * 3, now);
    osc3.frequency.linearRampToValueAtTime(415 * 3, now + 0.4);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, now);
    filter.frequency.linearRampToValueAtTime(1400, now + 0.5);
    filter.frequency.linearRampToValueAtTime(800, now + duration);

    // Conch breath envelope
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.35); // swell
    gain.gain.setValueAtTime(0.35, now + 1.7);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);

    osc1.stop(now + duration);
    osc2.stop(now + duration);
    osc3.stop(now + duration);
  } catch (e) {
    console.warn("AudioContext error on playShankh:", e);
  }
}

/**
 * Synthesizes traditional Durga Puja Dhak (ঢাক) drum hits
 * types: 'dha' (heavy bass head), 'tin' (high stick rim), 'kura' (rolling doublet), 'tak' (sharp snap)
 */
export function playDhakBeat(type = 'dha') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (type === 'dha') {
      // Deep resonant drum body
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(65, now + 0.18);

      gain.gain.setValueAtTime(0.7, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);

    } else if (type === 'tin') {
      // High pitched cane stick ring on wooden rim
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.1);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);

    } else if (type === 'kura') {
      // Rapid doublet roll
      [0, 0.07].forEach((delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(260, now + delay);
        osc.frequency.exponentialRampToValueAtTime(120, now + delay + 0.08);

        gain.gain.setValueAtTime(0.4, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.1);
      });

    } else {
      // 'tak' sharp accented strike
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'square';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.08);

      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    }
  } catch (e) {
    console.warn("AudioContext error on playDhakBeat:", e);
  }
}

/**
 * Plays traditional temple brass chime / bell
 */
export function playTempleBell() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [880, 1320, 1760, 2640];
    const duration = 2.0;

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const initialVol = 0.25 / (idx + 1);
      gain.gain.setValueAtTime(initialVol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    });
  } catch (e) {
    console.warn("AudioContext error on playTempleBell:", e);
  }
}

/**
 * Procedural Bengali Festive Celebration Flute/Sitar arpeggio loop
 * Creates an auspicious Indian classical raga celebration melody
 */
export class ProceduralFestiveMusic {
  constructor() {
    this.isPlaying = false;
    this.intervalId = null;
    this.scale = [
      // Bilawal / Kalyani auspicious octave scale (Sa Re Ga Ma Pa Dha Ni Sa)
      261.63, 293.66, 329.63, 369.99, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25
    ];
    this.rhythmIdx = 0;
  }

  start() {
    if (this.isPlaying) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    this.isPlaying = true;

    // Melody sequence evoking celebratory Indian classical festive morning/evening
    const melody = [
      0, 2, 4, 5, 4, 2, 0, 4,
      5, 7, 8, 7, 5, 4, 2, 0,
      4, 5, 7, 9, 8, 7, 5, 4,
      2, 4, 5, 7, 4, 2, 0, 0
    ];

    let noteIdx = 0;
    this.intervalId = setInterval(() => {
      if (!this.isPlaying) return;
      const pitchIdx = melody[noteIdx % melody.length];
      const freq = this.scale[pitchIdx % this.scale.length];
      
      // Plucked sitar / bamboo flute harmonic tone
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.linearRampToValueAtTime(freq * 1.008, now + 0.15); // subtle microtone meend/glide

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, now);
      filter.frequency.exponentialRampToValueAtTime(400, now + 0.45);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);

      // Light Dhak accent on beats
      if (noteIdx % 4 === 0) {
        playDhakBeat('dha');
      } else if (noteIdx % 2 === 0) {
        playDhakBeat('tin');
      }

      noteIdx++;
    }, 280);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
