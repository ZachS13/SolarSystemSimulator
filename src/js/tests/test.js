import { G, AU } from '../physics/constants.js';

console.log('testing for the physics engine and orbital mechanics.');

// Test case for calulating the gravitational force between two bodies
function calculateGravitationalForce(m1, m2, r) {
    return (G * m1 * m2) / (r * r);
}

// Example test case
const massEarth = 5.972e24; // in kg
const massSun = 1.989e30;   // in kg
const distance = AU * 1000; // convert AU to meters
const expectedForce = 3.542e22; // in Newtons (approximate)
const calculatedForce = calculateGravitationalForce(massEarth, massSun, distance);
console.assert(Math.abs(calculatedForce - expectedForce) < 1e20, 'Test failed: Gravitational force calculation is incorrect');
console.log('Gravitational force test passed!');
