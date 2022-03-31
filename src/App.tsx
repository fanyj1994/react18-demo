import React from 'react';
import './App.css';
import AutoBatching from './AutoBatching';
import { ProfilePage as SuspenseExample } from './demo/Suspense';

function App() {
  return (
    <div className="App">
      <AutoBatching />
      <SuspenseExample />
    </div>
  );
}

export default App;
