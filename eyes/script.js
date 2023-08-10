"use strict";

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const screenDiagonal = Math.sqrt(Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2));

// Eyeball `rx` divided by pupil `r`
const K = 2.4;
let numberOfEyes;
let rx;

function random(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function randomColor() {
    let R = random(0, 256), G = random(0, 256), B = random(0, 256);
    return "#" + R.toString(16) + G.toString(16) + B.toString(16);
}

function Circle(id, rx, ry, cx, cy, fill) {
    this.id = id;
    this.rx = rx;
    this.ry = ry;
    this.cx = cx;
    this.cy = cy;
    this.fill = fill;

    this.draw = function() {
        svgContainer.innerHTML +=
            `<ellipse class="eyeball" 
                      id="eyeball${this.id}" 
                      rx="${this.rx}" 
                      ry="${this.ry}" 
                      cx="${this.cx}" 
                      cy="${this.cy}" 
                      fill="white"
            />
            <ellipse class="eyeball" 
                     id="eyeball${this.id}" 
                     rx="${this.rx}" 
                     ry="${this.ry}"
                     cx="${this.cx - rx * 1.8}" 
                     cy="${this.cy}" 
                     fill="white" 
            />
            
            <circle id="pupil${this.id}" 
                    r="${this.rx / K}" 
                    cx="${this.cx}" 
                    cy="${this.cy}" 
                    fill="${this.fill}"
            />
            <circle id="pupil${this.id}" 
                    r="${this.rx / K}" 
                    cx="${this.cx - rx * 1.8}" 
                    cy="${this.cy}" 
                    fill="${this.fill}"
            />
            
            <circle class="flare" 
                    id="flare${this.id}" 
                    r="${this.rx / 5}" 
                    cx="${this.cx}" 
                    cy="${this.cy}" 
                    fill="white"
            />
            <circle class="flare"
                    id="flare${this.id}" 
                    r="${this.rx / 5}" 
                    cx="${this.cx - rx * 1.8}" 
                    cy="${this.cy}" 
                    fill="white"
            />`
    }
}

function assembleEyes() {
    numberOfEyes = random(5, 20);

    for (let i = 1; i < numberOfEyes; i++) {
        rx = random(10, 32);
        new Circle(
                i,
                rx,
            rx * 1.5,
                random(50, screenWidth - 50),
                random(50, screenHeight - 50),
                randomColor()
        ).draw();
    }
}

assembleEyes();