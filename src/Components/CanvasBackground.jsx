// src/components/CanvasBackground.js
import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize(); // Set initial canvas size

    const mouse = { x: undefined, y: undefined };
    const maxRadius = 30;
    const minRadius = 2;
    const colors = [
      '#A8D5BA', // Soft Mint Green
      '#FFD3B4', // Warm Peach
      '#FFAAA7', // Pastel Coral
      '#F5E1A4', // Light Cream Yellow
      '#A3C4BC', // Muted Aqua Green
      '#E3C6A9', // Soft Tan
      '#B6C2D9', // Light Periwinkle Blue
      '#C3A29E', // Soft Clay Pink
      '#D4A5A5', // Muted Dusty Rose
      '#FFD6E0', // Soft Pastel Pink
      '#FBE7C6', // Light Pastel Yellow
      '#B5EAD7', // Pale Mint
      '#FFDAC1', // Light Apricot
      '#FFB7B2', // Soft Pink Coral
      '#C7CEEA'  // Soft Lavender
    ];



    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = minRadius;
      this.color = colors[Math.floor(Math.random() * colors.length)];

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      };

      this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxRadius) this.radius += 1;
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }

        this.draw();
      };
    }

    const circles = Array.from({ length: 500 }, () => {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 4;
      const dy = (Math.random() - 0.5) * 4;

      return new Circle(x, y, dx, dy, radius);
    });

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach((circle) => circle.update());
    }

    animate();

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[-1] object-cover bg-black "
    ></canvas>
  );
};

export default CanvasBackground;
