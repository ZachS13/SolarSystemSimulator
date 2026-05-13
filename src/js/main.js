// This is where we will tackle the rendering of the planets.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { createScene } from './renderer/scene.js';
import { createCamera } from './renderer/camera.js';
import { createRenderer } from './renderer/renderer.js';
import { createPlanetMesh } from './renderer/createPlanetMesh.js';

import { sun } from './planets/sun.js';
import { earth } from './planets/earth.js';

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

const light = new THREE.PointLight(0xffffff, 2, 0);
light.position.set(0, 0, 0);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);

    for (const body of bodies) {
        const mesh = meshes.get(body.name);

        mesh.position.set(
            body.position.x * DISTANCE_SCALE,
            body.position.y * DISTANCE_SCALE,
            body.position.z * DISTANCE_SCALE
        );
    }

    renderer.render(scene, camera);
}

animate();