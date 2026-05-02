import Planet from "./Planet";

const neptune = new Planet({
    name: "Neptune",

    mass: 1.024e26, // in kg

    radius: 24622, // in km

    position: { x: 4495.1e6, y: 0, z: 0 }, // in km, starting at perihelion

    velocity: { x: 0, y: 5.43, z: 0 }, // in km/s, average orbital speed

    texture: "neptune_texture.jpg"
});

export default neptune;