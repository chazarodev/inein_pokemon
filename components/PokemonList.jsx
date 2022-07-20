import { useState } from 'react'
import Types from './Types'
import Modal from './Modal'
import styles from '../styles/PokemonList.module.css'
import Pokemon from './Pokemon'

const PokemonList = ({pokemon}) => {

    const [isOpen, setIsOpen] = useState(false)

    const {id, name, types} = pokemon

    const imgPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

    return (
        <div className='contenido'>
            <div>
                <button 
                    type='button'
                    className={styles.button}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img className={styles.image} src={`${imgPokemon}/${id}.png`} alt={`imagen ${name}`} />
                </button>
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
            <Modal isOpened={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <Pokemon 
                    pokemon={pokemon}
                    imgPokemon={imgPokemon}
                />
            </Modal>
        </div>
    )
}

export default PokemonList