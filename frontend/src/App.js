import React from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import PropTypes from "prop-types";


App.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.oneOf(["OPEN", "IN_PROGRESS", "DONE"])
    })),
    create: PropTypes.func,
    remove: PropTypes.func,
    advance: PropTypes.func
}

AddTodo.propTypes = {
    onAdd: PropTypes.func,
}

TodoList.propTypes = {
    status: PropTypes.oneOf(["OPEN", "IN_PROGRESS", "DONE"]),
    todos: PropTypes.array,
    onDelete: PropTypes.func,
    onAdvance: PropTypes.func
}

export default function App() {

    const [todos, create, remove, advance] = useTodos();

    return (
        <Main>
            <h1>Super Kanban Board </h1>
            <AddTodo onAdd={create} />
            <Board>
                <TodoList
                    status="OPEN"
                    todos={todos}
                    onDelete={remove}
                    onAdvance={advance}
                />
                <TodoList
                    status="IN_PROGRESS"
                    todos={todos}
                    onDelete={remove}
                    onAdvance={advance}
                />
                <TodoList
                    status="DONE"
                    todos={todos}
                    onDelete={remove}
                    onAdvance={advance}
                />
            </Board>
        </Main>
    );
}

const Main = styled.main`
    height: 100vh;
    padding: 8px;

    h1 {
        color: hotpink;
    }
`;

const Board = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;
