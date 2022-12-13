import React, { useState } from 'react';
import './../../../App.css';
import CharacterService from '../../../services/Characters';
import CharacterCard from '../../presentational/CharacterCard/CharacterCard';
import styles from './AppRoute.module.css';
import Navbar from '../Navbar';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";


function CharRoute() {

  let { id } = useParams();
  const [personaje, setPersonaje] = React.useState({});

  // Montar los datos en el componente
  React.useEffect(() => {

    CharacterService.getOneCharacter(id).then((character) => {
      setPersonaje(character);
    }).catch((error) => console.error("No se encontro el character"));

  }, []);

  React.useEffect(() => {
    console.log(personaje);
  },[personaje]);

  return (
    <div>
        <Navbar />
        <Link to={"/"}>Volver al inicio</Link>
        <CharacterCard name={personaje.name} species={personaje.species} image={personaje.image} id={id} />
    </div>
  );
}

/**
 * 
 */

export default CharRoute;