import React from 'react'

//passing image and style as props because its the only thing we want to reuse and render from this component
function CircleImage ({image, style}) {
  return (
      <div className='info_circle_img' style={style}> 
           <img src={image} alt='infocircle' className='circle_img' />
     </div>
  
  )
}

export default CircleImage
