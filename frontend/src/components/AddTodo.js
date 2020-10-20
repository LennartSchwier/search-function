import React, { useState } from 'react';
import styled from "styled-components/macro";


export default function AddTodo({ onAdd }) {
    const [description, setDescription] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <StyledLabel>
                Describe new todo
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <StyledPlus alt="plus" src="https://cdn.icon-icons.com/icons2/1674/PNG/512/plussquare_110959.png"/>
            </StyledLabel>

            <button type="submit">Abschicken</button>
        </form>
    );

    function handleSubmit(event) {
        event.preventDefault();
        onAdd(description);
        setDescription('');
    }
}


const StyledLabel = styled.label`
    display: flex;
`

const StyledPlus = styled.img`
    border-radius: 5px;
    height: 1.5em;
`