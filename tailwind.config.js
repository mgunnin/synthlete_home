/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-surface-background": "#161616",
        "base-transparent": "rgba(255, 255, 255, 0)",
        "content-content-secondary": "#a0a0a0",
        "surface-surface-primary": "#1c1c1c",
        "surface-surface-secondary": "#232323",
        "content-content-brand": "#ac6aff",
        "content-content-primary": "#ededed",
        "surface-surface-overlay": "rgba(255, 255, 255, 0.65)",
        "theme-brand-e1": "#00face",
        "theme-product-bytes": "#e45be5",
        "content-content-warning": "#f1a10d",
        "content-content-info": "#52a9ff",
        "content-content-on-brand": "#17151f",
      },
      spacing: {
        "layout-width": "1440px",
        margin: "80px",
        "spacing-spacing-xl": "48px",
        "spacing-spacing-md": "32px",
        "spacing-spacing-sm": "24px",
        "spacing-spacing-lg": "40px",
        "spacing-spacing-4xl": "80px",
        "spacing-spacing-2xs": "12px",
        "spacing-spacing-3xs": "8px",
        "spacing-spacing-xs": "16px",
        "spacing-spacing-5xs": "4px",
        "spacing-spacing-3xl": "64px",
      },
      fontFamily: {
        "body-b6-medium": "Montserrat",
        "heading-h6-bold": "'Loos Wide'",
      },
      borderRadius: {
        sm: "14px",
        "radius-radius-2xs": "4px",
        "radius-radius-md": "24px",
        "radius-radius-sm": "16px",
        "radius-radius-xs": "8px",
        "radius-radius-full": "500px",
      },
    },
    fontSize: {
      sm: "14px",
      "13xl": "32px",
      base: "16px",
      lg: "18px",
      "37xl": "56px",
      "29xl": "48px",
      "21xl": "40px",
      "5xl": "24px",
      xs: "12px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
