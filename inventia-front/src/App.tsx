import { useState } from 'react'
import Routes from './assets/routes/Routes'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema -- Cambiar a Css GLobal
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <PrimeReactProvider>
      <Routes />
    </PrimeReactProvider>
  );
}

export default App;
