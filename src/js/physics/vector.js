// Vector operations for 3D physics calculations

export function addVectors(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
        z: a.z + b.z
    };
}

export function subtractVectors(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y,
        z: a.z - b.z
    };
}

export function multiplyVectorScalar(vector, scalar) {
    return {
        x: vector.x * scalar,
        y: vector.y * scalar,
        z: vector.z * scalar
    };
}

export function divideVectorScalar(vector, scalar) {
    if (scalar === 0) {
        return { x: 0, y: 0, z: 0 };
    }

    return {
        x: vector.x / scalar,
        y: vector.y / scalar,
        z: vector.z / scalar
    };
}

export function magnitude(vector) {
    return Math.sqrt(
        vector.x * vector.x +
        vector.y * vector.y +
        vector.z * vector.z
    );
}

export function normalize(vector) {
    const length = magnitude(vector);

    if (length === 0) {
        return { x: 0, y: 0, z: 0 };
    }

    return divideVectorScalar(vector, length);
}
