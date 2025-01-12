import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import P5 from "p5";
import { gridSketch } from "./sketches";

const CONTAINER_ID = "sketch-container";

export function getContainer() {
    return document
        .querySelector<HTMLDivElement>("main")!
        .querySelector<HTMLDivElement>(`#${CONTAINER_ID}`)!;
}

export function render(sketch: (p: P5) => void): P5 {
    const container = getContainer();
    return new P5(sketch, container);
}

export function setup() {
    const $ = document.querySelector<HTMLDivElement>("#application-root");
    if (!$) throw new ReferenceError();

    $.innerHTML = `<main id="${CONTAINER_ID}" class="container"></main>`;
}

(() => {
    setup();
    render(gridSketch);
})();
