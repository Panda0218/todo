import React from 'react';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import * as filterTypes from './filter-types';

export default class TodoApp extends React.Component{
  constructor (props){
    super(props);
    this.state={
      filterType:filterTypes.ALL
    };//初始化状态
  }
  //过滤器
  changeFilterType=(filterType)=>{
    this.setState({filterType});
  }
  render(){
    let todos=this.props.model.todos;
    let undoCount=todos.reduce((count,todo)=>count+(todo.completed?0:1),0);//未完成的待办事件数目
    let completedCount=todos.length-undoCount;//已完成的待办事项数目
    let showTodos=todos.filter((todo)=>{
      switch (this.state.filterType){
        case filterTypes.UNDO:
          return !todo.completed;
        case filterTypes.COMPLETED:
          return todo.completed;
        default:
          return true;
      }
    });
    console.log(showTodos);
    let main=(
      <ul className="list-group">
        {showTodos.length>0?<li className="list-group-item">
          <input style={{marginRight:20}} type="checkbox" checked={undoCount===0} onChange={this.props.model.toggleAll}/>全选
        </li>:null}
        {showTodos.map((todo,index)=>
          <TodoItem
            key={index}
            todo={todo}
            toggle={this.props.model.toggle}
            remove={this.props.model.remove}
          >
        </TodoItem>)}
      </ul>
    )
    return(
      <div className="container" style={{marginTop:20}}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <TodoHeader addTodo={this.props.model.addTodo}/>
              </div>
              <div className="panel-body">
                {main}
              </div>
              <div className="panel-footer">
                <TodoFooter
                  undoCount={undoCount}
                  changeFilterType={this.changeFilterType}
                  removeCompleted={this.props.model.removeCompleted}
                  filterType={this.state.filterType}
                  completedCount={completedCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}