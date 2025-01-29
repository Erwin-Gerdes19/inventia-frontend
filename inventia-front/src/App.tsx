import { useState } from 'react'
import Routes from './routes/Routes'
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';

function App() {
  return (
    <PrimeReactProvider>
      <Routes />
    </PrimeReactProvider>
  );
}

export default App;
