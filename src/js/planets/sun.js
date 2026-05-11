import Planet from "./Planet.js";

const sun = new Planet({
    name: "Sun",

    mass: 1.989e30, // in kg
    
    radius: 696340, // in km
    
    position: { x: 0, y: 0, z: 0 }, // in km
    
    velocity: { x: 0, y: 0, z: 0 }, // in km/s
    
    texture: "sun_texture.jpg"
});

export default sun;