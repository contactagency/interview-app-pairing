const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

module.exports = {
  resolver: {
    ...defaultResolver,
    sourceExts: [...defaultResolver.sourceExts, "cjs"],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
