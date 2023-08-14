import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import Header from "../../Components/Header";
import PokedexPageStyle from "./styled";
import CardStyle from "../../Components/Card/styled";

function PokedexPage() {
  const context = useContext(GlobalContext)

  const {
    intoPokedex
  } = context

  return (
    <div>
      <Header />
      <PokedexPageStyle>
        <h1>Pokedex</h1>
        <CardStyle>
          {intoPokedex}
        </CardStyle>
      </PokedexPageStyle>
    </div>
  );
}

export default PokedexPage;