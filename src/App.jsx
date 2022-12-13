import React, { useEffect, useState } from 'react';
import './App.css';
import AppRoute from './components/containers/AppRoute/AppRoute';
import { APIContext } from './modules/contextAPI';
import holaMundo, { chauMundo } from './modules/funciones';
import BaseService from './services/Base';
import CharacterService from './services/Characters';

function App() {

  const [datos, setDatos] = useState('Hola mundo');

  const values = {
    datos, handleSetDatos
  }

  function handleSetDatos(datos){
    setDatos('Chau mundo');
  }

  return (
    <APIContext.Provider value={values}>
      <AppRoute />
    </APIContext.Provider>
  )
}

/**
 * 
 */

export default App;
