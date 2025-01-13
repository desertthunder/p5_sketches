export enum Color {
    ORANGE = "#f97316",
    AMBER = "#f59e0b",
    EMERALD = "#10b981",
    TEAL = "#14b8a6",
    CYAN = "#06b6d4",
    ROSE = "#f43f5e",
    FUSCHIA = "#d946ef",
    PURPLE = "#a855f7",
    VIOLET = "#8b5cf6",
    INDIGO = "#6366f1",
    BLUE = "#3b82f6",
    SKY = "#0ea5e9",
}

const ColorMap: Array<[string, Color]> = [
    ["ORANGE", Color.ORANGE],
    ["AMBER", Color.AMBER],
    ["EMERALD", Color.EMERALD],
    ["TEAL", Color.TEAL],
    ["CYAN", Color.CYAN],
    ["ROSE", Color.ROSE],
    ["FUSCHIA", Color.FUSCHIA],
    ["PURPLE", Color.PURPLE],
    ["VIOLET", Color.VIOLET],
    ["INDIGO", Color.INDIGO],
    ["BLUE", Color.BLUE],
    ["SKY", Color.SKY],
];

export function getColor() {
    const i = Math.floor(Math.random() * ColorMap.length);
    return ColorMap[i];
}

export function rgbColor(color: `#${string}` | Color | Gruvbox) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)!;
    return {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
    };
}

export enum Gruvbox {
    dark0_hard = "#1d2021",
    dark0 = "#282828",
    dark0_soft = "#32302f",
    dark1 = "#3c3836",
    dark2 = "#504945",
    dark3 = "#665c54",
    dark4 = "#7c6f64",

    gray_245 = "#928374",
    gray_244 = "#928374",

    light0_hard = "#f9f5d7",
    light0 = "#fbf1c7",
    light0_soft = "#f2e5bc",
    light1 = "#ebdbb2",
    light2 = "#d5c4a1",
    light3 = "#bdae93",
    light4 = "#a89984",

    bright_red = "#fb4934",
    bright_green = "#b8bb26",
    bright_yellow = "#fabd2f",
    bright_blue = "#83a598",
    bright_purple = "#d3869b",
    bright_aqua = "#8ec07c",
    bright_orange = "#fe8019",

    neutral_red = "#cc241d",
    neutral_green = "#98971a",
    neutral_yellow = "#d79921",
    neutral_blue = "#458588",
    neutral_purple = "#b16286",
    neutral_aqua = "#689d6a",
    neutral_orange = "#d65d0e",

    faded_red = "#9d0006",
    faded_green = "#79740e",
    faded_blue = "#076678",
    faded_yellow = "#b57614",
    faded_purple = "#8f3f71",
    faded_aqua = "#427b58",
    faded_orange = "#af3a03",
}

export function randomGruvColor() {
    const gruvs = [
        Gruvbox.faded_red,
        Gruvbox.faded_green,
        Gruvbox.faded_blue,
        Gruvbox.faded_purple,
        Gruvbox.faded_aqua,
    ];

    return gruvs[Math.floor(Math.random() * gruvs.length)];
}
