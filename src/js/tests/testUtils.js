export function assertApproxEqual(actual, expected, tolerance, testName) {
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