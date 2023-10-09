import type {Config} from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    }
};

export default config;