import React from 'react';

const Box = ({ id, backgroundColor = "green", width = 5, height = 5, handleRemove }) => {
  const remove = () => handleRemove(id);

  return (
    <div>
      <div 
        style={{ 
          backgroundColor,
          width: `${width}em`,
          height: `${height}em`         
        }}
      ></div>
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;