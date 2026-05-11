import Planet from "./Planet.js";

const mars = new Planet({
    name: "Mars",

    mass: 0.64171e24, // in kg

    radius: 3389.5, // in km

    position: { x: 227.9e9, y: 0, z: 0 }, // in m, starting at perihelion

    velocity: { x: 0, y: 24.077e3, z: 0 }, // in m/s, average orbital speed
    
    texture: "mars_texture.jpg"
});

export default mars;