import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import raw from 'rehype-raw';
import prism from '@mapbox/rehype-prism';

export const mdToReact = (markdown: string) => {
  const vFile = unified()
    .use(remarkParse)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(prism, { ignoreMissing: true })
    .use(raw)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        p: (props: any) => <Typography variant="body1" gutterBottom {...props} />,
        a: (props: any) => <Link {...props} target="_blank" />,
        h1: (props: any) => <Typography variant="h1" gutterBottom {...props} />,
        h2: (props: any) => <Typography variant="h2" gutterBottom {...props} />,
        h3: (props: any) => <Typography variant="h3" gutterBottom {...props} />,
        h4: (props: any) => <Typography variant="h4" gutterBottom {...props} />,
        h5: (props: any) => <Typography variant="h5" gutterBottom {...props} />,
        h6: (props: any) => <Typography variant="h6" gutterBottom {...props} />,
      }
    })
    .processSync(markdown)
  // type any because vFile types doesn't contains result, even though it should.
  return (vFile as any).result;
}
