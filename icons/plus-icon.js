import React from 'react'
export default props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='10'
    height='10'
    viewBox='0 0 10 10'
    {...props}
  >
    <g fill='none' fillRule='evenodd'>
      <path d='M-7-7h24v24H-7z' />
      <path fill='#303030' d='M6 0H4v4H0v2h4v4h2V6h4V4H6z' />
    </g>
  </svg>
)
