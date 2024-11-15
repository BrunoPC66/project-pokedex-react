import Header from "../../Components/Header";
import DetailsPageStyle from "./styled";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useLocation, useParams } from "react-router-dom";
import DetailCard from "../../Components/Cards/DetailCard";

function DetailsPage() {
  const context = useContext(GlobalContext)
  const pathname = useLocation().pathname
  const params = useParams().pokemon

  const {
    setPage,
    setThisPokeName,
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
      <Header params={params} />
      <DetailsPageStyle>
        <h1>Details</h1>
        <DetailCard />
      </DetailsPageStyle>
    </div>
  );
}

export default DetailsPage;