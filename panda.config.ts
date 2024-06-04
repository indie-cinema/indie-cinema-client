import { colors } from "@/styles/colors";
import { textStyles } from "@/styles/textStyles";
import { zIndex } from "@/styles/zIndex";
import { defineConfig, defineTextStyles, defineTokens } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles: defineTextStyles(textStyles),
      tokens: {
        zIndex: defineTokens.zIndex(zIndex),
        colors: defineTokens.colors(colors),
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
