import {
    addVectors,
    subtractVectors,
    multiplyVectorScalar,
    divideVectorScalar,
    magnitude,
    normalize
} from '../physics/vector.js';

import { assertApproxEqual } from './testUtils.js';

function testAddVectors() {
    const result = addVectors(
        { x: 1, y: 2, z: 3 },
        { x: 4, y: 5, z: 6 }
    );

    assertApproxEqual(result.x, 5, 0.0001, 'addVectors adds x values');
    assertApproxEqual(result.y, 7, 0.0001, 'addVectors adds y values');
    assertApproxEqual(result.z, 9, 0.0001, 'addVectors adds z values');
}

function testSubtractVectors() {
    const result = subtractVectors(
        { x: 10, y: 8, z: 6 },
        { x: 1, y: 2, z: 3 }
    );

    assertApproxEqual(result.x, 9, 0.0001, 'subtractVectors subtracts x values');
    assertApproxEqual(result.y, 6, 0.0001, 'subtractVectors subtracts y values');
    assertApproxEqual(result.z, 3, 0.0001, 'subtractVectors subtracts z values');
}

function testMultiplyVectorScalar() {
    const result = multiplyVectorScalar(
        { x: 2, y: 3, z: 4 },
        5
    );

    assertApproxEqual(result.x, 10, 0.0001, 'multiplyVectorScalar multiplies x value');
    assertApproxEqual(result.y, 15, 0.0001, 'multiplyVectorScalar multiplies y value');
    assertApproxEqual(result.z, 20, 0.0001, 'multiplyVectorScalar multiplies z value');
}

function testDivideVectorScalar() {
    const result = divideVectorScalar(
        { x: 10, y: 20, z: 30 },
        10
    );

    assertApproxEqual(result.x, 1, 0.0001, 'divideVectorScalar divides x value');
    assertApproxEqual(result.y, 2, 0.0001, 'divideVectorScalar divides y value');
    assertApproxEqual(result.z, 3, 0.0001, 'divideVectorScalar divides z value');
}

function testDivideVectorScalarByZero() {
    const result = divideVectorScalar(
        { x: 10, y: 20, z: 30 },
        0
    );

    assertApproxEqual(result.x, 0, 0.0001, 'divideVectorScalar handles divide by zero x');
    assertApproxEqual(result.y, 0, 0.0001, 'divideVectorScalar handles divide by zero y');
    assertApproxEqual(result.z, 0, 0.0001, 'divideVectorScalar handles divide by zero z');
}

function testMagnitude() {
    const result = magnitude({ x: 3, y: 4, z: 0 });

    assertApproxEqual(
        result,
        5,
        0.0001,
        'magnitude returns vector length'
    );
}

function testMagnitude3D() {
    const result = magnitude({ x: 2, y: 3, z: 6 });

    assertApproxEqual(
        result,
        7,
        0.0001,
        'magnitude returns 3D vector length'
    );
}

function testNormalize() {
    const result = normalize({ x: 10, y: 0, z: 0 });

    assertApproxEqual(result.x, 1, 0.0001, 'normalize x value');
    assertApproxEqual(result.y, 0, 0.0001, 'normalize y value');
    assertApproxEqual(result.z, 0, 0.0001, 'normalize z value');
}

function testNormalize3DVector() {
    const result = normalize({ x: 3, y: 4, z: 0 });

    assertApproxEqual(result.x, 0.6, 0.0001, 'normalize 3D vector x value');
    assertApproxEqual(result.y, 0.8, 0.0001, 'normalize 3D vector y value');
    assertApproxEqual(result.z, 0, 0.0001, 'normalize 3D vector z value');
}

function testNormalizeZeroVector() {
    const result = normalize({ x: 0, y: 0, z: 0 });

    assertApproxEqual(result.x, 0, 0.0001, 'normalize handles zero vector x');
    assertApproxEqual(result.y, 0, 0.0001, 'normalize handles zero vector y');
    assertApproxEqual(result.z, 0, 0.0001, 'normalize handles zero vector z');
}

export function runVectorTests() {
    console.log('\nRunning vector tests...');

    testAddVectors();
    testSubtractVectors();
    testMultiplyVectorScalar();
    testDivideVectorScalar();
    testDivideVectorScalarByZero();
    testMagnitude();
    testMagnitude3D();
    testNormalize();
    testNormalize3DVector();
    testNormalizeZeroVector();
}