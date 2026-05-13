import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

export function createCamera() {
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100000
    );

    camera.position.set(0, 200, 500);
    camera.lookAt(0, 0, 0);

    return camera;
}