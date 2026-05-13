import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { SIZE_SCALE, DISTANCE_SCALE } from './renderScale.js';

export function createPlanetMesh(body) {
    const geometry = new THREE.SphereGeometry(body.radius * SIZE_SCALE, 32, 32);

    const material = new THREE.MeshStandardMaterial({
        color: body.color || 0xffffff
    });

    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(
        body.position.x * DISTANCE_SCALE,
        body.position.y * DISTANCE_SCALE,
        body.position.z * DISTANCE_SCALE
    );

    return mesh;
}