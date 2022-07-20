import React from 'react'
import Types from './Types'
import Stats from './Stats'
import styles from '../styles/Pokemon.module.css'

const Pokemon = ({pokemon, imgPokemon}) => {

    const {id, abilities, name, stats, types} = pokemon

    return (
        <div>
            <h2 className={styles.small}>N.&ordm;{id}</h2>
            <h1 className='heading'>{name}</h1>
            <div className={styles.grid}>
                <div>
                    <img className={styles.image} src={`${imgPokemon}/${id}.png`} alt={`imagen ${name}`} />
                </div>
                <div>
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <th>
                                    <h1 className={styles.header}>Stats</h1>
                                </th>
                                <th>
                                    <h1 className={styles.header}>Level</h1>
                                </th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {stats.map(stat => (
                                <Stats 
                                    key={stat.stat.name}
                                    stat={stat}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className={styles.head}>Type</h1>
                    <div className={styles.types}>
                        {types.map(type => (
                                <Types 
                                    key={name +type.type.name + id} 
                                    type={type}
                                />
                            ))}
                    </div>
                </div>
                <div>
                    <h1 className={styles.abilites}>Abilites</h1>
                    <div className={styles.abilite}>
                        {abilities.map(abilite => (
                            <p className={styles.abilite_name}>{abilite.ability.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon