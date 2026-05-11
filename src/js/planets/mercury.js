import Planet from "./Planet.js";

const mercury = new Planet({
    name: "Mercury",
    
    mass: 0.33011e24, // in kg
    
    radius: 2439.7, // in km

    position: { x: 57.9e9, y: 0, z: 0 }, // in m, starting at perihelion

    velocity: { x: 0, y: 47.36e3, z: 0 }, // in m/s, average orbital speed

    texture: "mercury_texture.jpg"
});

export default mercury;