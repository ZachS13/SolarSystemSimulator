import * as THREE from "three";

export function createOrbitRing(radius, options = {}) {
    const {
        color = 0x666666,
        opacity = 0.75,
        thickness = 0.025,
        segments = 256
    } = options;

    const geometry = new THREE.RingGeometry(
        radius - thickness,
        radius + thickness,
        segments
    );

    const material = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity
    });

    const orbitRing = new THREE.Mesh(geometry, material);

    // RingGeometry starts in the XY plane.
    // Rotate it so the orbit lies flat on the XZ plane.
    orbitRing.rotation.x = Math.PI / 2;

    return orbitRing;
}