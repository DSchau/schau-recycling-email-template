import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import EmailTemplate from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<EmailTemplate name="Dustin Schau" email="dustinschau@gmail.com" message="Hello World" />, node, () => {
      expect(node.innerHTML).toContain('Hello World')
    })
  })
})
