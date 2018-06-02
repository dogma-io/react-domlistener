module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-object-rest-spread'
  ],
  presets: [
    '@babel/env', // By omitting "targets" config option we get ES5
    '@babel/flow',
    '@babel/react'
  ]
}
