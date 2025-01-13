import P5 from "p5";
import type { Vector } from "p5";
import { createRecordButton } from "./helpers";

class Particle {
    pos: Vector;
    vel: Vector;
    acc: Vector;
    prevPos: Vector;
    maxSpeed: number;
    h: number;

    constructor(private p: P5) {
        this.pos = this.p.createVector(
            this.p.random(this.p.width),
            this.p.random(this.p.height),
        );
        this.vel = this.p.createVector(0, 0);
        this.acc = this.p.createVector(0, 0);
        this.maxSpeed = 2;
        this.prevPos = this.pos.copy();
        this.h = this.p.random(360);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(force: number) {
        this.acc.add(force);
    }

    follow(flowfield: Array<number>) {
        const x = this.p.floor(this.pos.x / 20);
        const y = this.p.floor(this.pos.y / 20);
        const index = x + y * this.p.floor(this.p.width / 20);
        const force = flowfield[index];
        this.applyForce(force);
    }

    show() {
        this.p.stroke(this.h, 50, 100, 0.1);
        this.p.strokeWeight(1);
        this.p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }

    updatePrev() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    edges() {
        if (this.pos.x > this.p.width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = this.p.width;
            this.updatePrev();
        }
        if (this.pos.y > this.p.height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = this.p.height;
            this.updatePrev();
        }
    }
}

export function flowFieldSketch(p: P5) {
    const particles: Particle[] = [];
    const num_particles = 400;
    const noiseScale = 0.01;
    const noiseStrength = 1;

    p.setup = () => {
        p.createCanvas(500, 500);
        p.colorMode(p.HSB, 360, 100, 100, 1);
        p.background(0);
        p.frameRate(15);
        p.smooth();
        for (let i = 0; i < num_particles; i++) {
            particles[i] = new Particle(p);
        }

        createRecordButton(p);
    };

    p.draw = () => {
        let yoff = 0;
        const flowfield = new Array(
            p.floor(p.width / 20) * p.floor(p.height / 20),
        );

        for (let y = 0; y < p.height; y += 20) {
            let x_offset = 0;
            for (let x = 0; x < p.width; x += 20) {
                const index = x / 20 + (y / 20) * p.floor(p.width / 20);
                const angle =
                    p.noise(x_offset, yoff, p.frameCount * 0.003) * p.TWO_PI;

                const v = P5.Vector.fromAngle(angle);
                v.setMag(noiseStrength);

                flowfield[index] = v;

                x_offset += noiseScale;
            }
            yoff += noiseScale;
        }

        for (const particle of particles) {
            particle.follow(flowfield);
            particle.update();
            particle.edges();
            particle.show();
        }
    };
}
