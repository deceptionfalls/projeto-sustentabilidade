export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // for files in subfolders like /components
        "./src/*.{js,ts,jsx,tsx}"    // for files in /src root
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}