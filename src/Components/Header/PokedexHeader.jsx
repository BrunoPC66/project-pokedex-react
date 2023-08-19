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
            <a href="/" className="pokemon-logo" ><img src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" /></a>
            <section className="go-to">
                <button className="to-home-page" onClick={onHomePageHandler}>Todos os Pokémons</button>
            </section>
            <p></p>
        </div>
    )
}

export default PokedexHeader;