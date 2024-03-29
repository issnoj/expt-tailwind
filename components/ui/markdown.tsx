import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '@/components/ui/code-block';

type Props = {
  markdown: string;
};

export const Markdown = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <CodeBlock
              code={String(children).replace(/\n$/, '')}
              data={node?.data}
              lang={match[1]}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};
