module.exports = {
    rootDir: '../',
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/docs/',
        '<rootDir>/node_modules/'
    ],
    verbose: true
}
