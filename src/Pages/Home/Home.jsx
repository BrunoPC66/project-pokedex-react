import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";

function HomePage() {
  const context = useContext(GlobalContext)
  
  const {
    pokemonDetails
    } = context

  
    return (
      <div>
      <h1>HomePage</h1>
      {pokemonDetails.map((pokemon, index) => {
        return (
          <div key={index}>
            
          </div>
        )
      })}
      </div>
    );
  }
  
  export default HomePage;