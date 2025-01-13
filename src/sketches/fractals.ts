import { Gruvbox, rgbColor } from "$libs/colors";
import { DIMS } from "$libs/constants";
import type P5 from "p5";
import { createDownloadButton } from "./helpers";

export function generateSlider(p: P5) {
    return p.createSlider(0, p.PI / 2, p.PI / 4, 0.01).parent("#control-panel");
}

export function fractalTree(p: P5) {
    const angle = p.PI / 8;
    const mult = 0.67;
    const base_len = 120;
    p.setup = () => {
        p.createCanvas((DIMS.H * 3) / 4, (DIMS.W * 3) / 4);
        p.smooth();
        p.noLoop();

        createDownloadButton(p);
    };

    p.draw = () => {
        const bg_color = rgbColor(Gruvbox.light0_soft);
        p.background(bg_color.r, bg_color.g, bg_color.b);
        p.translate(p.width / 2, p.height);

        const branch_color = rgbColor("#a96b2c");
        p.stroke(branch_color.r, branch_color.g, branch_color.b);
        p.strokeWeight(1);

        branch(p, base_len, angle, mult);
    };
}
function branch(p: P5, len: number, angle: number, mult: number) {
    p.line(0, 0, 0, -1 * len);
    p.translate(0, -1 * len);

    if (len > 3) {
        p.push();
        p.rotate(angle);
        branch(p, len * mult, angle, mult);
        p.pop();

        p.push();
        p.rotate(-1 * angle);
        branch(p, len * mult, angle, mult);
        p.pop();
    }
}
