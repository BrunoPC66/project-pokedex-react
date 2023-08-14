import { useContext} from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import HeaderStyle from "./styled";

const Header = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        page,
        setPage,
        releasePokemon,
        goToHomePage,
        goToPokedexPage
    } = context

    const onHomePageHandler = () => {
        goToHomePage(navigate)
        setPage('home')
    }

    const onPokedexPageHandler = () => {
        goToPokedexPage(navigate)
        setPage('pokedex')
    }

    const renderHeader = () => {
        switch (page) {
            case 'home':
                return (
                    <HeaderStyle>
                        <div className="header-container" id="home-header">
                            <p></p>
                            <a href="/" className="pokemon-logo" ><img src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" className="pokemon-logo" /></a>
                            <button className="to-pokedex-page" onClick={onPokedexPageHandler}>Pokédex</button>
                        </div>
                    </HeaderStyle>
                );

            case 'pokedex':
                return (
                    <HeaderStyle>
                        <div className="header-container" id="pokedex-header">
                            <a href="/" className="pokemon-logo" ><img src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" /></a>
                            <button className="to-home-page" onClick={onHomePageHandler}>« Todos os Pokémons</button>
                            <p></p>
                        </div>
                    </HeaderStyle>
                );

            case 'details':
                return (
                    <HeaderStyle>
                        <div className="header-container" id="details-header">
                            <a href="/" className="pokemon-logo" ><img src={require("../../assets/pokemon-logo.png")} alt="Pokémon™" className="pokemon-logo" /></a>
                            <button className="to-home-page" onClick={onHomePageHandler}>« Todos os Pokémons</button>
                            <button className="header-release" onClick={releasePokemon}>Libertar</button>
                        </div>
                    </HeaderStyle>
                );

            default:

                break;
        }
    }

    return renderHeader()
}

export default Header;