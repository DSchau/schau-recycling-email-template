import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

export function Header({ title }) {
  return (
    <row>
      <columns className={styles.header}>
        <h1 className={`${styles.title} text-center`}>{title}</h1>
      </columns>
    </row>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const styles = {
  header: css({
    background: '#e54226',
    background: `linear-gradient(to left, #ffa81f, #e54226)`,
    paddingTop: 16
  }),
  title: css({
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 0,
    padding: 0,
    textTransform: 'uppercase'
  })
};
