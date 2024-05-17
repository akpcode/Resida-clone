import React from 'react'
import './buttonStyle.css'
const Button = ({style, id, btnName, outline }) => {
  return (
      <button style={style} id className={`${outline ? "outline" : "btn"}`}>
          {btnName}
      </button>
  );
  
}

export default Button;
