import React from 'react'
import { renderToString } from 'react-dom/server'
import inky from './inky';
import appendStyle from './append-style';

import { FOUNDATION_STYLE } from './style';

import EmailTemplate from '../../src'

function Demo() {
  return (
    <EmailTemplate
      email="dustinschau@gmail.com"
      name="Dustin Schau"
      message="Hey Dustin, liked the talk last night, i gathered some notes / feedback and would love to share it if you like. Just a warning, sometimes my comments are more critical than just polite platitudes. :) Please email me if you're interested."
    />
  );
}

const html = renderToString(<Demo />);

document.querySelector('#demo').innerHTML = inky(html);
appendStyle(FOUNDATION_STYLE);

document.body.style.margin = 0;
document.body.style.padding = 0;
