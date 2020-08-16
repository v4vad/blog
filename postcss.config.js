module.exports = {
    plugins: [
        require("autoprefixer"),
        require("tailwindcss")("./tailwind.config.js"),
        process.env.NODE_ENV === 'production' && require("@fullhuman/postcss-purgecss")({
            content: [
                "./_site/**/*.css",
                "./_site/**/*.html"

            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []

        })
    ],
};