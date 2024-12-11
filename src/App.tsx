import React from 'react';
import Layout from './Component/Layout.tsx';
import FailSafe from './Component/FailSafe.tsx';

const App = () => {
  return (
    <FailSafe>
      <Layout />
    </FailSafe>
  );
}

export default App;
