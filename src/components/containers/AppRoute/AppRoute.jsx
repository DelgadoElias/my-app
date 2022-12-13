import React, { useState } from 'react';
import './../../../App.css';
import CharacterService from '../../../services/Characters';
import CharacterCard from '../../presentational/CharacterCard/CharacterCard';
import styles from './AppRoute.module.css';
import Navbar from '../Navbar';
import useCounter from '../../../hooks/useCounter';

function AppRoute() {

  // const [Array destructuring] = React.useState(initialValue);
  const [personajes, setPersonajes] = useState([]);
  const { value, handlePlus, handleMinus, handleSpecific } = useCounter();
  // state: Representara al valor del estado --> []
  // setState: Funcion que puede modificar el estado
  
  // callback + array
  // useEffect(callback, array);

  // vigilar y generar acciones en el ciclo de vida del componente

    React.useEffect(() => {
      if(value < 1) {
        handleSpecific(1);
      }
      if(value > 42){
        handleSpecific(42);
      }
    }, [value]);

    // Cada vez que se monta
    React.useEffect(() => {
      CharacterService.getCharacters(value).then((data) => {
        console.log(data);
        setPersonajes(data.results);
      }).catch((error) => console.error(error));
    }, [value]);


  return (
    <div className="App">
        <Navbar />

      <p>Pagina actual: {value}</p>
      <ul>
        <li></li>
      </ul>
      <button onClick={() => handleMinus()}> - </button>
      <button onClick={() => handlePlus()}> + </button>

      <div className={styles.characters}>
        {
            personajes.map(({ name, image, species, id}) => (
                <CharacterCard name={name} image={image} species={species} id={id} />
            ))
        }
      </div>
    </div>
  );
}

/**
 * 
 */

export default AppRoute;