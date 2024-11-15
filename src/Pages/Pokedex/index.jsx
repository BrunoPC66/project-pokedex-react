import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import Header from "../../Components/Header";
import PokedexPageStyle from "./styled";
import { useLocation } from "react-router-dom";
import PokedexCard from "../../Components/Cards/PokedexCard";

function PokedexPage() {
  const context = useContext(GlobalContext)
  const pathname = useLocation().pathname

  const {
    setPage
  } = context

  setPage(pathname)

  return (
    <div>
      <Header />
      <PokedexPageStyle>
        <h1>Pokédex</h1>
        <PokedexCard />
      </PokedexPageStyle>
    </div>
  );
}

export default PokedexPage;