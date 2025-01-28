import React from 'react';

const Button = ({ label, onClick, style, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      style={style} 
      disabled={disabled}
      className="custom-button"
    >
      {label}
    </button>
  );
};

export default Button;
