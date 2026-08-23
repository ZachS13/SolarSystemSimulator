import { CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";

export function createPlanetLabel(name, yOffset = 1) {
    const labelElement = document.createElement("div");

    labelElement.className = "planet-label";
    labelElement.textContent = name;

    const label = new CSS2DObject(labelElement);

    // Places the label above the planet mesh.
    label.position.set(0, yOffset, 0);

    return label;
}