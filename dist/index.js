// TODO: Check if these are null
import { World, WorldObject } from "./object.js";
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const world = new World({ height: window.innerHeight, width: window.innerWidth });
const worldObject1 = new WorldObject({
    width: 150,
    height: 100,
    speedX: 2,
    speedY: 2,
    x: 0,
    y: 0,
    color: "green",
});
world.addObject(worldObject1);
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    world.width = window.innerWidth;
    world.height = window.innerHeight;
});
drawLoop();
function drawLoop() {
    window.requestAnimationFrame(() => {
        world.processObjects();
        draw(world);
        drawLoop();
    });
}
function draw(world) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let object of world.objects) {
        ctx.fillStyle = object.color;
        ctx.fillRect(object.x, object.y, object.width, object.height);
    }
}
