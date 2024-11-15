import { useContext } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext"
import CardStyle from "../HomeCard/styled";
import { useNavigate } from "react-router-dom";


const PokedexCard = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        intoPokedex,
        setThisPokeName,
        goToDetailsPage,
        releaseButton
    } = context

    const onDetailsPageHandler = async (pokemon) => {
        await setThisPokeName(pokemon.name)
        await goToDetailsPage(navigate, pokemon.name)
    }

    return (
        <CardStyle>
            {intoPokedex.map((poke) => {
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
                                <button className='detail-page-button' onClick={() => onDetailsPageHandler(poke)}>Details</button>
                            </section>
                            <section className='catch-release'>
                                <button className="card-button" id="card-release" onClick={() => releaseButton(poke)}>Release</button>
                            </section>
                        </div>
                    </div>
                )
            })}
        </CardStyle>
    )
}

export default PokedexCard;