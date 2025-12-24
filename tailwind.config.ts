import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // @ts-expect-error: DaisyUI key is not part of Tailwind's type definitions
  daisyui: {
    themes: ["light"],
  },
};

export default config;
