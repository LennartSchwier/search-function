import React from "react";
import styled from "styled-components/macro";

export default function SearchBar({setSearchText, searchText}) {



    return(
        <form>
            <StyledLabel>
                <input placeholder="search notes..." type="text" value={searchText} onChange={event => {setSearchText(event.target.value)}}/>
                <StyledLupe  alt="lupe" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr2Y6FT9mUjLjnhyjz1Avks8S4qIFQV_yg7A&usqp=CAU"/>
            </StyledLabel>
        </form>
    );
}


const StyledLupe = styled.img`
    border-radius: 5px;
    height: 1.5em;
`

const StyledLabel = styled.label`
    display: flex;
`


