import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";

const P5Background = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let p5Instance: p5;

    const initP5 = async () => {
      try {
        const p5 = (await import("p5")).default;

        const sketch = (p: p5) => {
          let particles: Particle[] = [];
          let numParticles = 600;

          p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            for (let i = 0; i < numParticles; i++) {
              particles.push(
                new Particle(p.random(p.width), p.random(p.height))
              );
            }
            p.noStroke();
          };

          p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
          };

          p.draw = () => {
            p.background(5, 5, 20);
            for (let particle of particles) {
              particle.flock(particles);
              particle.update();
              particle.show();
            }
          };

          class Particle {
            pos: p5.Vector;
            vel: p5.Vector;
            acc: p5.Vector;
            maxSpeed: number;
            maxForce: number;
            size: number;
            alpha: number;
            smoothness: number;

            constructor(x: number, y: number) {
              this.pos = p.createVector(x, y);
              this.vel = p5.Vector.random2D().mult(0.3);
              this.acc = p.createVector(0, 0);
              this.maxSpeed = 1.2;
              this.maxForce = 0.02;
              this.size = p.random(1, 3);
              this.alpha = p.random(80, 150);
              this.smoothness = 0.05;
            }

            update() {
              this.vel.add(this.acc);
              this.vel.limit(this.maxSpeed);
              this.pos.add(this.vel);
              this.acc.mult(0);

              if (this.pos.x > p.width) this.pos.x = 0;
              if (this.pos.x < 0) this.pos.x = p.width;
              if (this.pos.y > p.height) this.pos.y = 0;
              if (this.pos.y < 0) this.pos.y = p.height;
            }

            applyForce(force: p5.Vector) {
              this.acc.add(force.mult(this.smoothness));
            }

            flock(particles: Particle[]) {
              let alignment = p.createVector();
              let cohesion = p.createVector();
              let separation = p.createVector();
              let total = 0;
              let perceptionRadius = 50;
              let separationRadius = 30;

              for (let other of particles) {
                let d = this.pos.dist(other.pos);
                if (other !== this && d < perceptionRadius) {
                  alignment.add(other.vel);
                  cohesion.add(other.pos);
                  total++;

                  if (d < separationRadius) {
                    let diff = p5.Vector.sub(this.pos, other.pos);
                    diff.div(d * d);
                    separation.add(diff);
                  }
                }
              }

              if (total > 0) {
                alignment
                  .div(total)
                  .setMag(this.maxSpeed)
                  .sub(this.vel)
                  .limit(this.maxForce);
                cohesion
                  .div(total)
                  .sub(this.pos)
                  .setMag(this.maxSpeed)
                  .sub(this.vel)
                  .limit(this.maxForce);
                separation
                  .div(total)
                  .setMag(this.maxSpeed)
                  .sub(this.vel)
                  .limit(this.maxForce);
              }

              this.applyForce(alignment.mult(0.3));
              this.applyForce(cohesion.mult(0.5));
              this.applyForce(separation.mult(1.0));
            }

            show() {
              p.fill(200, this.alpha);
              p.ellipse(this.pos.x, this.pos.y, this.size);
            }
          }
        };

        p5Instance = new p5(sketch, sketchRef.current!);
      } catch (error) {
        console.log(error);
      }
    };

    initP5();

    return () => {
      p5Instance?.remove();
    };
  }, [isMounted]);

  return (
    <div
      ref={sketchRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default P5Background;
