import React from 'react'
import Types from './Types'
import styles from '../styles/PokemonList.module.css'

const Pokemon = ({pokemon}) => {

    const {id, name, types} = pokemon

    const imgPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

    return (
        <div className='contenido'>
            <div>
                <img className={styles.image} src={`${imgPokemon}/${id}.png`} alt={`imagen ${name}`} />
            </div>
            <div>
                <small className={styles.small}>N.&ordm;{id}</small>
                <h1 className={styles.nombre}>{name}</h1>
            </div>
            <div className={styles.types}>
                {types.map(type => (
                        <Types 
                            key={name +type.type.name + id} 
                            type={type}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Pokemon