import Planet from "./Planet";

const mercury = new Planet({
    name: "Mercury",
    
    mass: 0.33011e24, // in kg
    
    radius: 2439.7, // in km

    position: { x: 57.9e6, y: 0, z: 0 }, // in km, starting at perihelion

    velocity: { x: 0, y: 47.36, z: 0 }, // in km/s, average orbital speed

    texture: "mercury_texture.jpg"
});

export default mercury;