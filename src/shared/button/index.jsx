import React from 'react'
import './buttonStyle.css'
const Button = ({style, id, btnName, outline, rightIcon, leftIcon}) => {
  return (
      <button style={style} id className={`${outline ? "outline" : "btn"}`}>
       {/* conditonal rendering for the icon, if there is left, it should render and if its not, should be hidden same as rightIcon */}
        {leftIcon && <span className='left_icon'>{leftIcon}</span>}
         <span className='btn-text'>
             {btnName}
         </span>
       
          {rightIcon && <span className='right_icon'>{rightIcon}</span>} 
      </button>
  );
  
}

export default Button;
