import {TOGGLE_STATUS, ADD_TO_DO_CHANGED, SAVE_NEW_TO_DO} from "./actions";

export default function todoListApp(state, action) {
    let modifiedState = Object.assign({}, state);
    
    let todoList = modifiedState.todoList.slice(); //need to add .slice() to keep immutability
    let newTodoItem = {};
    const idCounter = todoList[todoList.length-1].id;
    
    switch(action.type) {     
        case ADD_TO_DO_CHANGED:
            modifiedState = Object.assign({}, modifiedState, {"addTodoValue" : action.value});
            break;

        case SAVE_NEW_TO_DO:
            newTodoItem.id = idCounter+1;
            newTodoItem.key = idCounter+1;
            newTodoItem.text = modifiedState.addTodoValue;
            newTodoItem.status = 0;
            todoList.push(newTodoItem);
            modifiedState = Object.assign({}, modifiedState, {todoList, "addTodoValue" : ""});    
            break;
        case TOGGLE_STATUS:
            for (let i = 0; i < todoList.length; i++) {
                let todo = todoList[i];
                let id = action.id;
                if (todo.id == id) {
                    todo.status = (todo.status) ? 0 : 1;
                    break;
                }
            }
            modifiedState = Object.assign({}, modifiedState, {todoList});
            break;

        default:
            return state;          
    }
    return modifiedState;
}