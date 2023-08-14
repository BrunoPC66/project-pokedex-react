import styled from "styled-components";


const HeaderStyle = styled.div `
margin: 5vh 0 10vh 0;
height: 25vh;

.header-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: fit-content;
}

#pokedex-header p {
    order: 3;
}

.pokemon-logo {
    order: 2;
}

.to-home-page {
    order: 1;
}

.to-pokedex-page {
    order: 3;
    padding: 10px 25px 10px 25px;
    text-align: center;
    background-color: lightblue;
    border-radius: 8px;
}

.header-release {
    order: 3;
    padding: 10px 25px 10px 25px;
    text-align: center;
    color: white;
    background-color: indianred;
    border-radius: 8px;
}
`

export default HeaderStyle;