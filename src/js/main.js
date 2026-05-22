import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

import { createScene } from './renderer/scene.js';
import { createCamera } from './renderer/camera.js';
import { createRenderer } from './renderer/renderer.js';
import { createPlanetMesh } from './renderer/createPlanetMesh.js';

import { sun } from './planets/sun.js';
import { earth } from './planets/earth.js';

// Later, once rendering works, uncomment this:
// import { stepSimulation } from './physics/integrator.js';

console.log('main.js loaded');

const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();

const bodies = [sun, earth];

const meshes = new Map();

for (const body of bodies) {
    const mesh = createPlanetMesh(body);

    scene.add(mesh);
    meshes.set(body.name, mesh);
}

// Temporary light so MeshStandardMaterial works
const sunlight = new THREE.PointLight(0xffffff, 3, 0);
sunlight.position.set(0, 0, 0);
scene.add(sunlight);

// Small ambient light so planets are not fully black
const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
scene.add(ambientLight);

function updateMeshes() {
    for (const body of bodies) {
        const mesh = meshes.get(body.name);

        if (!mesh) continue;

        mesh.position.set(
            body.position.x,
            body.position.y,
            body.position.z
        );
    }
}

function animate() {
    requestAnimationFrame(animate);

    // Later, once the renderer is showing the Sun/Earth correctly:
    // const deltaTime = 60 * 60; // 1 simulated hour per frame
    // stepSimulation(bodies, deltaTime);

    updateMeshes();

    renderer.render(scene, camera);
}

animate();