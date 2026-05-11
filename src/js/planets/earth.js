import Planet from "./Planet.js";

const earth = new Planet({
    name: "Earth",

    mass: 5.972e24, // in kg

    radius: 6371, // in km

    position: { x: 149.6e9, y: 0, z: 0 }, // in m, starting at perihelion

    velocity: { x: 0, y: 29.78e3, z: 0 }, // in m/s, average orbital speed

    texture: "earth_texture.jpg"
});

export default earth;