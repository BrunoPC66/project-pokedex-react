import { useContext } from "react"
import CardStyle from "./styled"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../Contexts/GlobalContext"
import { typeBackgroundColor } from "../types"

const HomeCard = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const {
        pokemonList,
        intoPokedex,
        setIntoPokedex,
        setThisPokeName,
        goToDetailsPage
    } = context

    const onDetailsPageHandler = async (pokemon) => {
        await setThisPokeName(pokemon.name)
        await goToDetailsPage(navigate, pokemon.name)
    }

    const catchButton = (pokemon) => {
        const exist = intoPokedex.find(poke => poke.name === pokemon.name)
        if (!exist) {
            setIntoPokedex([...intoPokedex, pokemon])
        } else {
            return intoPokedex
        }
    }

    const updatedCards = pokemonList.map((poke) => {
        const sprites = poke.sprites.other;
        const officialArtwork = Object.values(sprites)[2].front_default;
        const pokeTypes = poke.types.map(type => type.type.name);
        const typesColor = pokeTypes.map(type => typeBackgroundColor.find(typeColor => typeColor.type === type).color);
        const cardBackgroundColor = pokeTypes.map(type => typeBackgroundColor.find(typeColor => typeColor.type === type).cardColor)[0];


        const pokemonObj = {
            id: poke.id,
            name: poke.name,
            sprite: officialArtwork,
            type: pokeTypes,
            typeColor: typesColor,
            backgroundColor: cardBackgroundColor
        }
        return pokemonObj
    })

    return (
        <CardStyle>
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
                                <button className="card-button" id="card-catch" onClick={() => catchButton(poke)}>Capturar!</button>
                            </section>
                        </div>
                    </div>
                )
            })}
        </CardStyle>
    )
}

export default HomeCard;