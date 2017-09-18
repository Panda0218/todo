import React from 'react';
const ENTER_KEY=13;
export default class TodoHeader extends React.Component{
  handleKeyDown=(event)=>{
    if(event.keyCode===ENTER_KEY&&event.target.value.length>0){
      let title=event.target.value;
      this.props.addTodo({title:event.target.value});
      event.target.value='';
    }
  }
  render(){
    return(
        <div className="form-group">
          <input autoFocus={true} type="text" className="form-control" onKeyDown={this.handleKeyDown} />
        </div>
    )
  }
}