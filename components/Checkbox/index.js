import React, { Component } from 'react'
import { CheckboxStyle } from './styles'

class Checkbox extends Component {
  render () {
    const { label = '' } = this.props
    return (
      <CheckboxStyle className='checkbox-row'>
        <label className='checkbox-label' htmlFor='SignedIn'>
          <span className='custom-checkbox'>
            <input type='checkbox' className='checkbox' id='SignedIn' />
            <span className='custom-checkbox-ui' />
          </span>
          {label}
        </label>
      </CheckboxStyle>
    )
  }
}

export default Checkbox
