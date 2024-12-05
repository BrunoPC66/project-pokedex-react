import { typeBackgroundColor } from "./types";

export const CardLogic = (toMap, state, setState) => {
    const updatedCards = toMap.map(poke => {
        if (poke) {
            const sprites = poke.sprites.other;
            const officialArtwork = Object.values(sprites)[2].front_default;
            const pokeTypes = poke.types.map(type => type.type.name);
            const typesColor = pokeTypes.map(type => typeBackgroundColor.find(typeColor => typeColor.type === type).color);
            const cardBackgroundColor = pokeTypes.map(type => typeBackgroundColor.find(typeColor => typeColor.type === type).cardColor)[0];
            const baseStats = poke.stats.map(stat => (
                {
                    name: stat.stat.name,
                    value: stat.base_stat
                }
            ));
            const totalBaseStats = baseStats.reduce((accumulator, stat) => {
                return accumulator + stat.value;
            }, 0);
            const moves = poke.moves.map(move => (
                {
                    name: move.move.name
                }
            ));

            const pokemonObj = {
                id: poke.id,
                name: poke.name,
                miniFront: poke.sprites.front_default,
                miniBack: poke.sprites.back_default,
                sprite: officialArtwork,
                type: pokeTypes,
                typeColor: typesColor,
                backgroundColor: cardBackgroundColor,
                baseStats: baseStats,
                totalBaseStats: totalBaseStats,
                moves: moves.slice(0, 7),
                fullyEvolved: false
            }

            return pokemonObj
        } else {
            return null
        }
    })

    state[0] ?
        setState(state)
        :
        setState(updatedCards)

    return updatedCards
}