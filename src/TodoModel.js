export default class TodoModel {
  constructor (){
    //向localStorage里面写入的时候的key
    this.STORE_KEY='todos';
    this.todos=localStorage.getItem(this.STORE_KEY)?JSON.parse(localStorage.getItem(this.STORE_KEY)):[];//存放所有的待办事项
    //注册监听器，当模型数据发生变化后就会调用下面的监听函数
    this.listeners=[];
  }
  //  订阅
  subscribe(listener){
    this.listeners.push(listener);
  }
  emit(){
    this.listeners.forEach(listener=>listener());
  }
  //添加一条待办事项
  addTodo=(todo)=>{
    todo=Object.assign({},{id:Math.random(),completed:false},todo);
    let todos=this.todos;
    todos.push(todo);
    localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
    this.emit();
  }
  //删除一条待办事项
  remove=(id)=>{
    let todos=this.todos;
    let index=todos.findIndex(todo=>todo.id===id);
    todos.splice(index,1);
    localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
    this.emit();
  }
  //改变选中状态
  toggle=(id)=>{
    let todos=this.todos;
    this.todos=todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    });
    localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
    this.emit();
  }
  //改变全选状态
  toggleAll=(e)=>{
    let checked=e.target.checked;
    let todos=this.todos;
    this.todos=todos.map(todo=>{
      todo.completed=checked;
      return todo;
    });
    localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
    this.emit();
  }
  //删除已完成的待办事项
  removeCompleted=()=>{
    let todos=this.todos;
    this.todos=todos.filter(todo=>!todo.completed);
    localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
    this.emit();
  }
}