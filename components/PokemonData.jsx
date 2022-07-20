import usePokemon from '../hooks/usePokemon'
import Spinner from './Spinner'
import PokemonList from './PokemonList'
import styles from '../styles/PokemonData.module.css'

const PokemonData = () => {
    
    const {pokemonData, nextURL, prevURL, load, onClickNext, onClickPrev} = usePokemon()


    return (
        <>
            {load ? (<Spinner />) : (
                <div className={`contenedor ${styles.grid}`}>
                    {pokemonData.map(pokemon => (
                        <PokemonList 
                        key={pokemon.id}
                        pokemon={pokemon}
                        />
                        ))}
                </div>
            ) 
            }
            <div className={`contenedor ${styles.grid_button}`}>
                <div>
                    {prevURL && 
                        <button 
                        type='button'
                        className={styles.button}
                        onClick={() => onClickPrev(prevURL)}
                        >
                            Previous
                        </button>
                    }
                </div>
                <div>
                    {nextURL && 
                        <button 
                            type='button'
                            className={styles.button}
                            onClick={() => onClickNext(nextURL)}
                        >
                            Next
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default PokemonData