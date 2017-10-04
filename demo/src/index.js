import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import * as he from 'he';
import inky from './inky';
import appendStyle from './append-style';

import { FOUNDATION_STYLE } from './style';

import EmailTemplate from '../../src'

function Demo() {
  return (
    <EmailTemplate
      email="dustinschau@gmail.com"
      name="Dustin Schau"
      message={`
Hey Dustin,

Just testing multi-line input's.

OK, bye.

Other Dustin
      `}
    />
  );
}

const html = renderToStaticMarkup(<Demo />);

document.querySelector('#demo').innerHTML = inky(he.decode(html));
appendStyle(FOUNDATION_STYLE);

document.body.style.margin = 0;
document.body.style.padding = 0;
