import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import * as Coordinator from "../Router/Coordinator"
import { fetchPokemon } from "../Requisitions/Requisitions";


function GlobalState(props) {

    const setItemPokedex = () => {
        localStorage.setItem('pokedex', JSON.stringify(intoPokedex))
    };

    const getItemPokedex = () => {
        setIntoPokedex(JSON.parse(localStorage.getItem('pokedex')))
    }

    const pokedexStorage = () => {
        const storage = JSON.parse(localStorage.getItem('pokedex'))

        return storage || []
    };

    const [page, setPage] = useState('');
    const [pokemonList, setPokemonList] = useState([]);
    const [intoPokedex, setIntoPokedex] = useState(pokedexStorage);
    const [thisPokeName, setThisPokeName] = useState('')
    const [pokemonObject, setPokemonObject] = useState([])

    const {
        goToHomePage,
        goToPokedexPage,
        goToDetailsPage
    } = Coordinator

    const catchButton = (pokemon) => {
        const exist = intoPokedex.find(poke => poke.name === pokemon.name)
        if (!exist) {
            setIntoPokedex([...intoPokedex, pokemon])
        } else {
            return intoPokedex
        }
    }

    const releaseButton = (pokemon) => {
        const removePokemon = intoPokedex.filter(poke => poke.name !== pokemon.name)

        setIntoPokedex(removePokemon)
    }

    useEffect(() => {
       setItemPokedex()
    }, [intoPokedex, page])

    useEffect(() => {
        fetchPokemon(setPokemonList)
        getItemPokedex()
    }, [])
    
    const context = {
        page: page,
        setPage: setPage,
        pokemonList: pokemonList,
        intoPokedex: intoPokedex,
        thisPokeName: thisPokeName,
        setThisPokeName: setThisPokeName,
        setIntoPokedex: setIntoPokedex,
        pokemonObject: pokemonObject,
        setPokemonObject: setPokemonObject,
        fetchPokemon: fetchPokemon,
        goToHomePage: goToHomePage,
        goToPokedexPage: goToPokedexPage,
        goToDetailsPage: goToDetailsPage,
        catchButton: catchButton,
        releaseButton: releaseButton
    };

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;