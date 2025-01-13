/**
 * @todo WIP
 */
export function layout() {
    const container = document.createElement("div");
    container.classList.add("container");

    const header = document.createElement("header");
    const nav = document.createElement("nav");

    header.appendChild(nav);
    container.appendChild(header);

    const main = document.createElement("main");
    main.id = "sketch-container";
    container.appendChild(main);

    const footer = document.createElement("footer");
    container.appendChild(footer);

    return container.outerHTML;
}
