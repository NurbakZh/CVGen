// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker-js/guides/react",
  testRunner: "jest",
  reporters: ["progress", "clear-text", "html"],
  coverageAnalysis: "off",
  mutate: [
    'src/index.tsx',
    'src/components/CSV/index.tsx',
  ],
  jest: {
    projectType: "create-react-app",
  },
  tsconfigFile: 'tsconfig.json',
  tempDirName: 'strykerTmp',
};
export default config;
