# Solar System Simulation  

## Summary  
This project is an interactive 3D simulation of the solar system built using JavaScript and Three.js. The goal is to visually represent how planets orbit the sun while keeping the system simple enough to run smoothly in a browser.  

It combines basic physics concepts with real-time rendering to create something that is both visual and interactive.  

---

## Overview  
This is an **ongoing project** that is still in development. The simulation is structured with a separation between physics and rendering to keep the code clean and scalable.  

- The **physics layer** handles gravity, velocity, and position updates  
- The **rendering layer** is responsible for drawing planets, lighting, and the 3D scene  

The current focus is building a solid foundation before expanding into more advanced features.  

---

## Objectives  
- Simulate planetary motion using simplified gravitational physics  
- Build a modular and maintainable codebase  
- Render a 3D solar system using Three.js  
- Create an interactive experience for exploring the system  
- Set up a structure that supports future expansion  

---

## Future Features  
- **Real-Time Planet Positions**  
  Input a specific date and time to calculate and display planet positions in the past or future  

- **Moveable Camera System**  
  Allow users to freely move around the solar system and zoom into planets  

---

## Project Structure
```  
SolarSystemSimulation/
│── index.html
│── README.md
│
└── src/
│    └── js/
│    │   ├── physics/
│    │   │  ├── constants.js    # Physics constants (G, etc.)
│    │   │  ├── gravity.js     # Gravitational force calculations
│    │   │  └── integrator.js  # Updates velocity and position over time
│    │   │
│    │   ├── planets/
│    │   │   ├── Planet.js # Base planet class/logic
│    │   │   ├── sun.js
│    │   │   ├── mercury.js
│    │   │   ├── venus.js
│    │   │   ├── earth.js
│    │   │   ├── mars.js
│    │   │   ├── jupiter.js
│    │   │   ├── saturn.js
│    │   │   ├── uranus.js
│    │   │   ├── neptune.js
│    │   │   └── pluto.js
│    │   │   
│    │   └── tests/     # Testing 
│    └── textures/      # Planet textures
└──
```
---

## Checklist  

### Core Features  
- [ ] Set up Three.js scene  
- [ ] Add sun and planets to the scene  
- [ ] Implement basic orbital motion  
- [ ] Add lighting and textures  

### Physics  
- [ ] Implement gravitational force calculations  
- [ ] Update velocity and position over time  
- [ ] Tune values for stable orbits  

### Interaction  
- [ ] Add camera controls  
- [ ] Allow zooming and movement  
- [ ] Improve user navigation  

### Future Enhancements  
- [ ] Add real-time date/time simulation  
- [ ] Improve orbital accuracy  
- [ ] Add UI controls for simulation speed  
- [ ] Add labels or planet info display  

---

## Status  
🚧 This project is actively being developed and is not yet complete.