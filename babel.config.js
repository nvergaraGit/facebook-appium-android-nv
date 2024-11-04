module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@shared': './src/shared',
          '@screens': './src/screens',
          '@services': './src/services',
          '@styles': './src/styles',
          '@graphql': './src/graphql',
          '@context': './src/context',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
          '@assets': './assets',
          '@types': './src/types',
          '@libraries': './src/libraries',
          '@hooks': './src/hooks'
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
