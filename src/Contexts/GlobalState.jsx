import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import * as Coordinator from "../Router/Coordinator";
import { fetchPokemon } from "../Requisitions/PokeRequisition";
import { fetchPokeEvo } from "../Requisitions/EvoRequisition";


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
    const [params, setParams] = useState('')

    const {
        goToHomePage,
        goToPokedexPage,
        goToDetailsPage
    } = Coordinator

    const catchButton = (poke) => {
        const exist = intoPokedex.find(thisPoke => thisPoke.name === poke.name)
        
        if (!exist) {
            setIntoPokedex([...intoPokedex, poke])
        }
    }

    const releaseButton = (poke) => {
        const removePokemon = intoPokedex.filter(thisPoke => thisPoke.name !== poke.name)

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
        params,
        setParams,
        fetchPokemon: fetchPokemon,
        fetchPokeEvo: fetchPokeEvo,
        goToHomePage: goToHomePage,
        goToPokedexPage: goToPokedexPage,
        goToDetailsPage: goToDetailsPage,
        catchButton: catchButton,
        releaseButton: releaseButton
    };

    // console.log(intoPokedex);

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;