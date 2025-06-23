import React from 'react'

const imageCard = ({url, title}) => {
  return (
    <div className='image-container'>
      <img src={url} alt={title} className='image-view' />
      </div>
  )
}

export default imageCard