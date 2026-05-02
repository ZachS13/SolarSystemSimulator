import Planet from "./Planet";

const venus = new Planet({
    name: "Venus",

    mass: 4.867e24, // in kg

    radius: 6051.8, // in km

    position: { x: 108.2e6, y: 0, z: 0 }, // in km, starting at perihelion

    velocity: { x: 0, y: 35.02, z: 0 }, // in km/s, average orbital speed

    texture: "venus_texture.jpg"
});

export default venus;