import * as TodoConstants from '../actions/TodoActions';

const TodoReducer = (todoList = [], action) => {
    switch(action.type){
        case TodoConstants.TODO_CREATE:
            return [
                ...todoList,
                {
                    id: Date.now(),
                    isChecked: false,
                    description: action.description
                }
            ]
        default: return todoList;
    }
}

export default TodoReducer;