"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const designCategories = [
  "Interior Design",
  "Digital Design",
  "Art",
  "Photography",
];

const HeroThreeD = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Change category every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentCategoryIndex((prev) => (prev + 1) % designCategories.length);
        setIsFading(false);
      }, 600); // Wait for fade out before changing text
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Three.js setup and animation
  useEffect(() => {
    if (!canvasRef.current) return;

    // Basic scene setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    // Set renderer size to match viewport
    const setRendererSize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    setRendererSize();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    // Create point cloud
    const geometry = new THREE.BufferGeometry();
    const count = 50; // Number of points in each dimension (50x50 grid)
    const particlesCount = count * count;
    const particlePositions = new Float32Array(particlesCount * 3);

    // Create a grid of points
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;

        // Distribute points evenly in a grid
        particlePositions[index] = (i - count / 2) * 1.2; // X
        particlePositions[index + 1] = (j - count / 2) * 1.2; // Y
        particlePositions[index + 2] = 0; // Z (initially flat)
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    // Create material with visible points
    const material = new THREE.PointsMaterial({
      color: "#000000",
      size: 0.15,
      sizeAttenuation: true, // Size affected by distance from camera
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation function
    const animate = () => {
      const positions = particles.geometry.attributes.position.array;
      const time = Date.now() * 0.0003;

      // Animate each point in the cloud
      for (let i = 0; i < particlesCount; i++) {
        const idx = i * 3;

        // Calculate distance from center for wave effect
        const x = positions[idx];
        const y = positions[idx + 1];
        const distance = Math.sqrt(x * x + y * y);

        // Apply wave effect
        const z = Math.sin(distance * 0.5 - time * 2) * 2;
        positions[idx + 2] = z;
      }

      particles.geometry.attributes.position.needsUpdate = true;

      // Render the scene
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      setRendererSize();
    };

    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      // No need to remove canvas as we're using a ref

      // Clean up Three.js resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Canvas for Three.js animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative h-full flex flex-col justify-center items-center px-8 z-10">
        {/* Content */}
        <div
          ref={titleRef}
          className="text-center transition-transform duration-200 ease-out z-10"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light">
            <span
              className={`inline-block min-h-[1.2em] min-w-[15rem] transition-opacity duration-600 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {designCategories[currentCategoryIndex]}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroThreeD;
