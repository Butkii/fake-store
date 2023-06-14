import { useState, useEffect } from 'react';
import Store from './components/Store';
import axios from 'axios';

function App() {
  const [storeItem, setStoreItem] = useState(
    [
      {
        title: "Item 1",
        price: 100,
      },
      {
        title: "Item 2",
        price: 40,
      },
      {
        title: "Item 3",
        price: 85,
      },
    ]
  );

  return (
    <div>
      <Store items={storeItem} onItemAdd={itemData => {
        setStoreItem([...storeItem, itemData]);
      }}/>
    </div>
  );
}

export default App;
