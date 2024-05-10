import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <a {...props} target={'_blank'} />,
    h2: (props) => (
      <h2
        className={'border-b border-l-8 border-foreground/30 py-2 pl-3'}
        {...props}
      />
    ),
    ...components,
  };
}
