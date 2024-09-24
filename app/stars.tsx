import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'stats.js';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    let stats: Stats;
    const materials: THREE.PointsMaterial[] = [];
    let particles: THREE.Points;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const parameters: [number[], number][] = [
      [[1, 1, 0.5], 5],
      [[0.95, 1, 0.5], 4],
      [[0.9, 1, 0.5], 3],
      [[0.85, 1, 0.5], 2],
      [[0.8, 1, 0.5], 1]
    ];

    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      const HEIGHT = window.innerHeight;
      const WIDTH = window.innerWidth;

      const fieldOfView = 75;
      const aspectRatio = WIDTH / HEIGHT;
      const nearPlane = 1;
      const farPlane = 3000;
      const cameraZ = farPlane / 3;
      const fogHex = 0x000000;
      const fogDensity = 0.0007;

      camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
      camera.position.z = cameraZ;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(fogHex, fogDensity);

      const geometry = new THREE.BufferGeometry();
      const particleCount = 50;
      const vertices = [];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;
        vertices.push(x, y, z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      for (let i = 0; i < parameters.length; i++) {
        // const color = parameters[i][0];
        const size = parameters[i][1];

        materials[i] = new THREE.PointsMaterial({ size });
        particles = new THREE.Points(geometry, materials[i]);
        particles.rotation.x = Math.random() * 6;
        particles.rotation.y = Math.random() * 6;
        particles.rotation.z = Math.random() * 6;
        scene.add(particles);
      }

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(WIDTH, HEIGHT);
      container.appendChild(renderer.domElement);

      stats = new Stats();
      stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
      container.appendChild(stats.dom);

      window.addEventListener('resize', onWindowResize, false);
      document.addEventListener('mousemove', onDocumentMouseMove, false);
      document.addEventListener('touchstart', onDocumentTouchStart, false);
      document.addEventListener('touchmove', onDocumentTouchMove, false);
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onDocumentTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const onDocumentTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
      stats.update();
    };

    const render = () => {
      const time = Date.now() * 0.00005;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];
        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
      }

      for (let i = 0; i < materials.length; i++) {
        const color = parameters[i][0];
        const h = ((360 * (color[0] + time)) % 360) / 360;
        materials[i].color.setHSL(h, color[1], color[2]);
      }

      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      document.removeEventListener('touchstart', onDocumentTouchStart);
      document.removeEventListener('touchmove', onDocumentTouchMove);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;
