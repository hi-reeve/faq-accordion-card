module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                kumb: ["Kumbh Sans", "sans-serif"],
            },
            colors: {
                soft: {
                    red: "var(--soft-red)",
                    violet: "var(--soft-violet)",
                    blue: "var(--soft-blue)",
                },
                grayish: {
                    very: "var(--very-dark-grayish-blue)",
                    dark: "var(--dark-grayish-blue)",
                    light: "var(--light-grayish-blue)",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
