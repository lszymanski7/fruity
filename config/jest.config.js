module.exports = {
	rootDir: '../',
	setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.js'],
	testEnvironment: 'jest-environment-jsdom',
	testRegex: '/__tests__/.*\\.(spec|test)\\.(js|jsx)$',
	moduleNameMapper: {
		'^uuid$': require.resolve('uuid')
	},
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__tests__/fileTransformer.js'
	},
	verbose: true
}
