import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";
import "@fontsource/source-code-pro";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    body: "`source-code-pro, monospace`",
    heading: "source-code-pro, monospace`",
    mono: "source-code-pro, monospace`",
  },
};

const mainTheme = extendTheme({ config }, theme);

export default mainTheme;
