import React from 'react'
export default props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='10'
    height='5'
    viewBox='0 0 10 5'
    {...props}
  >
    <g fill='none' fillRule='evenodd'>
      <path fill='#303030' d='M0 0l5 5 5-5z' />
      <path d='M-7-10h24v24H-7z' />
    </g>
  </svg>
)
