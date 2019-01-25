import * as TodoActions from '../actions/TodoActions';
import { TodoService } from '../services/TodoService';

import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';


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

export default function* TodoSaga(){
    yield all([
        watchListAll(),
        watchCreate(),
        watchRemove()
    ])
}