export default class Planet {

    constructor({
        name,
        mass,
        radius,
        position,
        velocity,
        texture
    }) {

        this.name = name;
        this.mass = mass;
        this.radius = radius;

        this.position = position; // {x,y,z}
        this.velocity = velocity; // {x,y,z} -- for each axis, how fast the planet is moving in that direction
        this.acceleration = { x: 0, y: 0, z: 0 };

        this.texture = texture;

    }

}