import styled from "styled-components";


const HeaderStyle = styled.div `
margin: 30px 0 30px 0;
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

.go-to {
    order: 1;
    display: grid;
    grid-template-rows: repeat(25, 4%);
    align-items: center;
    justify-items: center;
}

.dot-black {
    z-index: 1;
    grid-area: 13 / 1 / 13 / 1;
    border: 1px solid black;
    border-radius: 100px 100px 100px 100px;
    padding: 10px;
    color: black;
    background-color: black;
}

.dot-white {
    z-index: 2;
    grid-area: 13 / 1 / 13 / 1;
    border-radius: 100px 100px 100px 100px;
    padding: 7px;
    background-color: mistyrose;
}

.to-home-page {
    order: 1;
    padding: 10px 25px 10px 25px;
    text-align: center;
    background-color: indianred;
    border: 1px solid black;
    font-weight: 500;
}

#pokedex-header .to-home-page {
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border: 1px solid black;
    border-radius: 100px 8px 8px 100px;
}

.go-to .to-home-page {
    grid-area: 1 / 1 / 11 / 1;
    width: 100%;
    height: 150%;
    border-bottom: 2px solid black;
    border-radius: 100px 100px 0px 0px;
    color: mistyrose;
}

.to-pokedex-page {
    order: 3;
    padding: 6px 15px 6px 15px;
    text-align: center;
    border: 1px solid;
    background-color: lightblue;
    border-radius: 8px;
    font-weight: 500;
}

#home-header .to-pokedex-page {
    width: 150px;
    border-radius: 8px 100px 100px 8px;
}

.go-to .to-pokedex-page {
    grid-area: 16 / 1 / 25 / 1;
    width: 100%;
    height: 160%;
    background-color: mistyrose;
    border-top: 2px solid black;
    border-radius: 0px 0px 100px 100px;
}

.header-catch {
    order: 3;
    padding: 6px 15px 6px 15px;
    text-align: center;
    background-color: lightblue;
    border: 1px solid black;
    border-radius: 8px;
    font-weight: 500;
    color: black;
}

.header-release {
    order: 3;
    padding: 6px 15px 6px 15px;
    text-align: center;
    background-color: indianred;
    border: 1px solid black;
    border-radius: 8px;
    font-weight: 500;
    color: mistyrose;
}
`

export default HeaderStyle;