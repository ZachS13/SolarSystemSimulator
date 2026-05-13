import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

export function createRenderer() {
    const canvas = document.querySelector('#solar-system-canvas');

    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    return renderer;
}