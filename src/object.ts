export class WorldObject {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public speedX: number;
    public speedY: number;
    public color: string;

    constructor({x, y, width, height, speedX, speedY, color}: {
        x: number,
        y: number,
        width: number,
        height: number,
        speedX: number,
        speedY: number
        color: string;
    }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    step(world: World, dt: number) {
        this.x += this.speedX * dt;
        this.y += this.speedY * dt;

        if (this.x + this.width > world.width) {
            this.x = world.width - this.width;
            this.speedX = -this.speedX
        }

        if (this.x < 0) {
            this.x = 0;
            this.speedX = -this.speedX
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
    public objects: WorldObject[]
    public height: number;
    public width: number;
    public previousFrameTime: number;

    constructor({height, width}: {height: number, width: number}) {
        this.objects = [];
        this.height = height;
        this.width = width;
        this.previousFrameTime = Date.now();
    }

    processObjects() {
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].step(this, Date.now() - this.previousFrameTime);
            console.log(Date.now() - this.previousFrameTime)
        }

        this.previousFrameTime = Date.now();
    }

    addObject(object: WorldObject) {
        this.objects.push(object)
    }
}