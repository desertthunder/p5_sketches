import { Gruvbox, randomGruvColor, rgbColor } from "$libs/colors";
import { DIMS } from "$libs/constants";
import type P5 from "p5";
import { createDownloadButton } from "./helpers";

export function gridSketch(p: P5) {
    const cell_size = 20;
    const width = DIMS.W;
    const height = DIMS.H;
    const bg_color = rgbColor(Gruvbox.light0_soft);
    const strokeColor = rgbColor(Gruvbox.dark0);

    p.setup = () => {
        p.createCanvas(DIMS.H, DIMS.W);
        p.background(bg_color.r, bg_color.g, bg_color.b);
        p.stroke(strokeColor.r, strokeColor.g, strokeColor.b);
        p.strokeWeight(0.5);
        p.noLoop();
    };

    p.draw = () => {
        p.push();
        for (let x = 0; x < width; x += cell_size) {
            for (let y = 0; y < height; y += cell_size) {
                if (Math.random() < 0.4) {
                    p.noFill();
                } else {
                    const fillColor = rgbColor(randomGruvColor());
                    p.fill(fillColor.r, fillColor.g, fillColor.b);
                }

                p.rect(x, y, cell_size, cell_size);
            }
        }

        createDownloadButton(p);
    };
}
