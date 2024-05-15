import React from 'react'
import './buttonStyle.css'
const Button = ({ btnName, outline }) => {
  return (
      <button className={`${outline ? "outline" : "btn"}`}>
          {btnName}
      </button>
  );
  
}

export default Button;
