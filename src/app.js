import React, { useCallback } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import SimpleModal from './components/simple-modal';
import { useState } from 'react';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const basket = store.getState().basket;

  const callbacks = {
    onDeleteItem: useCallback(
      code => {
        store.deleteItem(code);
      },
      [store],
    ),

    onAbbBasket: useCallback(
      code => {
        store.addBasket(code);
      },
      [store],
    ),

    onSelectItem: useCallback(
      code => {
        store.selectItem(code);
      },
      [store],
    ),

    onDeleteBasket: useCallback(
      code => {
        store.deleteBasket(code);
      },
      [store],
    ),

    

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),
  };

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  return (
    <>
    <PageLayout>
      <Head title="Магазин"/>
      <Controls basket={basket} 
        onOpen={()=> setModalInfoOpen(true)} 
      />
      <List
        list={list}
        basketControls = {false}
        onDeleteItem={callbacks.onDeleteItem}
        onSelectItem={callbacks.onSelectItem}
        basket={basket}
        onAbbBasket={callbacks.onAbbBasket}
      />
    </PageLayout>

    <SimpleModal 
    basket={basket}
    isOpen={modalInfoIsOpen}
    onClose={()=> setModalInfoOpen(false)}
    onDeleteBasket={callbacks.onDeleteBasket}
    />
    </>
  );
}

export default App;
