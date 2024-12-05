import axios from "axios";
import { BASE_URL } from "../Constants";

export const fetchPokeEvo = async (pokeName) => {
    try {
        
        const fetchPokeSpecies = await axios.get(`${BASE_URL}/pokemon-species/${pokeName}`);
        
        const evoChainUrl = fetchPokeSpecies.data.evolution_chain.url;
        const fetchEvo = await axios.get(evoChainUrl)
        
        const data = fetchEvo.data.chain
        
        const firstPokeInChain = data.species.name
        const firstEvo = data.evolves_to[0]?.species?.name
        const secondEvo = data.evolves_to[0].evolves_to[0]?.species?.name
        
        if(firstPokeInChain === pokeName) {
            return firstEvo
        } else if(firstEvo === pokeName) {
            return secondEvo
        } else if(secondEvo === pokeName) {
            return pokeName
        }

    } catch (err) {
        console.log(`fetchPokeEvo error: ${err.response}`);
    }
}