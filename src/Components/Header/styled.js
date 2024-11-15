import styled from "styled-components";


const HeaderStyle = styled.div `
margin: 30px 0 30px 0;
height: 25vh;

.header-container {
    position: relative;
    min-width: fit-content;
}

.pokemon-logo {
    position: absolute;
    width: 300px;
    left: 50%;
    top: 50%;    
    transform: translate(-50%, 0%);
    cursor: pointer;
}

.to-home-page {
    padding: 6px 15px 6px 15px;
    text-align: center;
    border: 1px solid;
    background-color: indianred;
    border: 1px solid black;
    font-weight: 500;
}

#pokedex-header .to-home-page {
    position: absolute;
    margin-left: 20px;
    margin-top: 40px;
    width: 110px;
    height: 37px;
    border-radius: 100px 100px 100px 100px;
    border: 1px solid black;
}

.to-pokedex-page {
    padding: 6px 15px 6px 15px;
    text-align: center;
    border: 1px solid black;
    background-color: mistyrose;
    border-radius: 8px;
    font-weight: 500;
}

#home-header .to-pokedex-page {
    position: absolute;
    left: 85%;
    margin-top: 40px;
    width: 110px;
    height: 37px;
    border-radius: 100px 100px 100px 100px;
    margin-right: 20px;
}

.go-to {
    position: relative;
    margin-left: 20px;
}

.go-to .to-home-page {
    position: absolute;
    width: 110px;
    height: 55px;
    border-radius: 8px 100px 100px 8px;
    border-bottom: 2px solid black;
    border-radius: 100px 100px 0px 0px;
    color: mistyrose;
}

.go-to .to-pokedex-page {
    position: absolute;
    top: 54px;
    width: 110px;
    height: 55px;
    background-color: mistyrose;
    border-top: 2px solid black;
    border-radius: 0px 0px 100px 100px;
}

.dot-black {
    z-index: 1;
    position: absolute;
    left: 45px;
    margin-top: 45px;
    border: 1px solid black;
    border-radius: 100px 100px 100px 100px;
    padding: 10px;
    color: black;
    background-color: black;
}

.dot-white {
    z-index: 2;
    position: absolute;
    left: 48.7px;
    margin-top: 48.3px;
    border-radius: 100px 100px 100px 100px;
    padding: 7px;
    background-color: mistyrose;
}

.header-catch {
    position: absolute;
    width: 110px;
    height: 37px;
    left: 85%;
    margin-top: 40px;
    padding: 6px 10px 6px 10px;
    text-align: center;
    background-color: lightblue;
    border: 1px solid black;
    border-radius: 8px;
    font-weight: 500;
    color: black;
}

.header-release {
    position: absolute;
    width: 110px;
    height: 37px;
    left: 85%;
    margin-top: 40px;
    padding: 6px 10px 6px 10px;
    text-align: center;
    background-color: indianred;
    border: 1px solid black;
    border-radius: 8px;
    font-weight: 500;
    color: mistyrose;
}
`

export default HeaderStyle;