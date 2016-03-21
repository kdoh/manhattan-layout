import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Flex, Block } from 'react-manhattan'
import { setHeight } from './utils'

const OptionalElementWrapper = ({ children }) =>
  <Block flexShrink={0}>{children}</Block>

class FullScreenLayout extends Component {
  setContext () {
    ['html', 'body'].map((node) => setHeight(node))
    findDOMNode(this).parentNode.style.height = '100%'
  }

  componentDidMount () {
    if (this.props.setContext) { this.setContext() }
  }

  render () {
    const { content, header, footer } = this.props
    return (
      <Flex flexDirection='column' height='100%' width='100%'>
        { header ? <OptionalElementWrapper>{header}</OptionalElementWrapper> : null }
        {content}
        { footer ? <OptionalElementWrapper>{footer}</OptionalElementWrapper> : null }
      </Flex>
    )
  }
}

FullScreenLayout.defaultProps = {
  setContext: false
}

FullScreenLayout.propTypes = {
  content: PropTypes.object.isRequired,
  header: PropTypes.object,
  footer: PropTypes.object,
  setContext: PropTypes.bool
}

export default FullScreenLayout
