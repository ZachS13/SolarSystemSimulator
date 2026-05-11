import Planet from "./Planet.js";

const jupiter = new Planet({
    name: "Jupiter",

    mass: 1.898e27, // in kg

    radius: 69911, // in km

    position: { x: 778.5e9, y: 0, z: 0 }, // in m, starting at perihelion

    velocity: { x: 0, y: 13.07e3, z: 0 }, // in m/s, average orbital speed

    texture: "jupiter_texture.jpg"
});

export default jupiter;