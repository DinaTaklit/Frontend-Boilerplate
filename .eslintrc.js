module.exports = {
  extends: ["react-app", "react-app/jest", "airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    // Enable perttier rules
    "prettier/prettier": "error",
    // React scope no longer necessary with new JSX transform
    "react/react-in-jsx-scope": "off",
    // Allow .js files to use JSX syntax
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    // Allow  jsx spread opreator
    "react/jsx-props-no-spreading": "off",
    // Make default export not mandatory
    "import/prefer-default-export": "off",
    // Don't require defaultProps
    "react/require-default-props": "off",
    // Allow object in propTpyes
    "react/forbid-prop-types": "off",
    // allow unamed function components
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
    // Allow 'react/no-unescaped-entitie'
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
};
