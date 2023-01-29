import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import pagesConfig from './pages.config';

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/pages/Home'),
      context(pagePath) {
        return {
          ...pagesConfig[pagePath]
        }
      } 
    }),
  ],
};