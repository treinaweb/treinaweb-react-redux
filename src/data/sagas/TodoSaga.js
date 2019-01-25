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

export default function* TodoSaga(){
    yield all([
        watchListAll()
    ])
}