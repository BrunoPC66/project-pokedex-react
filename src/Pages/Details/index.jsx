import Header from "../../Components/Header";
import DetailsPageStyle from "./styled";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DetailCard from "../../Components/Cards/DetailCard";

function DetailsPage() {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  const params = useParams().pokemon

  const {
    setPage,
    setThisPokeName,
    pokemonDetails,
    setPokemonDetails
  } = context

  const renderThisPage = async () => {
    await setPage(pathname)
    await setThisPokeName(params)
  }

  useEffect(() => {
    renderThisPage()
  }, [params])

  return (
    <div>
      <Header />
      <DetailsPageStyle>
        <h1>Detalhes</h1>
        <DetailCard />
      </DetailsPageStyle>
    </div>
  );
}

export default DetailsPage;