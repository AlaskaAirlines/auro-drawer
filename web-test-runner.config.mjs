export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  coverageConfig: {
    threshold: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  testRunnerHtml: (testFramework) => `<html>
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/design-tokens@latest/dist/auro-classic/CSSCustomProperties.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/design-tokens@latest/dist/alaska/CSSCustomProperties--alaska.css">
      </head>
      <body>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
};
