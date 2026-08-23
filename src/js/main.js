import * as THREE from "three";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

import { planetData } from "./planets/planetData.js";

import { createScene } from "./renderer/scene.js";
import { createCamera } from "./renderer/camera.js";
import { createRenderer } from "./renderer/renderer.js";
import { createControls } from "./renderer/controls.js";
import { createPlanetMesh } from "./renderer/createPlanetMesh.js";
import { createOrbitRing } from "./renderer/createOrbitRing.js";
import { setupPlanetDropdown } from "./renderer/planetFocus.js";

const scene = createScene();

const camera = createCamera();
camera.position.set(0, 35, 55);

const renderer = createRenderer();
document.body.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "fixed";
labelRenderer.domElement.style.top = "0";
labelRenderer.domElement.style.left = "0";
labelRenderer.domElement.style.pointerEvents = "none";
document.body.appendChild(labelRenderer.domElement);

const controls = createControls(camera, renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
scene.add(ambientLight);

const sunLight = new THREE.PointLight(0xffffff, 3, 1000);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);

const planetObjects = new Map();

for (const planet of planetData) {
    const planetObject = createPlanetMesh(planet);

    scene.add(planetObject.mesh);

    const planetId = planet.id ?? planet.name.toLowerCase();

    planetObjects.set(planetId, {
        data: planet,
        ...planetObject
    });

    const isSun = planetId === "sun";

    if (!isSun) {
        const orbitRing = createOrbitRing(planetObject.sceneDistance);
        scene.add(orbitRing);
    }
}

setupPlanetDropdown("planetSelect", planetObjects, camera, controls);

function animate() {
    requestAnimationFrame(animate);

    for (const planetObject of planetObjects.values()) {
        planetObject.mesh.rotation.y += 0.003;
    }

    controls.update();

    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
});