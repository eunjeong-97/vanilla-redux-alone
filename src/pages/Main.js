import React, { useState } from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';

function Main({ toDos, addToDo }) {
    const [text, setText] = useState('');
    const onSubmit = e => {
        e.preventDefault(); // 새로고침방지
        addToDo(text); // reducer
        setText(''); // 지우기
    }
    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='write on to do..' onChange={e => setText(e.target.value)} value={text} />
                <button>ADD</button>
            </form>
            <ul>{toDos.map((toDo, index) => <ToDo text={toDo.text} id={toDo.id} key={index} />)}</ul>
        </>
    )
}

// Main컴포넌트의 props로 state전달
const mapStateToProps = (state, ownProps) => {
    return { toDos: state };
}

// Main컴포넌트의 props로 dispatch전달 with action
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToDo: text => dispatch(actionCreators.addItem(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);