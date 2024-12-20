import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import Header from "../../Components/Header";
import HomePageStyle from "./styled";
import { useLocation } from "react-router-dom";
import HomeCard from "../../Components/Cards/HomeCard";

function HomePage() {
  const context = useContext(GlobalContext)
  const pathname = useLocation().pathname

  const {
    setPage,
  } = context

  setPage(pathname)

  return (
    <div>
      <Header />
      <HomePageStyle>
        <h1>Pokémons</h1>
        <HomeCard />
      </HomePageStyle>
    </div>
  );
}

export default HomePage;