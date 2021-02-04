module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "@vue/typescript/recommended", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "no-shadow": ["error", { "allow": ["state"] }],
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["test-utils", "./tests/unit/test-utils"]],
        extensions: [".ts", ".js", ".vue", ".json"],
      },
    },
  },
};