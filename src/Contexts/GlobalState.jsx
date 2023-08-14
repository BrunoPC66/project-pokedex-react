import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants";
import { GlobalContext } from "./GlobalContext";
import * as Coordinator from "../Router/Coordinator"


function GlobalState(props) {
    const [page, setPage] = useState('home')
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokeCards, setPokeCards] = useState([])
    const [intoPokedex, setIntoPokedex] = useState([])

    const {
        goToHomePage,
        goToPokedexPage,
        goToDetailsPage
    } = Coordinator

    const fetchPokemonUrls = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/?limit=30`)
            const url = res.data.results.map(poke => poke.url)

            return url
        }
        catch (err) {
            console.log(`fetchPokemonUrls error: ${err.response}`);
        }
    }

    const fetchPokemonData = async (url) => {
        try {
            const res = await axios.get(url)
            const data = res.data

            return data
        }
        catch (err) {
            console.log(`fetchPokemonData error: ${err.response}`);
        }
    }

    const fetchPokemon = async () => {
        try {
            const promises = await fetchPokemonUrls()
            const result = await Promise.all(promises.map(url => fetchPokemonData(url)))

            setPokemonDetails(result)
        } catch (err) {
            console.log(`fetchPokemon error: ${err.response}`);
        }
    }

    const updatePokeCards = (update) => {
        setPokeCards(update)
    }
    
    const releasePokemon = (pokemon) => {
        console.log("LIBERTEI!");
    }
    
    useEffect(() => {
        localStorage.setItem("pokemon", JSON.stringify(intoPokedex))
        console.log('intoPokedex: ', intoPokedex);
    }, [intoPokedex])

    useEffect(() => {
        console.log('pokeCards: ', pokeCards);
    }, [pokeCards])

    // useEffect(() => {
    //     console.log(pokemonDetails)
    // }, [pokemonDetails])

    useEffect(() => {
        fetchPokemon()
    }, [])

    const context = {
        page: page,
        setPage: setPage,
        pokemonDetails: pokemonDetails,
        pokeCards: pokeCards,
        intoPokedex: intoPokedex,
        setIntoPokedex: setIntoPokedex,
        updatePokeCards: updatePokeCards,
        fetchPokemon: fetchPokemon,
        releasePokemon: releasePokemon,
        goToHomePage: goToHomePage,
        goToPokedexPage: goToPokedexPage,
        goToDetailsPage: goToDetailsPage
    };

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;