import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import FullScreenLayout from '../src/FullScreenLayout'

describe('<FullScreenLayout />', () => {
  it('should render content props as a child', () => {
    const childElement = <div className='child'></div>
    const wrapper = shallow(
      <FullScreenLayout
        content={childElement}
      />
    )
    expect(wrapper.contains(childElement)).toEqual(true)
  })

  it('should render a header if given a header prop', () => {
    const headerElement = <header className='header'></header>
    const wrapper = shallow(
      <FullScreenLayout
        header={headerElement}
        content={<div>lol</div>}
      />
    )
    expect(wrapper.contains(headerElement)).toEqual(true)
  })

  it('should render a footer if given a header prop', () => {
    const footerElement = <footer className='footer'></footer>
    const wrapper = shallow(
      <FullScreenLayout
        footer={footerElement}
        content={<div>lol</div>}
      />
    )
    expect(wrapper.contains(footerElement)).toEqual(true)
  })
})
