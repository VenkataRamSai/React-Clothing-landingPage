import React from 'react'
const Collections = (props) => {
  const {title,image1,image2,image3,image4,image5,image6}=props.gentsFashion;
  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
      <div className='images'>
        <img src={image1} alt='none' className='menImg'></img>
        <img src={image2} alt='none' className='menImg'></img>
        <img src={image3} alt='none' className='menImg'></img>
        <img src={image4} alt='none' className='menImg'></img>
        <img src={image5} alt='none' className='menImg'></img>
        <img src={image6} alt='none' className='menImg'></img>
      </div>

    </div>
  )
}

export default Collections
