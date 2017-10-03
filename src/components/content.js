import React from 'react';
import { css } from 'glamor';

export function Content({ email, message, name }) {
  return (
    <row>
      <columns>
        <callout className="success">
          <p {...styles.paragraph} className="text-center">
            You have received a new email from {name}!
          </p>
        </callout>
        <p {...styles.message}>{message}</p>
        <button
          className="rounded small-expanded"
          href={`mailto="${email}"`}
          halign="middle"
        >
          Send a Reply
        </button>
      </columns>
    </row>
  );
}

const styles = {
  paragraph: css({
    margin: 0,
    padding: 0
  }),
  message: css({
    paddingTop: 16,
    paddingBottom: 16,
    borderTop: `1px solid #DDD`,
    borderBottom: `1px solid #DDD`
  })
};
