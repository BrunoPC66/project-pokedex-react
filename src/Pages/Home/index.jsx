// import { useContext } from "react";
// import { GlobalContext } from "../../Contexts/GlobalContext";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import HomePageStyle from "./styled";

function HomePage() {
  // const context = useContext(GlobalContext)

  // const {

  // } = context


  return (
    <div>
      <Header />
      <HomePageStyle>
        <h1>Todos Pokémons</h1>
        <Card />
      </HomePageStyle>
    </div>
  );
}

export default HomePage;