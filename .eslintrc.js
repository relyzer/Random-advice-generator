module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "import/no-unresolved": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    quotes: "off",
    "arrow-body-style": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "no-unneeded-ternary": "warn",
    "no-param-reassign": ["error", { props: false }],
    "@typescript-eslint/explicit-module-boundary-types": [
      "warn",
      {
        allowArgumentsExplicitlyTypedAsAny: true,
      },
    ],
    "react/require-default-props": "off",
  },
  overrides: [
    {
      files: ["**/*.spec.js", "**/*.spec.jsx", "*.ts", "*.tsx"],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
