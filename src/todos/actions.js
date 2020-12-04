export const CREATE_TODO = 'CREATE_TODO';
//Action Creator Function
export const createTodo = text =>({
    type: CREATE_TODO,
    payload : {text}
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text =>({
    type : REMOVE_TODO,
    payload: {text}
});

export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETE';
export const markAsCompleted = text =>({
    type: MARK_AS_COMPLETED,
    payload: {text}
});