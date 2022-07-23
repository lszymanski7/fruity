module.exports = {
    rootDir: '../',
    setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.js'],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/'
    ],
    testRegex: '/__tests__/.*\\.(spec|test)\\.(js|jsx|ts)$',
    verbose: true
}
