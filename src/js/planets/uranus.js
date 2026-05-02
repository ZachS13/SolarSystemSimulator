import Planet from "./Planet";

const uranus = new Planet({
    name: "Uranus",

    mass: 8.681e25, // in kg

    radius: 25362, // in km

    position: { x: 2871e6, y: 0, z: 0 }, // in km, starting at perihelion

    velocity: { x: 0, y: 6.80, z: 0 }, // in km/s, average orbital speed

    texture: "uranus_texture.jpg"
});

export default uranus;