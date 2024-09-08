const path = require('path');

module.exports = {
     mode: 'development', //   mode: 'production', //modo produção compila em uma só linha
     // mode: process.env.NODE_ENV,
     entry: {
          index: ['./src/index.ts'],
     }, // possibilita que seja criado um arquivo index.js no dist
     
     module: {
          rules: [
               {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
               },
          ],
     },
     resolve: {
          extensions: ['.tsx', '.ts', '.js'],
     },
     output: {
          filename: '[name].js', // recebe o nome do index.ts
          path: path.resolve(__dirname, 'public', 'dist'), //mapeia o caminho do index.js
     },
};
