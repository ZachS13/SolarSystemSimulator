import { G, AU } from '../physics/constants.js';

// Gravity based functions

export function computeDistance(bodyA, bodyB) {
    const dx = bodyB.position.x - bodyA.position.x;
    const dy = bodyB.position.y - bodyA.position.y;
    const dz = bodyB.position.z - bodyA.position.z;

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function normalizeVector(vector) {
    const magnitude = Math.sqrt(
        vector.x * vector.x +
        vector.y * vector.y +
        vector.z * vector.z
    );

    if (magnitude === 0) {
        return { x: 0, y: 0, z: 0 };
    }

    return {
        x: vector.x / magnitude,
        y: vector.y / magnitude,
        z: vector.z / magnitude
    };
}

export function computeDirectionVector(bodyA, bodyB) {
    const dx = bodyB.position.x - bodyA.position.x;
    const dy = bodyB.position.y - bodyA.position.y;
    const dz = bodyB.position.z - bodyA.position.z;

    return normalizeVector({ x: dx, y: dy, z: dz });
}

export function computeForceMagnitude(m1, m2, distance) {
    return (G * m1 * m2) / (distance * distance);
}

export function computeGravitationalForce(bodyA, bodyB) {
    const distance = computeDistance(bodyA, bodyB);

    return computeForceMagnitude(bodyA.mass, bodyB.mass, distance);
}

export function computeForceVector(bodyA, bodyB) {
    const forceMagnitude = computeGravitationalForce(bodyA, bodyB);
    const direction = computeDirectionVector(bodyA, bodyB);

    return {
        x: forceMagnitude * direction.x,
        y: forceMagnitude * direction.y,
        z: forceMagnitude * direction.z
    };
}

export function computeAcceleration(bodyA, bodyB) {
    const force = computeForceVector(bodyA, bodyB);

    return {
        x: force.x / bodyA.mass,
        y: force.y / bodyA.mass,
        z: force.z / bodyA.mass
    };
}