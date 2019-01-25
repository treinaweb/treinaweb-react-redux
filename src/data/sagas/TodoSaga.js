import * as TodoActions from '../actions/TodoActions';
import { TodoService } from '../services/TodoService';

import { all, put, takeEvery, takeLatest, select } from 'redux-saga/effects';


function* listAll(){
    const todoList = yield TodoService.list();
    yield put(TodoActions.listResponse(todoList))
}

function* watchListAll(){
    yield takeLatest(TodoActions.TODO_LIST, listAll);
}

function* create({description}){
    const newItem = yield TodoService.create({
        description,
        isChecked: false
    });
    yield put(TodoActions.createResponse(newItem));
}

function* watchCreate(){
    yield takeEvery(TodoActions.TODO_CREATE, create)
}

function* remove({id}){
    TodoService.remove(id);
}

function* watchRemove(){
    yield takeEvery(TodoActions.TODO_REMOVE, remove);
}

function* clear(){
    const state = yield select(),
        todoList = state.TodoReducer;

    const newTodoList = todoList.filter(item => !item.isChecked),
        toRemove = todoList.filter(item => item.isChecked);
        
    toRemove.forEach(item => TodoService.remove(item.id) )

    yield put(TodoActions.listResponse(newTodoList))
}

function* watchClear(){
    yield takeLatest(TodoActions.TODO_CLEAR, clear);
}

function* update({item}){
    TodoService.update(item);
}

function* watchUpdate(){
    yield takeEvery(TodoActions.TODO_UPDATE, update)
}

export default function* TodoSaga(){
    yield all([
        watchListAll(),
        watchCreate(),
        watchRemove(),
        watchClear(),
        watchUpdate()
    ])
}