import type P5 from "p5";

export const DIMS = {
    H: 800,
    W: 800,
};

export const CENTER = { x: DIMS.W / 2, y: DIMS.H / 2 };

export function gridSketch(p: P5) {
    const cell_size = 20;
    const width = DIMS.W;
    const height = DIMS.H;

    p.setup = () => {
        p.createCanvas(800, 800);
        p.background("lightgrey");
        p.noLoop();
    };

    p.draw = () => {
        for (let x = 0; x < width; x += cell_size) {
            for (let y = 0; y < height; y += cell_size) {
                p.rect(x, y, cell_size, cell_size);
            }
        }
    };
}
