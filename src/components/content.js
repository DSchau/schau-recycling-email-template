import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

export function Content({ body, email, message, name, subject }) {
  return (
    <row>
      <columns>
        <callout className="success">
          <p className={`${styles.paragraph} text-center`}>
            You have received a new email from {name}!
          </p>
        </callout>
        <div className={styles.messageContainer}>
          {message
            .split(/\n/)
            .map((messageWithLine, index) => (
              <p key={index}>{messageWithLine}</p>
            ))}
        </div>
        <button
          className="rounded small-expanded"
          href={`mailto:${email}?subject=${subject}!&body=${body}`}
          halign="middle"
        >
          Send a Reply
        </button>
      </columns>
    </row>
  );
}

Content.defaultProps = {
  body: `Thank you for your email!`,
  subject: 'Hello!'
};

Content.propTypes = {
  body: PropTypes.string,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subject: PropTypes.string
};

const styles = {
  paragraph: css({
    margin: 0,
    padding: 0
  }),
  messageContainer: css({
    marginTop: 12,
    marginBottom: 12,
    borderTop: `1px solid #DDD`,
    borderBottom: `1px solid #DDD`
  })
};
