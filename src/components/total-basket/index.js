import React from 'react';
import './style.css';
import { format, sumProduct } from '../../utils';

function TotalBascet({basket}) {
    let sum = sumProduct(basket);

    return (
       <div className='TotalBasket'>Итого <span>{sum} ₽</span></div>
    );
  }

  export default React.memo(TotalBascet);