module.exports = {
    trailingComma: "es5",
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:prettier/recommended",
    ],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": 0,
        "@typescript-eslint/no-require-imports": "off",
        "no-undef": "off",
    },
};
