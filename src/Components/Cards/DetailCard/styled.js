import styled from "styled-components";
import pokeball from "../../../assets/pokeball-icon-full.png"

const DetailCardStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
    width: 98.7vw;
    height: max-content;
    color: white;

ul {
    margin-top: 15px;
}

li {
    list-style-type: none;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 17px;
    margin-bottom: 15px;
}

.card-container {
    display: grid;
    grid-template: repeat(25, 4%) / repeat(50, 2%);
    justify-content: center;
    align-items: baseline;
    width: 95%;
    margin: 5px;
}

.card-poke-img {
    position: relative;
    grid-area: 10 / 37;
    align-self: self-end;
    min-width: 250px;
    width: 50vh;
}
    
.card-block {
    display: grid;
    grid-area: 1 / 1 / 51 / 51;
    grid-template: repeat(25, 4%) / repeat(50, 2%);
    background-image: url(${pokeball});
    background-repeat: no-repeat;
    background-position-x: 115%;
    background-position-y: 50%;
    background-size: 50%;
    border-radius: 12px;
    max-height: 460px;
    min-height: 390px;
    height: 90vh;
}

.mini-front-block {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 240px;
    grid-area: 2 / 2 / 13 / 11;
    background-color: mistyrose;
    border-radius: 12px;
}

.mini-back-block {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 240px;
    grid-area: 14 / 2 / 25 / 11;
    background-color: mistyrose;
    border-radius: 12px;
}

.mini-poke {
    width: 140px;
}

.base-stats-block {
    display: grid;
    grid-template: repeat(20, 5%) / repeat(20, 5%);
    padding: 15px;
    max-height: 508px;
    grid-area: 2 / 12 / 25 / 24;
    background-color: mistyrose;
    border-radius: 12px;
    color: black;
}

.base-stats-block h2 {
    grid-area: 1 / 1 / 3 / 21;
    font-size: x-large;
    font-weight: bold;
}

.base-stats-block ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-self: center;
    width: 100%;
    grid-area: 3 / 1 / 21 / 21;
}

.base-stats-block li[data-value] {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 26px;
    z-index: 1;
    border-radius: 12px;
    padding: 2px;
    background-color: mistyrose;
    --bar: attr(data-value);
}

.total-base-stats {
    margin-top: 20px;
}

.card-id-name {
    display: flex;
    grid-area: 2 / 26;
    flex-wrap: wrap;
    font-weight: bold;
    line-height: 18px;
    width: 900%;
}

.poke-id {
    font-size: smaller;
}

.poke-name {
    font-size: xx-large;
    margin-top: 5px;
    width: 100%;
}

.poke-name::first-letter {
    text-transform: capitalize;
}

.types {
    display: flex;
    flex-wrap: wrap;
    grid-area: 5 / 26 / 5 / 40;
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

.moves-block {
    display: grid;
    grid-template: repeat(20, 5%) / repeat(20, 5%);
    grid-area: 8 / 26 / 25 / 35;
    padding: 15px;
    background-color: mistyrose;
    border-radius: 12px;
    color: black;
}

.moves-block h2 {
    grid-area: 1 / 1 / 3 / 21;
    font-size: large;
    font-weight: bold;
}

.moves-block ul{
    justify-self: center;
    width: 100%;
    grid-area: 3 / 2 / 21 / 21;
    overflow: auto;
}
`

export default DetailCardStyle;