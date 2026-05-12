import { runVectorTests } from './vector.test.js';
import { runGravityTests } from './gravity.test.js';
import { runIntegratorTests } from './integrator.test.js';

console.log('Running Solar System Simulator tests...\n');

try {
    runVectorTests();
    runGravityTests();
    runIntegratorTests();

    console.log('\nAll tests passed.');
} catch (error) {
    console.error('\nA test failed.');
    console.error(error.message);

    process.exit(1);
}