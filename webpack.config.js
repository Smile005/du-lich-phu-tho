// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Điểm vào của ứng dụng
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Quy tắc xử lý TypeScript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Quy tắc xử lý SVG
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'], // Sử dụng SVGR để chuyển đổi SVG và file-loader để lưu file
      },
      // Quy tắc xử lý CSS (nếu có)
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
