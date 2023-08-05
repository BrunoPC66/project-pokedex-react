import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants";
import { GlobalContext } from "./GlobalContext";


function GlobalState(props) {
    const [pokemonDetails, setPokemonDetails] = useState([])

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

    useEffect(()=> {
        console.log(pokemonDetails)
    }, [pokemonDetails])

    useEffect(() => {
        fetchPokemon()
    }, [])

    const context = {
        pokemonDetails: pokemonDetails
    };

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export default GlobalState;
