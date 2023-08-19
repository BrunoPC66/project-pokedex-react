import styled from "styled-components";
import pokeball from "../../../assets/pokeball-icon.png"

const CardStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 98.7vw;
    color: white;

.card-container {
    display: grid;
    grid-template: repeat(20, 5%) / repeat(20, 5%);
    justify-content: center;
    align-items: baseline;
    width: 430px;
    height: 250px;
    margin: 5px;
}

.card-poke-img {
    position: relative;
    align-self: self-end;
    width: 193px;
    grid-area: 15 / 11;
}
    
.card-block {
    display: grid;
    grid-area: 4 / 1;
    grid-template: repeat(20, 5%) / repeat(20, 5%);
    background-image: url(${pokeball});
    background-repeat: no-repeat;
    background-position-x: right;
    border-radius: 12px;
    width: 420px;
    height: 210px;
}

.card-id-name {
    display: flex;
    grid-area: 2 / 2;
    flex-wrap: wrap;
    font-weight: bold;
    line-height: 18px;
    width: 900%;
}

.poke-id {
    font-size: smaller;
}

.poke-name {
    font-size: larger;
    width: 100%;
}

.poke-name::first-letter {
    text-transform: capitalize;
}

.types {
    display: flex;
    flex-wrap: wrap;
    grid-area: 7 / 2 / 9 / 13;
}

.card-type {
    display: flex;
    margin-right: 10px;
    padding: 5px;
    border: 1px dashed;
    border-radius: 8px;
}

.type-img {
    margin-right: 10px;
}

.type-name {
    font-weight: 500;
}

.detail-page-button-container {
    grid-area: 17 / 2;
}

.detail-page-button {
    text-decoration: underline;
    font-weight: bolder;
}

.catch-release {
    grid-area: 17 / 14;
}

.card-button {
    border-radius: 8px;
    padding: 2px 27px 2px 27px;
    font-size: 16px;
}

#card-catch {
    background-color: mistyrose;
    color: black;
}

#card-release {
    background-color: indianred;
    border-radius: 8px;
    font-weight: 500;
    color: mistyrose;
}
`

export default CardStyle;