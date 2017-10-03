import React from 'react'
import PropTypes from 'prop-types';

import { Content, Footer, Header } from './components';

function EmailTemplate({
  email,
  message,
  name,
  subject
}) {
  return (
    <table className="body" data-made-with-foundation>
      <tr>
        <td className="float-center" align="center" valign="top">
          <center>
            <container>
              <Header title={subject} />
              <spacer size={20} />
              <Content email={email} message={message} name={name} />
              <Footer />
            </container>
          </center>
        </td>
      </tr>
    </table>
  );
}

EmailTemplate.defaultProps = {
  subject: 'Hello from dustinschau.com'
};

EmailTemplate.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subject: PropTypes.string
};

export default EmailTemplate;
