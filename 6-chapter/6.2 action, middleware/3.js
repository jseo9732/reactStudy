export const ADD = 'todo/ADD';
export const REMOVE = 'todo/REMOVE';
export const REMOVE_ALL = 'todo/REMOVE_ALL';

function addTodo({ title, priority }) {
    return { type: ADD, title, priority };
}
function removeTodo({ id }) {
    return { type: REMOVE, id };
}
function removeAllTodo() {
    return { type: REMOVE_ALL };
}