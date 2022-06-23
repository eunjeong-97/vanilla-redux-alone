import React from "react";
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function ToDo({ text, id, deleteTodo }) {
    const onClick = () => {
        deleteTodo(id);
    }
    return (
        <li>
            {text} <button onClick={onClick}>DEL</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteTodo: id => dispatch(actionCreators.deleteItem(id))
    };
}

export default connect(null, mapDispatchToProps)(ToDo);