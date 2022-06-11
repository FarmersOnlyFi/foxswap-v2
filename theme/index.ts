import { extendTheme } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import * as components from "./components";
import * as foundations from "./foundations";

export const mainTheme: Record<string, any> = extendTheme({
  ...foundations,
  config: {
    initialColorMode: "dark",
  },
  components: { ...components },
});
