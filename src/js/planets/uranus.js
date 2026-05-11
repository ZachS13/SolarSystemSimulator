import Planet from "./Planet.js";

const uranus = new Planet({
    name: "Uranus",

    mass: 8.681e25, // in kg

    radius: 25362, // in km

    position: { x: 2871e9, y: 0, z: 0 }, // in m, starting at perihelion

    velocity: { x: 0, y: 6.80e3, z: 0 }, // in m/s, average orbital speed

    texture: "uranus_texture.jpg"
});

export default uranus;