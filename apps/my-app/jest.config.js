module.exports = {
  displayName: 'my-app',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.ts$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json', 'css'],
  coverageDirectory: '../../coverage/apps/my-app',
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/stories/**/*.vue',
  ],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '\\.css$': '<rootDir>/test/__mocks__/styleMock.js'
  },
  globals: {
    'vue-jest': { tsConfig: 'apps/my-app/tsconfig.spec.json' },
  },
};
