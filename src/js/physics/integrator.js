import { addVectors, multiplyVectorScalar } from './vector.js';
import { computeAcceleration } from './gravity.js';

// Updates a body's velocity using acceleration and deltaTime
export function updateVelocity(body, acceleration, deltaTime) {
    const velocityChange = multiplyVectorScalar(acceleration, deltaTime);

    body.velocity = addVectors(body.velocity, velocityChange);

    return body.velocity;
}

// Updates a body's position using velocity and deltaTime
export function updatePosition(body, deltaTime) {
    const positionChange = multiplyVectorScalar(body.velocity, deltaTime);

    body.position = addVectors(body.position, positionChange);

    return body.position;
}

// Updates one body based on the gravity from one attractor, like Earth being pulled by the Sun
export function stepBody(body, attractor, deltaTime) {
    const acceleration = computeAcceleration(body, attractor);

    updateVelocity(body, acceleration, deltaTime);
    updatePosition(body, deltaTime);

    return body;
}

// Updates all orbiting bodies around one attractor, like all planets around the Sun
export function stepSimulation(bodies, attractor, deltaTime) {
    for (const body of bodies) {
        stepBody(body, attractor, deltaTime);
    }

    return bodies;
}