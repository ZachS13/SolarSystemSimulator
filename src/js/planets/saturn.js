import Planet from "./Planet.js";

const saturn = new Planet({
    name: "Saturn",

    mass: 5.683e26, // in kg

    radius: 58232, // in km

    position: { x: 1433.5e9, y: 0, z: 0 }, // in m, starting at perihelion

    velocity: { x: 0, y: 9.69e3, z: 0 }, // in m/s, average orbital speed

    texture: "saturn_texture.jpg"
});

export default saturn;