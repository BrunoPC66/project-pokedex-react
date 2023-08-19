export const goToHomePage = (navigate) => {
    navigate("/")
};

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex")
};

export const goToDetailsPage = (navigate, pokemon) => {
    navigate(`/details/${pokemon}`)
};