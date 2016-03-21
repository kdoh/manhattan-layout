import React from 'react'
import { Block } from 'react-manhattan'

const ScrollableContent = ({children}) =>
  <Block overflow='scroll'>{children}</Block>

export default ScrollableContent
