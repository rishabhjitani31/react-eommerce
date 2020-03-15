import React, { useState } from 'react'

import { StyledPreviewItem } from './styles'

const PreviewItem = ({ itemImages }) => {
  const [selectedSrc, setSelectedSrc] = useState(itemImages[0])
  return (
    <StyledPreviewItem>
      <div className='preview-container'>
        <div className='preview-left-grid'>
          <div className='grid-container'>
            <ul>
              {itemImages.map(itemImage => {
                return (
                  <li
                    key={itemImage.id}
                    onMouseOver={() => setSelectedSrc(itemImage)}
                  >
                    <img
                      src={itemImage.src}
                      alt={itemImage.alt}
                      className={`${
                        selectedSrc.id === itemImage.id ? 'is-selected' : ''
                      }`}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='preview-right-item'>
          <div>
            <img src={selectedSrc.src} alt={selectedSrc.alt} />
          </div>
        </div>
      </div>
    </StyledPreviewItem>
  )
}

export default PreviewItem
