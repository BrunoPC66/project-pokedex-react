import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const DetailsHeader = (props) => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const params = useParams().pokemon

    const {
        pokemonObject,
        goToHomePage,
        goToPokedexPage,
        catchButton,
        releaseButton
    } = context

    const onHomePageHandler = async () => {
        await goToHomePage(navigate)
    }

    const onPokedexPageHandler = async () => {
        await goToPokedexPage(navigate)
    }

    const catchFromHeader = () => {
        const getPoke = pokemonObject.find(poke => poke.name === params)
        catchButton(getPoke)
    }

    const releaseFromHeader = () => {
        const getPoke = pokemonObject.find(poke => poke.name === params)
        console.log(params); 
        return getPoke ?
        releaseButton(getPoke)
        :
        pokemonObject
    }
    console.log(pokemonObject);

    return (
        <div className="header-container" id="details-header">
            <a href="/" className="pokemon-logo" ><img src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" className="pokemon-logo" /></a>
            <section className="go-to">
                <button className="to-home-page" onClick={onHomePageHandler}>Pokémons</button>
                <span className="dot-black"></span>
                <span className="dot-white"></span>
                <button className="to-pokedex-page" onClick={onPokedexPageHandler}>Pokédex</button>
            </section>
            <button className="header-catch" onClick={catchFromHeader}>Capturar!</button>
            <button className="header-release" onClick={releaseFromHeader}>Libertar</button>
        </div>
    )
}

export default DetailsHeader;