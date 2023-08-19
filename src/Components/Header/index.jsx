import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import HeaderStyle from "./styled";
import HomeHeader from "./HomeHeader";
import PokedexHeader from "./PokedexHeader";
import DetailsHeader from "./DetailsHeader";

const Header = () => {
    const context = useContext(GlobalContext)

    const {
        page
    } = context

    return (
        <HeaderStyle>
            {page === '/'? 
                <HomeHeader/>
                :
                page === '/pokedex'?
                    <PokedexHeader/>
                    :
                    <DetailsHeader/>
            }
        </HeaderStyle>
    )
}
    export default Header;