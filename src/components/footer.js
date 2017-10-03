import React from 'react';
import { css } from 'glamor';

export function Footer() {
  return (
    <row>
      <columns {...styles.footer} vertical-align="center">
        <p {...styles.text} className="text-center">
          Message sent from AWS Lamda
        </p>
      </columns>
    </row>
  );
}

const styles = {
  footer: css({
    backgroundColor: '#002635',
    paddingTop: 16
  }),
  text: css({
    color: 'white',
    fontSize: 12,
    margin: 0,
    padding: 0
  })
};
