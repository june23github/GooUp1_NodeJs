module.exports = {
  rootDir: '.',

  testEnvironment: 'node',

  testMatch: ['**/tests/**/*.js'],

  testPathIgnorePatterns: ['/node_modules/'],

  // Tự động xóa mock giữa mỗi test
  clearMocks: true,

  // Hiển thị thông tin chi tiết về coverage
  collectCoverage: true,
  coverageDirectory: 'coverage',

  // Các file cần collect coverage
  collectCoverageFrom: [
    'controllers/**/*.js',
    'models/**/*.js'
  ],

  // Thời gian tối đa cho mỗi test (ms)
  testTimeout: 5000,

  // Cấu hình đường dẫn
  moduleDirectories: ['node_modules', '.'],
};