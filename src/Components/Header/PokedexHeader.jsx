import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const PokedexHeader = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        goToHomePage
    } = context

    const onHomePageHandler = async () => {
        await goToHomePage(navigate)
    }

    return (
        <div className="header-container" id="pokedex-header">
            <img className="pokemon-logo" src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" onClick={onHomePageHandler}/>
            <section className="go-to">
                <button className="to-home-page" onClick={onHomePageHandler}>Pokémons</button>
            </section>
        </div>
    )
}

export default PokedexHeader;