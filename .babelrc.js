module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: '6',
        },
      },
    ],
    '@babel/flow',
    '@babel/react',
  ],
}
