import { G } from './constants.js';

import {
    subtractVectors,
    multiplyVectorScalar,
    divideVectorScalar,
    magnitude,
    normalize
} from './vector.js';

export function computeDistance(bodyA, bodyB) {
    const displacement = subtractVectors(bodyB.position, bodyA.position);

    return magnitude(displacement);
}

export function computeDirectionVector(bodyA, bodyB) {
    const displacement = subtractVectors(bodyB.position, bodyA.position);

    return normalize(displacement);
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

    return multiplyVectorScalar(direction, forceMagnitude);
}

export function computeAcceleration(bodyA, bodyB) {
    const force = computeForceVector(bodyA, bodyB);

    return divideVectorScalar(force, bodyA.mass);
}