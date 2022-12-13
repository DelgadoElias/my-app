import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CharacterCard.module.css';


function CharacterCard({ name, image, species, id}){

    const navigate = useNavigate();

    function redirect(){
        navigate(`/personaje/${id}`)
    }

    return (
        <article className={styles.article}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Especie: {species}</p>
            <button onClick={() => redirect()} >Ver</button>
        </article>
    );
}

export default CharacterCard;