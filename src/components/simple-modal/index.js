import React from 'react';
import './style.css';
import Head from '../head';
import List from '../list';
import TotalBasket from '../total-basket';

function SimpleModal({basket, isOpen, onClose, onDeleteBasket}) {

    return (
        <>
        {isOpen && (
        <div className='modal'>
            <div className='modal-wrapper'>
                <div className='modal-content'>
                    <Head title="Корзина" onClose={onClose}/>
                    <List list={basket} basketControls={true} onDeleteBasket={onDeleteBasket}/>
                    <TotalBasket basket={basket}/>
                </div> 
            </div>
        </div>
        )}
        </>
    );
  }

  export default React.memo(SimpleModal);