import React from 'react';
export default class TodoItem extends React.Component{
  handleRemove=()=>{
    this.props.remove(this.props.todo.id);
  }
  handleToggle=()=>{
    this.props.toggle(this.props.todo.id);
  }
  render(){
    let todo=this.props.todo;
    return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-md-1">
            <input type="checkbox" checked={todo.completed} onChange={this.handleToggle}/>
          </div>
          <div className="col-md-10" style={{textDecoration:todo.completed?'line-through':''}}>
            {todo.title}
          </div>
          <div className="col-md-1">
            <button className="btn btn-danger btn-xs" onClick={this.handleRemove}>X</button>
          </div>
        </div>
      </li>
    )
  }
}