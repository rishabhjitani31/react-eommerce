import React, { Component } from 'react'
import _ from 'lodash'
import { SortStyle } from './styles'

class Sort extends Component {
  state = {
    sortedData: []
  }

  render () {
    const { data = [] } = this.props
    const sortedData = _.sortBy(data, 'name')
    return (
      <SortStyle>
        <div className='sorting-header'>
          <div className='sorting-header-container'>
            <span className='title'>Sort by:</span>
            {sortedData.map(({ name, key, active }) => {
              return (
                <div
                  key={key}
                  className={
                    active ? 'sorting-method active' : 'sorting-method'
                  }
                >
                  {name}
                </div>
              )
            })}
          </div>
        </div>
      </SortStyle>
    )
  }
}

export default Sort
