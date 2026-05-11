import { runGravityTests } from './gravity.test.js';
// import { runIntegratorTests } from './integrator.test.js';
// import { runConstantsTests } from './constants.test.js';
// import { runPlanetTests } from './planet.test.js';

console.log('Running Solar System Simulator tests...\n');

runGravityTests();
// runIntegratorTests();
// runConstantsTests();
// runPlanetTests();

console.log('\nAll tests finished.');