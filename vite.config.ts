import path from "node:path";
import type { UserConfig } from "vite";

export default {
    resolve: {
        alias: {
            $libs: path.resolve(__dirname, "./src/libs"),
        },
    },
} satisfies UserConfig;
