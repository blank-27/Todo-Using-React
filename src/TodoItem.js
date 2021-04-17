import React,{Component} from 'react'
import './TodoItem.css'
let todotex="" 
const styles={
    textDecoration:'line-through',
};
class TodoItem extends Component
{
createTasks(todo)
{
    return <li>{todo.text}</li>
}

render()
{
   var todos=this.props.todos
   var finaldisp=todos.map(this.createTasks)
    return(
        <div className="Todo-Area">
            <ul>
                {finaldisp}
            </ul>  
        </div>
    )
}

}
export default TodoItem;