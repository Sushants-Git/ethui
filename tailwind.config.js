/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "space-grotesk": ['"Space Grotesk"', "sans-serif"],
            },
            fontWeight: {
                light: 300,
                regular: 400,
                bold: 700,
            },
        },
    },
    plugins: [],
};
