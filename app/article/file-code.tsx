import { promises as fs } from 'fs';
import { CodeBlock } from '@/components/ui/code-block';

type Props = {
  path: string;
};

export const FileCode = async ({ path }: Props) => {
  let code = '';
  const content = await fs.readFile(
    process.cwd() + '/app/article/(posts)/' + path,
    'utf8',
  );
  const m = content.match(/(export\sconst\s.*)/s);
  if (m) {
    code = m[0];
  }
  return (
    <details className={'rounded border bg-background'}>
      <summary className={'cursor-pointer px-3 py-1'}>コード</summary>
      <div className={'p-2 pt-0'}>
        <CodeBlock code={code} lang={'ts'} />
      </div>
    </details>
  );
};
