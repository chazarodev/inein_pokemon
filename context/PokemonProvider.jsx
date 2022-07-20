import { useState, useEffect, createContext } from "react";

const PokemonContext = createContext()

const PokemonProvider = ({children}) => {

    //Estado que almacena las urls
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    //Estado que obtiene cada una de las urls a consultar
    const [pokemonData, setPokemonData] = useState([])
    //Obtener la url de la consulta siguiente
    const [nextURL, setNextURL] = useState(null)
    //Obtener la url de la consulta previa
    const [prevURL, setPrevURL] = useState(null)
    //Estado de carga
    const [load, setLoad] = useState(true)
    
    //consulta a la api con fetch
    const getUrls = async () => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            getPokemons(data.results)
            setNextURL(data.next)
            setPrevURL(data.previous)
        } catch (error) {
            console.log(error)
        }
        setTimeout(() => {
            setLoad(!load)
        }, 1500);
    }
    
    //Realizar una segunda consulta iterativa
    const getPokemons = (urlList) => {
        urlList.map(async urlPokemon => {
            const res = await fetch(urlPokemon.url)
            const data = await res.json()
            setPokemonData(list => [...list, data])
        })
    }
    
    //Función para consultar los siguientes pokemons
    const onClickNext = () => {
        setLoad(!load)
        //reseteamos la data
        setPokemonData([])
        //asignamos la nueva url al state
        setUrl(nextURL)
    }
    
    //Función para consultar los anteriores pokemons
    const onClickPrev = () => {
        setLoad(!load)
        //reseteamos la data
        setPokemonData([])
        //asignamos la nueva url al state
        setUrl(prevURL)
    }
    
    useEffect(() => {
        getUrls()
    }, [url])

    return (
        <PokemonContext.Provider
            value={{
                pokemonData,
                nextURL,
                prevURL,
                load,
                onClickNext,
                onClickPrev
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export {
    PokemonProvider
}

export default PokemonContext