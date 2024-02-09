import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }],
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.[jt]s$': '$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
};
export default config;
