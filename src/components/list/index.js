import React from 'react';
import Item from '../item';
import './style.css';

function List({ list, basketControls, onDeleteItem, onSelectItem, basket, onAbbBasket, onDeleteBasket}) {
  

  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          <Item item={item} basketControls = {basketControls} onDelete={onDeleteItem} onSelect={onSelectItem} basket={basket} onAbbBasket={onAbbBasket} onDeleteBasket={onDeleteBasket}/>
        </div>
      ))}
    </div>
  );
}

export default React.memo(List);
