import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p style={{ marginTop: 16, marginBottom: 16 }}>{children}</p>,
    h2: ({ children }) => <h2 style={{ marginTop: 22, marginBottom: 20 }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ marginTop: 20, marginBottom: 18 }}>{children}</h3>,
    h4: ({ children }) => <h3 style={{ marginTop: 18, marginBottom: 16 }}>{children}</h3>,
    ...components,
  };
}
