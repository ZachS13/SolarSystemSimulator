import Planet from "./Planet";

const saturn = new Planet({
    name: "Saturn",

    mass: 5.683e26, // in kg

    radius: 58232, // in km

    position: { x: 1433.5e6, y: 0, z: 0 }, // in km, starting at perihelion

    velocity: { x: 0, y: 9.69, z: 0 }, // in km/s, average orbital speed

    texture: "saturn_texture.jpg"
});

export default saturn;