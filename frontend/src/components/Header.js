import React from "react";
import AddTodo from "./AddTodo";
import SearchBar from "./SearchBar";
import styled from "styled-components/macro";

export default function Header({create, searchText, setSearchText}) {



    return(
        <div>
            <h1>Super Kanban Board </h1>
            <StyledBars>
                <AddTodo onAdd={create} />
                <SearchBar
                    setSearchText={setSearchText}
                    searchText={searchText}
                />
            </StyledBars>
        </div>
    );
}

const StyledBars = styled.div`
  display: flex;
  justify-content: space-evenly;
`
