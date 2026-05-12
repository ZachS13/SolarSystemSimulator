import { runVectorTests } from './vector.test.js';
import { runGravityTests } from './gravity.test.js';
// import { runIntegratorTests } from './integrator.test.js';
// import { runPlanetTests } from './planet.test.js';

console.log('Running Solar System Simulator tests...\n');

runVectorTests();
runGravityTests();
// runIntegratorTests();
// runPlanetTests();

console.log('\nAll tests finished.');