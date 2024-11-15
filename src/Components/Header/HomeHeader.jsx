import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        goToPokedexPage,
        goToHomePage
    } = context

    const onHomePageHandler = async () => {
        await goToHomePage(navigate)
    }

    const onPokedexPageHandler = async () => {
        await goToPokedexPage(navigate)
    }

    return (
        <div className="header-container" id="home-header">
            <img className="pokemon-logo" src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" onClick={onHomePageHandler}/>
            <button className="to-pokedex-page" onClick={onPokedexPageHandler}>Pokédex</button>
        </div>
    )
}

export default HomeHeader;