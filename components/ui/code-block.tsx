import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ElementData } from 'hast';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import { parseNumericRange } from '@/lib/parse-numeric-range';

SyntaxHighlighter.registerLanguage('ts', typescript);
SyntaxHighlighter.registerLanguage('tsx', tsx);

type Props = {
  lang: string;
  code: string;
  data?: ElementData | undefined;
  showLineNumbers?: boolean;
};

export const CodeBlock = ({ lang, code, data, showLineNumbers }: Props) => {
  const highlightNumbers = isMetaData(data) ? parseNumericRange(data.meta) : [];
  const customStyle: React.CSSProperties | undefined = { fontSize: '14px' };

  const lineProps = (lineNumber: number) => {
    const style: React.CSSProperties = {};
    if (highlightNumbers.includes(lineNumber)) {
      style.display = 'block';
      style.background = 'hsl(210 70% 60% / 20%)';
    }
    return { style } as React.HTMLProps<HTMLElement>;
  };

  const lineNumberStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {};
    style.paddingLeft = '0.5rem';
    style.color = 'white';
    return style;
  };

  return (
    <SyntaxHighlighter
      PreTag="div"
      className="not-prose"
      customStyle={customStyle}
      language={lang}
      lineNumberStyle={lineNumberStyle}
      lineProps={lineProps}
      showLineNumbers={showLineNumbers}
      style={style}
      wrapLines
    >
      {String(code).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};

function isMetaData(value: unknown): value is { meta: string } {
  return typeof value === 'object' && value !== null && 'meta' in value;
}
