import React,{Component} from 'react'
import './TodoItem.css' 
let styles;
class TodoItem extends Component
{
constructor()
{
    super()
    this.state={
        flag:false
    }
    this.clickHandler=this.clickHandler.bind(this)
}

clickHandler(e)
{
    if(this.state.flag===false)
    {
      styles={
          textDecoration:'line-through'
      }
    }
    else
    {
        styles={
           
        } 
    }
    this.setState((prevState)=>{
        return{
            flag:!prevState.flag
        }
    })
}
createTasks(item)
{
    return( <li  className="list-item" key={item.key}>
        <p style={styles}>{item.text}</p></li>)
}

render()
{
   var todos=this.props.entries
   var listItems=todos.map(this.createTasks)
    return(
        
            <ul className="display-lists">
                <input type="checkbox" checked={this.state.flag} onChange={this.clickHandler} ></input>
                {listItems}
            </ul>  
        
    )
}

}
export default TodoItem;