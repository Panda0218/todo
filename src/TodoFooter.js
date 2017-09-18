import React from 'react';
import * as filterTypes from './filter-types';
export default class TodoFooter extends React.Component{
  handleRemoveCompleted=()=>{
    this.props.removeCompleted();
  }
  render(){
    return(
      <div className="row">
        <div className="col-xs-4">
          {this.props.undoCount>0?<a href="#" style={{textDecoration:'none'}}>您还有 <span className="badge">{this.props.undoCount}</span>件待办</a>:null}
        </div>
        <div className="col-xs-4 text-center">
          <button className={`btn btn-xs ${this.props.filterType===filterTypes.ALL?'btn-success':'btn-default'}`} style={{marginRight:5,outline:'none'}} onClick={()=>this.props.changeFilterType(filterTypes.ALL)}>全部</button>
          <button className={`btn btn-xs ${this.props.filterType===filterTypes.UNDO?'btn-success':'btn-default'}`} style={{marginRight:5,outline:'none'}} onClick={()=>this.props.changeFilterType(filterTypes.UNDO)}>未完成</button>
          <button className={`btn btn-xs ${this.props.filterType===filterTypes.COMPLETED?'btn-success':'btn-default'}`} style={{outline:'none'}} onClick={()=>this.props.changeFilterType(filterTypes.COMPLETED)}>已完成</button>
        </div>
        <div className="col-xs-4 text-center">
          {this.props.completedCount>0?<button className="btn btn-xs btn-danger" style={{outline:'none'}} onClick={this.handleRemoveCompleted}>删除已完成的</button>:null}
        </div>
      </div>
  )
  }
}