import { Page } from 'pressify/client';
import './index.css';

export function Blog() {
  return (
    <div
      className="markdown-body prose dark:prose-invert max-w-none w-full
      prose-h2:pt-[1.25em] prose-h2:border-t prose-h2:border-[color:var(--tw-prose-hr)]
      prose-a:no-underline prose-a:text-c-brand hover:prose-a:text-c-brand-light prose-a:transition-colors
      prose-pre:bg-transparent prose-pre:p-0"
    >
      <Page />
    </div>
  );
}
