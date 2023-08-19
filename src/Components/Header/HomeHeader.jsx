import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        goToPokedexPage
    } = context

    const onPokedexPageHandler = async () => {
        await goToPokedexPage(navigate)
    }

    return (
        <div className="header-container" id="home-header">
            <p></p>
            <a href="/" className="pokemon-logo" ><img src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" className="pokemon-logo" /></a>
            <button className="to-pokedex-page" onClick={onPokedexPageHandler}>Pokédex</button>
        </div>
    )
}

export default HomeHeader;