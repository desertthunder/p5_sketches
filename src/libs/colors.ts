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

export function rgbColor(color: `#${string}` | Color) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)!;
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
}
