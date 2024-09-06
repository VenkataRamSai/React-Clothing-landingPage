import React from 'react'

const WomenCollection = (props) => {
    const  {title,image1,image2,image3,image4,image5,image6}=props.womenFashion;
  return (
    <div className='womenColle'>
      <h2>{title}</h2>
      <img src='assets/LadiesBanner.gif' alt='none' className='menBanner'></img>
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

export default WomenCollection
