import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const DetailsHeader = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        releasePokemon,
        goToHomePage,
        goToPokedexPage
    } = context

    const onHomePageHandler = async () => {
        await goToHomePage(navigate)
    }

    const onPokedexPageHandler = async () => {
        await goToPokedexPage(navigate)
    }

    return (
        <div className="header-container" id="details-header">
            <a href="/" className="pokemon-logo" ><img src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" className="pokemon-logo" /></a>
            <section className="go-to">
                <button className="to-home-page" onClick={onHomePageHandler}>Pokémons</button>
                <span className="dot-black"></span>
                <span className="dot-white"></span>
                <button className="to-pokedex-page" onClick={onPokedexPageHandler}>Pokédex</button>
            </section>
            <button className="header-release" onClick={releasePokemon}>Libertar</button>
        </div>
    )
}

export default DetailsHeader;