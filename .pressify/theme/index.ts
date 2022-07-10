import './styles/vars.css';
import './styles/base.css';
import './styles/nprogress.css';

import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { A, Pre } from './components/Blog/mdxComponents';

export default {
  Layout,
  NotFound,
  mdxComponents: {
    a: A,
    pre: Pre,
  },
};
