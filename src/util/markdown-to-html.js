import remark from 'remark';
import html from 'remark-html';

export const markdownToHtml = (md, callback) => {
  return remark()
    .use(html)
    .process(md, (err, file) => {
      if (err) {
        callback(err);
      }
      callback(null, String(file));
    });
};
