import React from 'react';
import List from './List';

function App() {
  const items = [
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
  ];

  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;
