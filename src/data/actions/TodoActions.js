import { TodoService } from '../services/TodoService';

export const TODO_LIST = 'TODO_LIST';
export const TODO_LIST_RESPONSE = 'TODO_LIST_RESPONSE';
export const TODO_CREATE = 'TODO_CREATE';
export const TODO_CREATE_RESPONSE = 'TODO_CREATE_RESPONSE';
export const TODO_UPDATE = 'TODO_UPDATE';
export const TODO_REMOVE = 'TODO_REMOVE';
export const TODO_CLEAR = 'TODO_CLEAR';

export const list = () => {
    return {
        type: TODO_LIST,
    }
}

export const listResponse = (todoList) => {
    return {
        type: TODO_LIST_RESPONSE,
        todoList
    }
}

export const create = (description) => {
    return {
        type: TODO_CREATE,
        description
    }
}
export const createResponse = (newItem) => {
    return {
        type: TODO_CREATE_RESPONSE,
        newItem
    }
}
export const update = (item) => {
    return {
        type: TODO_UPDATE,
        item
    }
}
export const remove = (id) => {
    return {
        type: TODO_REMOVE,
        id
    }
}
export const clear = () => {
    return {
        type: TODO_CLEAR
    }
}
