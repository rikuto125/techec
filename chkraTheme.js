import { extendTheme } from "@chakra-ui/react";

// example theme
const theme = extendTheme({
    colors: {
        primary: "#EAE4DC",
        accent: "#8FE4DC",
        secondary: "#4CCCD9",
    },
    fonts: {
        body: "system-ui, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
    },
});

export default theme;