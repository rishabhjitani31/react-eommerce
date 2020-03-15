import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 15px;
  background: #f7f7f7 linear-gradient(to bottom right, #eee, #fff);
`

const bgImage = `url("data:image/svg+xml,
  <svg width='100%25'
  height='100%25'
  xmlns='http://www.w3.org/2000/svg'>

    <defs>

      <pattern
        id='smallGrid'
        width='10'
        height='10'
        patternUnits='userSpaceOnUse'>

        <path
          d='M 10 0 L 0 0 0 10'
          fill='none'
          stroke='gray'
          stroke-width='0.5'/>

      </pattern>

      <pattern id='grid'
        width='100'
        height='100'
        patternUnits='userSpaceOnUse'>

        <rect
          width='100'
          height='100'
          fill='url(%23smallGrid)'/>

        <path d='M 100 0 L 0 0 0 100'
          fill='none'
          stroke='gray'
          stroke-width='1'/>
      </pattern>

    </defs>

    <rect width='100%25' height='100%25' fill='url(%23grid)' />

  </svg>
")`

const Holder = styled.div`
  padding: 15px;
  border: 1px dashed gray;
  width: ${({ narrow }) => (narrow ? '360px' : 'auto')};
  background-color: ${({ dark }) => (dark ? 'black' : 'white')};
  position: relative;

  &::after {
    content: '';
    display: block;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ grid }) => (grid ? bgImage : 'initial')};
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px;
    mix-blend-mode: difference;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const Hint = styled.div`
  margin-bottom: 5px;
  color: #929292;
  text-transform: uppercase;
  font-family: monospace;
  font-size: 1em;
`

const StateShowcase = ({ hint, narrow, dark, grid, children }) => {
  return (
    <Wrapper>
      <Hint>{hint}</Hint>
      <Holder narrow={narrow} dark={dark} grid={grid}>
        <Content>{children}</Content>
      </Holder>
    </Wrapper>
  )
}
StateShowcase.propTypes = {
  hint: PropTypes.node.isRequired,
  grid: PropTypes.bool,
  narrow: PropTypes.bool,
  dark: PropTypes.bool
}
StateShowcase.defaultProps = {
  grid: true,
  narrow: false,
  dark: false
}

export default StateShowcase
