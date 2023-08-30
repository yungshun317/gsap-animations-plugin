"use strict";

let numberOfBees = 250;
const w = window.innerWidth;
const h = window.innerHeight;
const _2Pi = Math.PI * 2;

function random(min, max) {
    if (max === null) {
        max = min;
        min = 0;
    }

    return Math.random() * (max - min) + min;
}

function Bee(id, x, y, size) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.size = size;

    this.draw = function() {
        svgContainer.innerHTML +=
            `<image 
                id="${this.id}" 
                xlink:href="static/bee.png" 
                x="${this.x}" 
                y="${this.y}" 
                width="${this.size}%"
            />`;
    }
}

function collectBees() {
    for (let i = 0; i < numberOfBees; i++) {
        new Bee("bee" + i, random(w * 0.3, w * 0.5), random(h * 0.25, h * 0.6), 1).draw();
    }
}

collectBees();