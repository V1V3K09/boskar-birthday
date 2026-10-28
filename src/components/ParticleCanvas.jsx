import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle types:
    // 1. Shiuli Flower (White 5-6 star petals + orange-red center stalk)
    // 2. Kash Phool fluff (silky white feather floaters)
    // 3. Golden sparkles (festive aura)
    const particleCount = Math.min(Math.floor(width / 28), 65); // Generous count for 32" wide monitors
    const particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -20;
        this.size = Math.random() * 8 + 7;
        this.speedY = Math.random() * 0.8 + 0.4;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = (Math.random() - 0.5) * 0.02;
        this.type = Math.random() > 0.45 ? 'shiuli' : Math.random() > 0.3 ? 'kash' : 'sparkle';
        this.opacity = Math.random() * 0.6 + 0.3;
        this.sway = Math.random() * 2 + 1;
        this.swaySpeed = Math.random() * 0.02 + 0.01;
        this.swayOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.angle += this.angularSpeed;
        this.swayOffset += this.swaySpeed;
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.swayOffset) * 0.4;

        if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.opacity;

        if (this.type === 'shiuli') {
          // Draw Shiuli flower: 6 white petals + orange coral center
          const petals = 6;
          ctx.fillStyle = '#FFFFFF';
          for (let i = 0; i < petals; i++) {
            ctx.save();
            ctx.rotate((i * Math.PI * 2) / petals);
            ctx.beginPath();
            ctx.ellipse(0, -this.size * 0.6, this.size * 0.3, this.size * 0.55, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
          // Saffron orange stalk / center (distinctive feature of Shiuli)
          ctx.fillStyle = '#EA580C';
          ctx.beginPath();
          ctx.arc(0, 0, this.size * 0.22, 0, Math.PI * 2);
          ctx.fill();

        } else if (this.type === 'kash') {
          // Kash phool autumn plume (soft white plume wisps)
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(0, -this.size);
          ctx.quadraticCurveTo(this.size * 0.4, 0, 0, this.size);
          ctx.stroke();

          // Soft feather fringes
          ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
          for (let f = -this.size * 0.7; f <= this.size * 0.7; f += 3) {
            ctx.beginPath();
            ctx.arc(f * 0.3, f, 1.8, 0, Math.PI * 2);
            ctx.fill();
          }

        } else {
          // Festive golden aura sparkle
          ctx.fillStyle = '#F59E0B';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#FBBF24';
          ctx.beginPath();
          ctx.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
