import React, { Component } from 'react';
import './App.css';

import ToDoList from './views/components/ToDoList';
import NewToDoItem from './views/components/NewToDoItem';

import * as TodoActions from './data/actions/TodoActions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(TodoActions.list());
  }

  render() {
    const { props } = this,
      { dispatch } = props;
    return (
      <div className="App">
        <NewToDoItem onAdd={(description) => { dispatch(TodoActions.create(description)) } } />
        <hr />
        <button className="tw-btn" onClick={() => { dispatch(TodoActions.clear())} } >Limpar</button>
        <hr />
        <ToDoList items={props.todoList} onRemove={(id) => { dispatch(TodoActions.remove(id))} } onUpdate={ (item) => {dispatch(TodoActions.update(item))} } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.TodoReducer
})

export default connect(mapStateToProps)(App);
