import earth from '../planets/earth.js';
import sun from '../planets/sun.js';

import {
    computeDistance,
    computeDirectionVector,
    computeForceMagnitude,
    computeGravitationalForce,
    computeForceVector,
    computeAcceleration
} from '../physics/gravity.js';

import { assertApproxEqual } from './testUtils.js';

function testComputeDistanceEarthSun() {
    const distance = computeDistance(earth, sun);

    const expectedDistance = 149.6e9; // meters
    const tolerance = 1e6;

    assertApproxEqual(
        distance,
        expectedDistance,
        tolerance,
        'computeDistance returns Earth-Sun distance'
    );
}

function testComputeDirectionVectorEarthToSun() {
    const direction = computeDirectionVector(earth, sun);

    assertApproxEqual(
        direction.x,
        -1,
        0.0001,
        'computeDirectionVector Earth to Sun x direction'
    );

    assertApproxEqual(
        direction.y,
        0,
        0.0001,
        'computeDirectionVector Earth to Sun y direction'
    );

    assertApproxEqual(
        direction.z,
        0,
        0.0001,
        'computeDirectionVector Earth to Sun z direction'
    );
}

function testComputeForceMagnitudeEarthSun() {
    const distance = computeDistance(earth, sun);

    const forceMagnitude = computeForceMagnitude(
        earth.mass,
        sun.mass,
        distance
    );

    const expectedForce = 3.542e22;
    const tolerance = 1e20;

    assertApproxEqual(
        forceMagnitude,
        expectedForce,
        tolerance,
        'computeForceMagnitude returns Earth-Sun force magnitude'
    );
}

function testComputeGravitationalForceEarthSun() {
    const force = computeGravitationalForce(earth, sun);

    const expectedForce = 3.542e22;
    const tolerance = 1e20;

    assertApproxEqual(
        force,
        expectedForce,
        tolerance,
        'computeGravitationalForce returns Earth-Sun gravitational force'
    );
}

function testComputeForceVectorEarthSun() {
    const forceVector = computeForceVector(earth, sun);

    const expectedForceX = -3.542e22;
    const expectedForceY = 0;
    const expectedForceZ = 0;
    const tolerance = 1e20;

    assertApproxEqual(
        forceVector.x,
        expectedForceX,
        tolerance,
        'computeForceVector Earth-Sun x force'
    );

    assertApproxEqual(
        forceVector.y,
        expectedForceY,
        tolerance,
        'computeForceVector Earth-Sun y force'
    );

    assertApproxEqual(
        forceVector.z,
        expectedForceZ,
        tolerance,
        'computeForceVector Earth-Sun z force'
    );
}

function testComputeAccelerationEarthSun() {
    const acceleration = computeAcceleration(earth, sun);

    const expectedAccelerationX = -0.00593; // m/s^2
    const expectedAccelerationY = 0;
    const expectedAccelerationZ = 0;
    const tolerance = 0.0001;

    assertApproxEqual(
        acceleration.x,
        expectedAccelerationX,
        tolerance,
        'computeAcceleration Earth toward Sun x acceleration'
    );

    assertApproxEqual(
        acceleration.y,
        expectedAccelerationY,
        tolerance,
        'computeAcceleration Earth toward Sun y acceleration'
    );

    assertApproxEqual(
        acceleration.z,
        expectedAccelerationZ,
        tolerance,
        'computeAcceleration Earth toward Sun z acceleration'
    );
}

export function runGravityTests() {
    console.log('\nRunning gravity tests...');

    testComputeDistanceEarthSun();
    testComputeDirectionVectorEarthToSun();
    testComputeForceMagnitudeEarthSun();
    testComputeGravitationalForceEarthSun();
    testComputeForceVectorEarthSun();
    testComputeAccelerationEarthSun();
}