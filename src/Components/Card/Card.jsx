import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";

export const Card = () => {
    const context = useContext(GlobalContext)

    const {
        pokemonDetails
        } = context    

    return (
        <div className='card-container'>
            <section className="card-img">
                <img/>
            </section>
            <section className='card-id-name'>

            </section>
            <section className='detail-page'>

            </section>
            <section className='button'>
                
            </section>
        </div>

    )
}