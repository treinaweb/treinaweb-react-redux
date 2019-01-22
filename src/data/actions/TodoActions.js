export const TODO_CREATE = 'TODO_CREATE';
export const TODO_UPDATE = 'TODO_UPDATE';
export const TODO_REMOVE = 'TODO_REMOVE';
export const TODO_CLEAR = 'TODO_CLEAR';

export const create = (description) => {
    return {
        type: TODO_CREATE,
        description
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
