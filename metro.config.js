/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    resolver: { sourceExts, assetExts }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer')
    },
    resolver: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      assetExts: assetExts.filter(ext => ext !== 'svg').concat('env'),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      sourceExts: [...sourceExts, 'svg', 'env']
    }
  };
})();
