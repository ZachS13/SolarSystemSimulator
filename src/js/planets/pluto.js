import Planet from "./Planet.js";

const pluto = new Planet({
    name: "Pluto",
    
    mass: 0.01303e24, // in kg
    
    radius: 1188.3, // in km
    
    position: { x: 5906.4e9, y: 0, z: 0 }, // in m, starting at perihelion
    
    velocity: { x: 0, y: 4.74e3, z: 0 }, // in m/s, average orbital speed
    
    texture: "pluto_texture.jpg"
});

export default pluto;