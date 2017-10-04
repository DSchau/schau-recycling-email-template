import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

import { markdownToHtml } from '../util';

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      html: ``
    };
  }

  componentWillMount() {
    this.updateHtmlState(this.props.message);
  }

  componentWillReceiveProps({ message }) {
    if (message !== this.props.message) {
      this.updateHtmlState(message);
    }
  }

  updateHtmlState = message => {
    markdownToHtml(message, (err, html) => {
      if (html) {
        this.setState({
          html
        });
      }
    })
  }

  render() {
    const { body, email, name, subject } = this.props;
    const { html } = this.state;
    return (
      <row>
        <columns>
          <callout className="success">
            <p className={`${styles.paragraph} text-center`}>
              You have received a new email from {name}!
            </p>
          </callout>
          <div
            className={styles.messageContainer}
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
