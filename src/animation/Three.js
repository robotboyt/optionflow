import * as THREE from "three";

import { useEffect, useRef } from "react";

function MyThree() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      0.1,
      1000
    );
    window.innerWidth >= 870
      ? (camera.position.z = 2)
      : (camera.position.z = 4);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    const sphereContainer = new THREE.Group();

    const numSpheres = 500;
    const sphereRadius = 0.01;

    for (let i = 0; i < numSpheres; i++) {
      const geometry = new THREE.SphereGeometry(sphereRadius, 20, 20);
      const material = new THREE.MeshBasicMaterial({ color: 0x5f51e3 });

      const sphere = new THREE.Mesh(geometry, material);
      const phi = Math.acos(-1 + (2 * i) / numSpheres);
      const theta = Math.sqrt(numSpheres * Math.PI) * phi;

      sphere.position.x = Math.cos(theta) * Math.sin(phi);
      sphere.position.y = Math.sin(theta) * Math.sin(phi);
      sphere.position.z = Math.cos(phi);
      sphereContainer.add(sphere);
    }

    scene.add(sphereContainer);

    const animate = () => {
      requestAnimationFrame(animate);
      sphereContainer.rotation.x += 0.004;
      sphereContainer.rotation.y += 0.006;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh" }}></div>
  );
}

export default MyThree;
