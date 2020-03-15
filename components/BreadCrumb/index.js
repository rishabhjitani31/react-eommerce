import React, { Component } from 'react'
import { BreadCrumbStyle } from './styles'

class BreadCrumb extends Component {
  render () {
    const { children } = this.props
    return (
      <BreadCrumbStyle>
        <ul className='breadcrumb-list'>
          {children.map((val, index) => {
            return (
              <li className='breadcrumb-item' key={val.key}>
                {children.length === index + 1 ? (
                  val.name
                ) : (
                  <a className='breadcrumb-link' href='#'>
                    {val.name}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </BreadCrumbStyle>
    )
  }
}

export default BreadCrumb
