import Planet from "./Planet";

const mars = new Planet({
    name: "Mars",

    mass: 0.64171e24, // in kg

    radius: 3389.5, // in km

    position: { x: 227.9e6, y: 0, z: 0 }, // in km, starting at perihelion

    velocity: { x: 0, y: 24.077, z: 0 }, // in km/s, average orbital speed
    
    texture: "mars_texture.jpg"
});

export default mars;