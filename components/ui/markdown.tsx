import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '@/components/ui/code-block';

type Props = {
  markdown: string;
  className?: string;
};

export const Markdown = ({ markdown, className }: Props) => {
  return (
    <div className={className}>
      <ReactMarkdown
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <CodeBlock
                lang={match[1]}
                code={String(children).replace(/\n$/, '')}
                data={node?.data}
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
    </div>
  );
};
