import React from 'react'
import { render } from 'react-dom'
import { Flex, BorderBottom, BorderTop } from 'react-manhattan'

import ScrollableContent from '../src/ScrollableContent'
import FullScreenLayout from '../src/FullScreenLayout.js'

let content = []
for (var i = 0; i < 100; i++) {
  content.push(<div key={i}>Lawl</div>)
}

render(
  <FullScreenLayout content={
      <Flex height='100%'>
        <FullScreenLayout
          header={
            <BorderBottom>
              Heya
            </BorderBottom>
          }
          content={
            <Flex flexShrink={0} borderRight='1px solid #ddd' height='100%'>
              Hey hey
            </Flex>
          }
        />
        <FullScreenLayout
          content={
            <Flex width='100%'>
              <div style={{height: '100%', flex: 1}}>derp</div>
              <ScrollableContent>{content}</ScrollableContent>
            </Flex>
          }
          header={
            <BorderBottom paddingTop='1em' paddingBottom='1em'>
              Heading
            </BorderBottom>
          }
          footer={
            <BorderTop paddingTop='1em' paddingBottom='1em'>
              Footer
            </BorderTop>
          }
          setContext
          />
      </Flex>
  }
  setContext
  />,
  document.querySelector('#app')
)
