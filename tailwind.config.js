/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "heading1-bold": [
        "36px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading2-bold": [
        "30px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading4-bold": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "body-bold": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "body-normal": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-bold": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "small-bold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "small-semibold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "subtle-medium": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "500",
        },
      ],
      "tiny-medium": [
        "10px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "x-small-semibold": [
        "7px",
        {
          lineHeight: "9.318px",
          fontWeight: "600",
        },
      ],
    },
    extend: {
      colors: {
        "turquoise-1": "#59e6ff",
        "turquoise-2": "#182626",
        "ocean-1": "#00c7ff",
        "light-1": "#FFFFFF",
        "light-2": "#808080",
        "light-3": "#626067",
        "dark-1": "#121212",
        "dark-2": "#34303E",
        "blue-1": "#016FD5",
      },
    },
  },
  plugins: [],
};
