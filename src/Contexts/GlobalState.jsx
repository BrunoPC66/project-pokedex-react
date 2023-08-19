import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import * as Coordinator from "../Router/Coordinator"
import { fetchPokemon } from "../Requisitions/Requisitions";


function GlobalState(props) {

    const setItemPokedex = () => {
        localStorage.setItem('pokedex', JSON.stringify(intoPokedex))
    };

    const setItemDetails = () => {
        localStorage.setItem('details', JSON.stringify(pokemonDetails))
    };

    const pokedexStorage = () => {
        const storage = JSON.parse(localStorage.getItem('pokedex'))

        return storage || []
    };

    const detailsStorage = () => {
        const storage = JSON.parse(localStorage.getItem('details'))

        return storage || []
    };

    const [page, setPage] = useState('/');
    const [pokemonList, setPokemonList] = useState([]);
    const [intoPokedex, setIntoPokedex] = useState(pokedexStorage);
    const [thisPokeName, setThisPokeName] = useState('')
    const [pokemonDetails, setPokemonDetails] = useState(detailsStorage);

    const {
        goToHomePage,
        goToPokedexPage,
        goToDetailsPage
    } = Coordinator

    useEffect(() => {
        setItemPokedex()
        setItemDetails()
    }, [intoPokedex, pokemonDetails, page])

    useEffect(() => {
        fetchPokemon(setPokemonList)
    }, [])
    
    const context = {
        page: page,
        setPage: setPage,
        pokemonList: pokemonList,
        intoPokedex: intoPokedex,
        thisPokeName: thisPokeName,
        setThisPokeName: setThisPokeName,
        pokemonDetails: pokemonDetails,
        setPokemonDetails: setPokemonDetails,
        setIntoPokedex: setIntoPokedex,
        fetchPokemon: fetchPokemon,
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