import React from 'react';
import './style.css';
import { productText, sumProduct } from '../../utils';

function Controls({basket, onOpen}) {
  let quantitProduct = basket.length;

  let sum = sumProduct(basket);
  let prt = productText(quantitProduct);
  
  let text = quantitProduct == 0 ? 'пусто' : quantitProduct + ' ' + prt +' / ' + sum + ' ₽';



  return (
    <div className="Controls">
      <p>В корзине: <span className='Controls-basket'>{text}</span></p>
      <button onClick={onOpen}>Перейти</button>
    </div>
  );
}


export default React.memo(Controls);
