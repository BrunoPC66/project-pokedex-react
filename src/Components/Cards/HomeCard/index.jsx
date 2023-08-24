import { useContext } from "react"
import HomeCardStyle from "./styled"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../Contexts/GlobalContext"
import { CardLogic } from "../logic"

const HomeCard = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const {
        pokemonList,
        intoPokedex,
        pokemonObject,
        setPokemonObject,
        setThisPokeName,
        goToDetailsPage,
        catchButton
    } = context

    const onDetailsPageHandler = async (pokemon) => {
        await setThisPokeName(pokemon.name)
        await goToDetailsPage(navigate, pokemon.name)
    }

    const updatedCards = CardLogic(pokemonList, pokemonObject, setPokemonObject)

    return (
        <HomeCardStyle>
            {updatedCards.map((poke) => {
                return (
                    <div key={poke.name} className="card-container">
                        <section className="card-poke-img">
                            <img src={poke.sprite} alt={poke.name} />
                        </section>
                        <div className='card-block' style={{ backgroundColor: poke.backgroundColor }}>
                            <section className='card-id-name'>
                                <p className="poke-id">#{poke.id}</p>
                                <p className="poke-name">{poke.name}</p>
                            </section>
                            <section className='types'>
                                {poke.type.map((type, i) => {
                                    return (
                                        <span key={poke.name} className='card-type' style={{ backgroundColor: poke.typeColor[i] }}>
                                            <img src={require(`../../../assets/pokemon-types-icons/${type}.png`)} alt={type} className="type-img" />
                                            <p className="type-name">{type}</p>
                                        </span>
                                    )
                                })
                                }
                            </section>
                            <section className='detail-page-button-container'>
                                <button className='detail-page-button' onClick={() => onDetailsPageHandler(poke)}>Detalhes</button>
                            </section>
                            <section className='catch-release'>
                            {/* An alternative way to make a normal if inside the JSX return */}
                                {(() => {
                                    if (intoPokedex.find(pokemon => pokemon.name === poke.name)) {
                                        return <button className="card-button" id="card-catched" onClick={() => catchButton(poke)}>Capturado</button>
                                    } else {
                                        return <button className="card-button" id="card-catch" onClick={() => catchButton(poke)}>Capturar!</button>
                                    }
                                })()}
                            </section>
                        </div>
                    </div>
                )
            })}
        </HomeCardStyle>
    )
}

export default HomeCard;