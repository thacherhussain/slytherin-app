module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@types': './src/types',
          '@navigation-types': './src/navigation/types',
          '@screens': './src/screens',
          '@store': './src/store',
        },
      },
    ],
  ],
}
