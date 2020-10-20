import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
import PropTypes from "prop-types";


Todo.propTypes = {
    onDelete: PropTypes.func,
    onAdvance: PropTypes.func,
    id: PropTypes.string,
    status: PropTypes.oneOf(["OPEN", "IN_PROGRESS", "DONE"]),
    description: PropTypes.string
}

export default function TodoList({ status, todos, onDelete, onAdvance }) {
    const filteredTodos = todos.filter((todo) => todo.status === status);
    return (
        <StyledList>
            {filteredTodos.map((todo) => (
                <li key={todo.id}>
                    <Todo {...todo} onDelete={onDelete} onAdvance={onAdvance} />
                </li>
            ))}
        </StyledList>
    );
}

const StyledList = styled.ul`
    list-style: none;
    padding: 0;

    li + li {
        margin-top: 12px;
    }
`;
