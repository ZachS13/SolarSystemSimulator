import Planet from "./Planet";

const pluto = new Planet({
    name: "Pluto",
    
    mass: 0.01303e24, // in kg
    
    radius: 1188.3, // in km
    
    position: { x: 5906.4e6, y: 0, z: 0 }, // in km, starting at perihelion
    
    velocity: { x: 0, y: 4.74, z: 0 }, // in km/s, average orbital speed
    
    texture: "pluto_texture.jpg"
});

export default pluto;