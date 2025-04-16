export class WorldObject {
    x;
    y;
    width;
    height;
    speedX;
    speedY;
    color;
    constructor({ x, y, width, height, speedX, speedY, color }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }
    step(world, dt) {
        this.x += this.speedX * dt;
        this.y += this.speedY * dt;
        if (this.x + this.width > world.width) {
            this.x = world.width - this.width;
            this.speedX = -this.speedX;
        }
        if (this.x < 0) {
            this.x = 0;
            this.speedX = -this.speedX;
        }
        if (this.y + this.height > world.height) {
            this.y = world.height - this.height;
            this.speedY = -this.speedY;
        }
        if (this.y < 0) {
            this.y = 0;
            this.speedY = -this.speedY;
        }
    }
}
export class World {
    objects;
    height;
    width;
    previousFrameTime;
    constructor({ height, width }) {
        this.objects = [];
        this.height = height;
        this.width = width;
        this.previousFrameTime = Date.now();
    }
    processObjects() {
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].step(this, Date.now() - this.previousFrameTime);
            console.log(Date.now() - this.previousFrameTime);
        }
        this.previousFrameTime = Date.now();
    }
    addObject(object) {
        this.objects.push(object);
    }
}
