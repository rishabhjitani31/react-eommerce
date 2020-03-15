import React, { Component } from 'react'
import cx from 'classnames'
import Touchwipe from 'vanilla-touchwipe'
import { withTheme } from 'styled-components'
import clickKeyProps from 'react-click-keypress'
import { toPropTypes } from 'lib/xpm/to-prop-types'
import descriptor from './descriptor'
import {
  StyledCarouselContainer,
  StyledImageContainer,
  StyledArrowsContainer
} from './styles'

class Slider extends Component {
  static propTypes = toPropTypes(descriptor)

  state = {
    currentIndex: 0
  }
  componentWillUnmount () {
    if (this.touch) this.touch.unbind()
  }
  setIndex (index) {
    this.setState({ currentIndex: index })
  }

  handleContainerRef = node => {
    if (node) {
      if (this.touch) return
      this.touch = Touchwipe(node, {
        wipeLeft: () => this.changeIndex(this.props.pageSize),
        wipeRight: () => this.changeIndex(-this.props.pageSize)
      })
    }
  }

  changeIndex = delta => {
    const nextIndex = this.state.currentIndex + delta
    let currentIndex = nextIndex
    if (nextIndex < 0) {
      currentIndex =
        this.props.children.length -
        (this.props.children.length % this.props.pageSize)

      if (currentIndex === this.props.children.length) {
        currentIndex = this.props.children.length - this.props.pageSize
      }
    } else if (nextIndex >= this.props.children.length) {
      currentIndex = 0
    }
    this.setState({ currentIndex })
  }

  render () {
    let {
      children,
      pending,
      sliderHeight,
      hasArrows,
      pageSize,
      ...rest
    } = this.props
    const { currentIndex } = this.state

    if (hasArrows && children.length < pageSize) {
      hasArrows = false
    }

    const itemsToShow = children
      ? children.slice(currentIndex, currentIndex + pageSize)
      : null
    return (
      <StyledCarouselContainer
        ref={this.handleContainerRef}
        sliderHeight={sliderHeight || 300}
        {...rest}
      >
        {React.Children.map(children, (src, index) => {
          return (
            <StyledImageContainer
              key={index}
              sliderHeight={sliderHeight}
              className={cx({
                active: currentIndex === index,
                previous:
                  children.length > 1 &&
                  (index === currentIndex - pageSize ||
                    (index === children.length - 1 && currentIndex === 0)),
                next:
                  children.length > 1 &&
                  (index === currentIndex + pageSize ||
                    (index === 0 && currentIndex === children.length - 1))
              })}
            >
              <ul className='image_grid fade_in'>{itemsToShow}</ul>
            </StyledImageContainer>
          )
        })}
        {hasArrows && (
          <StyledArrowsContainer>
            <span
              className='left_arrow_wrapper'
              {...clickKeyProps(() => {
                this.changeIndex(-pageSize)
              })}
              role='button'
              aria-label='Previous'
              tabIndex='0'
            >
              <span className='left_arrow' />
            </span>
            <span
              className='right_arrow_wrapper'
              {...clickKeyProps(() => {
                this.changeIndex(pageSize)
              })}
              role='button'
              aria-label='Next'
              tabIndex='0'
            >
              <span className='right_arrow' />
            </span>
          </StyledArrowsContainer>
        )}
      </StyledCarouselContainer>
    )
  }
}

export default withTheme(Slider)
