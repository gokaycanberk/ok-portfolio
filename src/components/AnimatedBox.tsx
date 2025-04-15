import { useEffect, useRef } from "react";

const AnimatedBox = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions - make it more square
    canvas.width = 320;
    canvas.height = 320;

    // Function to draw the box and its contents
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw border
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      // Calculate time-based values for animation
      const time = Date.now() / 2000; // Animation speed

      // Center point
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw animated circular pattern
      const maxCircles = 3;
      const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 10;

      for (let i = 0; i < maxCircles; i++) {
        const progress = (time + i / maxCircles) % 1;
        const radius = progress * maxRadius;
        const opacity = 1 - progress;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.stroke();
      }

      // Draw animated lines
      const lines = 6;
      const angleStep = (Math.PI * 2) / lines;

      for (let i = 0; i < lines; i++) {
        const angle = i * angleStep + time * 0.5;
        const length = Math.abs(Math.sin(time * 0.8)) * maxRadius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(angle) * length,
          centerY + Math.sin(angle) * length
        );
        ctx.stroke();
      }

      // Draw horizontal and vertical lines for structure
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();

      // Request next frame
      requestAnimationFrame(draw);
    };

    // Start animation loop
    draw();

    // Cleanup
    return () => {
      // Cancel animation if component unmounts
      cancelAnimationFrame(0);
    };
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default AnimatedBox;
