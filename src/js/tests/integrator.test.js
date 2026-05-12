import earth from '../planets/earth.js';
import sun from '../planets/sun.js';

import {
    updateVelocity,
    updatePosition,
    stepBody,
    stepSimulation
} from '../physics/integrator.js';

import { computeAcceleration } from '../physics/gravity.js';
import { assertApproxEqual } from './testUtils.js';

function cloneBody(body) {
    return {
        ...body,
        position: { ...body.position },
        velocity: { ...body.velocity }
    };
}

function testUpdateVelocityEarthSun() {
    const testEarth = cloneBody(earth);

    const acceleration = computeAcceleration(testEarth, sun);
    const deltaTime = 1; // 1 second

    updateVelocity(testEarth, acceleration, deltaTime);

    const expectedVelocityX = earth.velocity.x + acceleration.x * deltaTime;
    const expectedVelocityY = earth.velocity.y + acceleration.y * deltaTime;
    const expectedVelocityZ = earth.velocity.z + acceleration.z * deltaTime;

    assertApproxEqual(
        testEarth.velocity.x,
        expectedVelocityX,
        0.0001,
        'updateVelocity updates Earth x velocity'
    );

    assertApproxEqual(
        testEarth.velocity.y,
        expectedVelocityY,
        0.0001,
        'updateVelocity updates Earth y velocity'
    );

    assertApproxEqual(
        testEarth.velocity.z,
        expectedVelocityZ,
        0.0001,
        'updateVelocity updates Earth z velocity'
    );
}

function testUpdatePositionEarth() {
    const testEarth = cloneBody(earth);

    const deltaTime = 1; // 1 second

    updatePosition(testEarth, deltaTime);

    const expectedPositionX = earth.position.x + earth.velocity.x * deltaTime;
    const expectedPositionY = earth.position.y + earth.velocity.y * deltaTime;
    const expectedPositionZ = earth.position.z + earth.velocity.z * deltaTime;

    assertApproxEqual(
        testEarth.position.x,
        expectedPositionX,
        0.0001,
        'updatePosition updates Earth x position'
    );

    assertApproxEqual(
        testEarth.position.y,
        expectedPositionY,
        0.0001,
        'updatePosition updates Earth y position'
    );

    assertApproxEqual(
        testEarth.position.z,
        expectedPositionZ,
        0.0001,
        'updatePosition updates Earth z position'
    );
}

function testStepBodyEarthSun() {
    const testEarth = cloneBody(earth);

    const deltaTime = 1; // 1 second
    const acceleration = computeAcceleration(testEarth, sun);

    const expectedVelocityX = testEarth.velocity.x + acceleration.x * deltaTime;
    const expectedVelocityY = testEarth.velocity.y + acceleration.y * deltaTime;
    const expectedVelocityZ = testEarth.velocity.z + acceleration.z * deltaTime;

    const expectedPositionX = testEarth.position.x + expectedVelocityX * deltaTime;
    const expectedPositionY = testEarth.position.y + expectedVelocityY * deltaTime;
    const expectedPositionZ = testEarth.position.z + expectedVelocityZ * deltaTime;

    stepBody(testEarth, sun, deltaTime);

    assertApproxEqual(
        testEarth.velocity.x,
        expectedVelocityX,
        0.0001,
        'stepBody updates Earth x velocity'
    );

    assertApproxEqual(
        testEarth.velocity.y,
        expectedVelocityY,
        0.0001,
        'stepBody updates Earth y velocity'
    );

    assertApproxEqual(
        testEarth.velocity.z,
        expectedVelocityZ,
        0.0001,
        'stepBody updates Earth z velocity'
    );

    assertApproxEqual(
        testEarth.position.x,
        expectedPositionX,
        0.0001,
        'stepBody updates Earth x position'
    );

    assertApproxEqual(
        testEarth.position.y,
        expectedPositionY,
        0.0001,
        'stepBody updates Earth y position'
    );

    assertApproxEqual(
        testEarth.position.z,
        expectedPositionZ,
        0.0001,
        'stepBody updates Earth z position'
    );
}

function testStepSimulationEarthSun() {
    const testEarth = cloneBody(earth);
    const bodies = [testEarth];

    const deltaTime = 1; // 1 second

    stepSimulation(bodies, sun, deltaTime);

    // Earth should have moved slightly after one simulation step.
    const positionChanged =
        testEarth.position.x !== earth.position.x ||
        testEarth.position.y !== earth.position.y ||
        testEarth.position.z !== earth.position.z;

    const velocityChanged =
        testEarth.velocity.x !== earth.velocity.x ||
        testEarth.velocity.y !== earth.velocity.y ||
        testEarth.velocity.z !== earth.velocity.z;

    if (!positionChanged) {
        throw new Error('Test failed: stepSimulation did not update Earth position');
    }

    if (!velocityChanged) {
        throw new Error('Test failed: stepSimulation did not update Earth velocity');
    }

    console.log('\nstepSimulation updates Earth position and velocity');
    console.log('Test passed: stepSimulation updates Earth');
}

export function runIntegratorTests() {
    console.log('\nRunning integrator tests...');

    testUpdateVelocityEarthSun();
    testUpdatePositionEarth();
    testStepBodyEarthSun();
    testStepSimulationEarthSun();
}