import { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'


class App extends Component {
 constructor()
 {
   super()
   this.state={
     todotext: []
   }
  
   this.addItem=this.addItem.bind(this)
   
 }
 addItem(event)
 {
   let newtext;
   if(this._inputElement.value!=="")
   {
     newtext=this._inputElement.value;
   
   this.setState(prevState=>{
     return(
       {
         todotext:prevState.todotext.concat(newtext)
       }
     )
   })
   this._inputElement.value = "";
  }
   event.preventDefault();
 }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          Todo-List
    </header>   
         <form onSubmit={this.addItem}   className="Input-todo">
         <input className="todo-input" type="text" ref={(a) => this._inputElement = a}   onChange={this.change} placeholder="Enter your Todos here" ></input>
         <button className="todo-btn"  onClick={this.clickHandler} type="submit">Add</button>
          
         </form>

          
        <div className="display-todo">
         <TodoItem todos={this.state.todotext}/>
        </div>
      </div>
    );
  }
  inputtxt=document.querySelector('todo-input')
 
}

export default App;
