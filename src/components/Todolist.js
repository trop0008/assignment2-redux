import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { connect } from "react-redux";

/*
export default class Todolist extends Component {
    render() {
        const todos = this.props.todos.map((item) => {
            return (
                <Todo {...item} onClick={this.props.onTodoClick} />
            )
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

Todolist.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired
};
*/
class Todolist extends Component {
    render() {
        const todos = this.props.todos.map((item) => {
            return (
                <Todo {...item} />
            );
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        todos: state.todoList
    };
}

export default connect(mapStateToProps)(Todolist);