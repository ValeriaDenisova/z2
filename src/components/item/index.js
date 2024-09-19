import React, { useState } from 'react';
import { format } from '../../utils';
import './style.css';


function Item(props) { 
  // Счётчик выделений
  const [count, setCount] = useState(0);
  let quantity, button;
 
 

  const callbacks = {
    onClick: () => {
      props.onSelect(props.item.code);
      if (!props.item.selected) {
        setCount(count + 1);
      }
    },
    onDelete: e => {
      e.stopPropagation();
      props.onDelete(props.item.code);
    },

    onDeleteBasket: e => {
      e.stopPropagation();
      props.onDeleteBasket(props.item.code);
    },


    onAbbBasket: e => {
      e.stopPropagation();
      props.onAbbBasket(props.item.code);
    },

  };

  if (props.basketControls){
    quantity = props.item.quantity;
    quantity = quantity + ' шт';
    button = <button onClick={callbacks.onDeleteBasket}>Удалить</button>
  } else {
    button = <button onClick={callbacks.onAbbBasket}>Добавить</button>
  }



  return (
    <div className='Item'>
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className='Item-price'>{format(props.item.price + "")} ₽</div>
      <div className='Item-quantity'>{quantity}</div>
      <div className="Item-actions">
        {button}
      </div>
    </div>
  );
}


export default React.memo(Item);
