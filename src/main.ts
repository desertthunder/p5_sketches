import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CONTAINER_ID } from "$libs/constants";
import P5 from "p5";
import { fractalTree } from "./sketches";

export function getContainer() {
    return document
        .querySelector<HTMLDivElement>("main")!
        .querySelector<HTMLDivElement>(`#${CONTAINER_ID}`)!;
}

export function renderSketch(sketch: (p: P5) => void): P5 {
    const container = getContainer();
    return new P5(sketch, container);
}

export function setup() {
    const $ = document.querySelector<HTMLDivElement>("#application-root");
    if (!$) throw new ReferenceError();

    $.innerHTML = `<div class="container">
        <main id="${CONTAINER_ID}"></main>
        <nav id="control-panel"></nav>
</div>`;
}

(() => {
    setup();
    renderSketch(fractalTree);
})();
