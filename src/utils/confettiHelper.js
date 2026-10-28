import confetti from 'canvas-confetti';

/**
 * Auspicious golden and vermilion confetti explosion
 */
export function fireFestiveConfetti() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors: ['#F59E0B', '#DC2626', '#EAB308', '#FFFFFF', '#047857', '#F43F5E'],
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

/**
 * Sweet celebration burst (sweets / diya)
 */
export function fireSweetSparkles(x = 0.5, y = 0.5) {
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { x, y },
    colors: ['#FBBF24', '#F472B6', '#F8FAFC', '#34D399', '#FB7185'],
    ticks: 120,
    gravity: 0.8,
    scalar: 1,
    zIndex: 9999,
  });
}
