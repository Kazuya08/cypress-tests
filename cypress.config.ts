import { defineConfig } from "cypress";
import path from "path";
const { startDevServer } = require('@cypress/webpack-dev-server');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
   component: {
    // devServer: {
    //   framework: 'next',
    //   bundler: 'webpack',
    // },
    devServer: (options) =>
      startDevServer({
        options,
        webpackConfig: {
          resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
              '@': path.resolve(__dirname, 'src'), // Ajuste o alias conforme necessário
            },
          },
          module: {
            rules: [
              {
                test: /\.(ts|tsx)$/,
                use: [
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true,
                    },
                  },
                ],
                exclude: /node_modules/,
              },
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
            ],
          },
        },
      }),
    supportFile: 'cypress/support/component.ts',
  },
});
