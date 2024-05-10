import { List, ListItem } from '@/components/list/list';
import { Link } from '@/components/ui/link';
import React from 'react';
import { promises as fs } from 'fs';

const postDir = process.cwd() + '/app/article/(posts)';

type Post = {
  title: string;
  date: string;
  slug: string;
};

async function getPosts(): Promise<Post[]> {
  const slugs = (await fs.readdir(postDir, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    }),
  );
  posts.sort((a: Post, b: Post) => +new Date(b.date) - +new Date(a.date));
  return posts;
}

export const ArticleList = async () => {
  const posts = await getPosts();
  return (
    <List>
      {posts.map((post) => (
        <div key={post.slug}>
          <ListItem>
            <Link href={`/article/${post.slug}`}>{post.title}</Link>
            <small className={'ml-2 text-foreground/60'}>({post.date})</small>
          </ListItem>
        </div>
      ))}
    </List>
  );
};
