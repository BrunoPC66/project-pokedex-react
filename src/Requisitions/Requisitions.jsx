import axios from "axios";
import { BASE_URL } from "../Constants";

export const fetchPokemonUrls = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/?limit=34`)
        const url = res.data.results.map(poke => poke.url)

        return url
    }
    catch (err) {
        console.log(`fetchPokemonUrls error: ${err.response}`);
    }
}

export const fetchPokemonData = async (url) => {
    try {
        const res = await axios.get(url)
        const data = res.data

        return data
    }
    catch (err) {
        console.log(`fetchPokemonData error: ${err.response}`);
    }
}

export const fetchPokemon = async (set) => {
    try {
        const promises = await fetchPokemonUrls()
        const result = await Promise.all(promises.map(url => fetchPokemonData(url)))

        set(result)
    } catch (err) {
        console.log(`fetchPokemon error: ${err.response}`);
    }
}
