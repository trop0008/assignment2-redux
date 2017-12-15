import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

/*
export default class AddNewTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add New Todo" />
                <button className="add" onClick={this.props.saveNewTodo}>➕</button>
            </div>
        )
    }
}

AddNewTodo.propTypes = {
    addTodoValue: PropTypes.string,
    addTodoChanged: PropTypes.func.isRequired,
    saveNewTodo: PropTypes.func.isRequired
};
*/

class AddNewTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add New Todo" />
                <button className="add" onClick={this.props.saveNewTodo}>➕</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        addTodoValue: state.addTodoValue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoChanged : (e) => dispatch(actions.addTodoChanged(e.target.value)),
        saveNewTodo    : () => dispatch(actions.saveNewTodo())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddNewTodo);