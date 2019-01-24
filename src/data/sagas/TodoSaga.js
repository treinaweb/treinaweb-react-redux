import { all } from 'redux-saga/effects';

export function* hello(){
    console.log('HELLO');
}

export default function* TodoSaga(){
    yield all([
        hello()
    ])
}