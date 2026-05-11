import Planet from "./Planet.js";

const neptune = new Planet({
    name: "Neptune",

    mass: 1.024e26, // in kg

    radius: 24622, // in km

    position: { x: 4495.1e9, y: 0, z: 0 }, // in m, starting at perihelion

    velocity: { x: 0, y: 5.43e3, z: 0 }, // in m/s, average orbital speed

    texture: "neptune_texture.jpg"
});

export default neptune;