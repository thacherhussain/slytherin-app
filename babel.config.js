module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@models': './src/models',
          '@navigation-types': './src/navigation/types',
          '@screens': './src/screens',
          '@store': './src/store',
        },
      },
    ],
  ],
}
