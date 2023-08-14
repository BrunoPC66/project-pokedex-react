import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import CardStyle from "./styled";
import { useNavigate } from "react-router-dom";

const Card = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        page,
        setPage,
        pokemonDetails,
        pokeCards,
        intoPokedex,
        setIntoPokedex,
        updatePokeCards,
        releasePokemon,
        goToDetailsPage
    } = context

    const onDetailsPageHandler = (pokemon) => {
        goToDetailsPage(navigate, pokemon)
        setPage('details')
    }

    const typeBackgroundColor = [
        {
            type: 'poison',
            color: '#AD61AE',
            cardColor: '#795a99'
        },
        {
            type: 'grass',
            color: '#70B873',
            cardColor: '#729F92'
        },
        {
            type: 'fire',
            color: '#F44900',
            cardColor: '#BF9762'
        },
        {
            type: 'flying',
            color: '#6892B0',
            cardColor: '#8fc4c7'
        },
        {
            type: 'water',
            color: '#33A4F5',
            cardColor: '#71C3FF'
        },
        {
            type: 'bug',
            color: '#316520',
            cardColor: '#76A866'
        },
        {
            type: 'normal',
            color: '#8A8A8A',
            cardColor: '#EAAB7D'
        },
        {
            type: 'dark',
            color: '#5C5365',
            cardColor: '#2a2d4a'
        },
        {
            type: 'dragon',
            color: '#0A6CBF',
            cardColor: '#5943a3'
        },
        {
            type: 'electric',
            color: '#F4D23B',
            cardColor: '#998a34'
        },
        {
            type: 'fairy',
            color: '#EC8FE6',
            cardColor: '#5e3480'
        },
        {
            type: 'fighting',
            color: '#CE4069',
            cardColor: '#e64040'
        },
        {
            type: 'ghost',
            color: '#5269AC',
            cardColor: '#9b80ed'
        },
        {
            type: 'ground',
            color: '#D97745',
            cardColor: '#7b8260'
        },
        {
            type: 'ice',
            color: '#74CEC0',
            cardColor: '#8dabf0'
        },
        {
            type: 'psychic',
            color: '#F67176',
            cardColor: '#f0a68d'
        },
        {
            type: 'rock',
            color: '#C7B78B',
            cardColor: '#85736d'
        },
        {
            type: 'steel',
            color: '#BBBBBB',
            cardColor: '#525252'
        }
    ]

    const catchPokemon = (pokemon) => {
        const backpack = pokeCards.find(poke => poke.key == pokemon.id)
        if (intoPokedex.length < 1) {
            setIntoPokedex([backpack])
            console.log('backpack: ', backpack);
        } else {
            setIntoPokedex([...intoPokedex, backpack])
        }
    }
    const updatedCards = pokemonDetails.map((poke) => {
        const sprites = poke.sprites.other
        const officialArtwork = Object.values(sprites)[2].front_default
        const pokeTypes = poke.types.map(type => type.type.name)
        const typesColor = typeBackgroundColor.find(typeColor => typeColor.type === poke.type)
        const cardBackgroundColor = pokeTypes.map(type => typeBackgroundColor.find(typeColor => typeColor.type === type).cardColor)[0]

        const pokemonObj = {
            name: poke.name,
            id: poke.id,
            sprite: officialArtwork || '',
            type: {...pokeTypes},
            typeColor: typesColor,
            backgroundColor: cardBackgroundColor,
        }

        return pokemonObj
    })

    useEffect(() => {
        const allCards = updatedCards.map((poke) => {
            const cardButton = () => {
                if (page === "home") {
                    return (
                        <button className="card-button"
                            id="card-catch" onClick={() => catchPokemon(poke)}>Capturar!</button>
                    )
                } else if (page === "pokedex") {
                    return (
                        <button className="card-button" id="card-release" onClick={() => releasePokemon()}>Libertar</button>
                    )
                }
            }

            return (
                <div key={poke.id} className="card-container">
                    <section className="card-poke-img">
                        <img src={poke.sprite} alt={poke.name} />
                    </section>
                    <div className='card-block' style={poke.backgroundColor}>
                        <section className='card-id-name'>
                            <p className="poke-id">#{poke.id}</p>
                            <p className="poke-name">{poke.name}</p>
                        </section>
                        <section className='types'>
                            <span className='card-type' style={poke.typeColor}>
                                {/* <img src={require(`../../assets/pokemon-types-icons/${poke.type}.png`)} alt={poke.type} className="type-img" /> */}
                                {/* <p className="type-name">{poke.type}</p> */}
                            </span>
                        </section>
                        <section className='detail-page-button-container'>
                            <button className='detail-page-button' onClick={() => onDetailsPageHandler(poke.name)}>Detalhes</button>
                        </section>
                        <section className='catch-release'>
                            {cardButton(poke)}
                        </section>
                    </div>
                </div>
            )
        });

        updatePokeCards(allCards)

    }, [page, pokemonDetails, intoPokedex])


    return (
        <CardStyle>
            {pokeCards}
        </CardStyle>
    )
}

export default Card;