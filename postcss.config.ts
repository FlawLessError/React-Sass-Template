import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    purgeCSSPlugin({
      content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
    }),
    postcssPresetEnv({
      stage: 3,
    }),
  ],
};
