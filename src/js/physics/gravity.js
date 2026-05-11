import { G, AU } from '../physics/constants.js';

// Gravity based functions
export function computeGravitationalForce(bodyA, bodyB) {
    const dx = bodyB.position.x - bodyA.position.x;
    const dy = bodyB.position.y - bodyA.position.y;
    const dz = bodyB.position.z - bodyA.position.z;

    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    const m1 = bodyA.mass;
    const m2 = bodyB.mass;
    
    return (G * m1 * m2) / (distance * distance);
}

export function computeDistance(bodyA, bodyB) {
    return 0; // Placeholder value, replace with actual calculation
}

export function computeDirectionVector(bodyA, bodyB) {
    return { x: 0, y: 0, z: 0 }; // Placeholder value, replace with actual calculation
}

export function normalizeVector(vector) {
    return { x: 0, y: 0, z: 0 }; // Placeholder value, replace with actual calculation
}

export function computeForceMagnitude(m1, m2, distance) {
    return 0; // Placeholder value, replace with actual calculation
}