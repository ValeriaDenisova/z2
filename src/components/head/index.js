import React from 'react';
import './style.css';

function Head({ title, onClose }) {
  let button = '';
  if (title == "Корзина"){
    button = <button onClick={onClose}>Закрыть</button>;
  } 
  return (
    <div className="Head">
      <h1>{title}</h1>
      {button}
    </div>
    
  );
}


export default React.memo(Head);
