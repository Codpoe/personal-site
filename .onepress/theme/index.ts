import './style.css';
import './markdown.css';

import { Layout } from './Layout';
import { NotFound } from './NotFound';
import { Blockquote } from './mdxComponents';

export default {
  Layout,
  NotFound,
  mdxComponents: { blockquote: Blockquote },
};
