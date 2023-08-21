import { useContext } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import DetailCardStyle from "./styled";
import { CardLogic } from "../logic";


const DetailCard = () => {
    const context = useContext(GlobalContext)

    const {
        page,
        pokemonList,
        thisPokeName,
        pokemonObject,
        setPokemonObject,
    } = context

    const existPoke = [pokemonList.find(thisPoke => thisPoke.name === thisPokeName)]

    const updatedCards = CardLogic(existPoke, pokemonObject, setPokemonObject)

    if (updatedCards[0]) {
        return (
            <DetailCardStyle>
                {updatedCards.map(poke => {
                    const pokemonDetailPath = `/details/${poke.name}`
                    if (page === pokemonDetailPath) {
                        return (
                            <div className="card-container">
                                <section className="card-poke-img">
                                    <img src={poke.sprite} alt={poke.name} />
                                </section>
                                <div className='card-block' style={{ backgroundColor: poke.backgroundColor }}>
                                    <section className="mini-front-block">
                                        <img src={poke.miniFront} alt="mini-pixeled-front" className="mini-poke" />
                                    </section>
                                    <section className="mini-back-block">
                                        <img src={poke.miniBack} alt="mini-pixeled-back" className="mini-poke" />
                                    </section>
                                    <section className="base-stats-block">
                                        <h2>Base stats</h2>
                                        <ul>
                                            {poke.baseStats.map((stat, i) => (
                                                <li key={i} data-value={50}><span>{stat.name}:&nbsp;&nbsp;&nbsp;</span> <strong className="value">{stat.value}</strong></li>
                                            ))}
                                            <li className="total-base-stats"><span>Total:&nbsp;&nbsp;&nbsp;</span> <strong>{poke.totalBaseStats}</strong></li>
                                        </ul>
                                    </section>
                                    <section className='card-id-name'>
                                        <p className="poke-id">#{poke.id}</p>
                                        <p className="poke-name">{poke.name}</p>
                                    </section>
                                    <section className='types'>
                                        {poke.type.map((type, i) => {
                                            return (
                                                <span key={i} className='card-type' style={{ backgroundColor: poke.typeColor[i] }}>
                                                    <img src={require(`../../../assets/pokemon-types-icons/${type}.png`)} alt={type} className="type-img" />
                                                    <p className="type-name">{type}</p>
                                                </span>
                                            )
                                        })}
                                    </section>
                                    <section className="moves-block">
                                        <h2>Moves</h2>
                                        <ul>
                                            {poke.moves.map((move, i) => (
                                                <li key={i}>{move.name}</li>
                                            ))}
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <p>Pokémon não encontrado</p>
                        )
                    }
                })
                }
            </DetailCardStyle>
        )
    }
}

export default DetailCard;