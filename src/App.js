import { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'
class App extends Component {
 constructor(props)
 {
   super(props)
   this.state={
     items: []
   }
  
   this.addItem=this.addItem.bind(this)
   
 }
 addItem(event)
 {
  
   if(this._inputElement.value!=="")
   {
     var newItem={
      text:this._inputElement.value,
      key:Date.now()
     }
     this.setState((prevState)=>{
       return{
         items:prevState.items.concat(newItem)
       }
     })

  
   this._inputElement.value = "";
  }
   event.preventDefault();
 }
  render(){
    return (
      <div className="App">
        <div className="first">
        <header className="App-header">
          Todo-List
    </header>   
         <form onSubmit={this.addItem}   className="Input-todo">
         <input className="todo-input" type="text"  ref={(a) => this._inputElement = a}  placeholder="Enter your Todos here" ></input>
         <button className="todo-btn" type="submit">Add</button>
          
         </form>
         </div>
         <TodoItem entries={this.state.items}/>
        
      </div>
    );
  }
  
 
}

export default App;
