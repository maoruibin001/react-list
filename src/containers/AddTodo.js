import React from 'react';
import {addTodo} from '../actions';
import {connect} from 'react-redux';
import Form from '../components/Form'

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (text) => {
            dispatch(addTodo(text));
        }
    }
}


const AddTodo = connect(
    null,
    mapDispatchToProps
)(Form);

export default AddTodo;
