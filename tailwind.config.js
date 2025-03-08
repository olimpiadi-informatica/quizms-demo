import olinfoPresets from "@olinfo/tailwind";
import path from "node:path";

const quizms = path.dirname(require.resolve("@olinfo/quizms/css"));
const quizmsMdx = path.dirname(require.resolve("@olinfo/quizms-mdx/css"));
const reactComponents = path.dirname(require.resolve("@olinfo/react-components"));

/** @type {import('tailwindcss').Config} */
export default {
  presets: [olinfoPresets],
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}",
    path.join(quizms, "**/*.js"),
    path.join(quizmsMdx, "**/*.js"),
    path.join(reactComponents, "**/*.js"),
  ],
};
