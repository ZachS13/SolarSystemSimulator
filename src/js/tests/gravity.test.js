import mercury from '../planets/mercury.js';
import earth from '../planets/earth.js';
import neptune from '../planets/neptune.js';
import sun from '../planets/sun.js';
import { computeGravitationalForce } from '../physics/gravity.js';

function assertApproxEqual(actual, expected, tolerance, testName) {
    const difference = Math.abs(actual - expected);

    console.log(`\n${testName}`);
    console.log(`Actual:     ${actual.toExponential(4)}`);
    console.log(`Expected:   ${expected.toExponential(4)}`);
    // console.log(`Difference: ${difference.toExponential(4)}`);
    // console.log(`Tolerance:  ${tolerance.toExponential(4)}`);

    console.assert(
        difference < tolerance,
        `Test failed: ${testName}`
    );

    if (difference < tolerance) {
        console.log(`Test passed: ${testName}`);
    }
}

function testMercurySunGravitationalForce() {
    const calculatedForce = computeGravitationalForce(mercury, sun);
    const expectedForce = 1.31e22;
    const tolerance = 1e20;

    assertApproxEqual(
        calculatedForce,
        expectedForce,
        tolerance,
        'Mercury-Sun gravitational force'
    );
}

function testEarthSunGravitationalForce() {
    const calculatedForce = computeGravitationalForce(earth, sun);
    const expectedForce = 3.542e22;
    const tolerance = 1e20;

    assertApproxEqual(
        calculatedForce,
        expectedForce,
        tolerance,
        'Earth-Sun gravitational force'
    );
}

function testNeptuneSunGravitationalForce() {
    const calculatedForce = computeGravitationalForce(neptune, sun);
    const expectedForce = 6.68e20;
    const tolerance = 1e19;

    assertApproxEqual(
        calculatedForce,
        expectedForce,
        tolerance,
        'Neptune-Sun gravitational force'
    );
}

export function runGravityTests() {
    console.log('Running gravity tests...');

    testMercurySunGravitationalForce();
    testEarthSunGravitationalForce();
    testNeptuneSunGravitationalForce();
}