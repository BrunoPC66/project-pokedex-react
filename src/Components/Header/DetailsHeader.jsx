import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const DetailsHeader = (props) => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const params = useParams().pokemon

    const {
        intoPokedex,
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
        return getPoke ?
            releaseButton(getPoke)
            :
            pokemonObject
    }

    return (
        <div className="header-container" id="details-header">
            <img className="pokemon-logo" src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" onClick={onHomePageHandler}/>
            <section className="go-to">
                <button className="to-home-page" onClick={onHomePageHandler}>Pokémons</button>
                <span className="dot-black"></span>
                <span className="dot-white"></span>
                <button className="to-pokedex-page" onClick={onPokedexPageHandler}>Pokédex</button>
            </section>
            {/* An alternative way to make a ternary if inside the JSX return */}
            {(
                intoPokedex.find(poke => poke.name === params) ?
                    <button className="header-release" onClick={releaseFromHeader}>Release</button>
                    :
                    <button className="header-catch" onClick={catchFromHeader}>Catch!</button>
            )}
        </div>
    )
}

export default DetailsHeader;