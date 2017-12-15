
export const ADD_TO_DO_CHANGED = "ADD_TO_DO_CHAGED";

export const SAVE_NEW_TO_DO = "SAVE_NEW_TO_DO";

export const TOGGLE_STATUS = "TOGGLE_STATUS";


export function addTodoChanged(value){
    return {
        type: ADD_TO_DO_CHANGED,
        value: value
    };
}

export function saveNewTodo(){
    return {
        type: SAVE_NEW_TO_DO  
    };
}

export function toggleStatus(id){
    return {
        type: TOGGLE_STATUS,
        id: id
    };
}