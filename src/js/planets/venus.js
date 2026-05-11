import Planet from "./Planet.js";

const venus = new Planet({
    name: "Venus",

    mass: 4.867e24, // in kg

    radius: 6051.8, // in km

    position: { x: 108.2e9, y: 0, z: 0 }, // in m, starting at perihelion

    velocity: { x: 0, y: 35.02e3, z: 0 }, // in m/s, average orbital speed

    texture: "venus_texture.jpg"
});

export default venus;