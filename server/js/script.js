console.log("script.js loaded");

// three.js from 
import * as THREE from 'three';

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.getElementById("game-container").appendChild(canvas);

    canvas.width = 800;
    canvas.height = 600;

    // Example: Draw a rectangle
    ctx.fillStyle = "#00F";
    ctx.fillRect(50, 50, 100, 100);
});
