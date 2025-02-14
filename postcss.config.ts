import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    purgeCSSPlugin({
      content: ["./**/*.html"],
    }),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
};
