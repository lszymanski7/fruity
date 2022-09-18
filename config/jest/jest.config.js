module.exports = {
    collectCoverageFrom: [
<<<<<<< HEAD
        '<rootDir>/src/components/**/*.[jt]s?(x)'
=======
        '<rootDir>/src/components/**/*.[jt]s?(x)'
>>>>>>> main
    ],
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: [
		'/node_modules/', 
		'/__tests__/'
	],
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10
        }
    },
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],
<<<<<<< HEAD
    testPathIgnorePatterns: ['/node_modules/'],
=======
>>>>>>> main
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '\\.(png|jpe?g|gif|svg|ico|webp|tiff|woff(2)?|eot|ttf|otf|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/fileTransformer.js'
    },
    verbose: true
}
