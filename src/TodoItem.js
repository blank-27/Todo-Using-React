import React,{Component} from 'react'
import './TodoItem.css' 
import Aux from "./AuxReact";

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
    this.createTasks=this.createTasks.bind(this)
    
}

clickHandler(e)
{
    // if(this.key==props.key){        
        if(this.state.flag===false)
        {
            styles={
                textDecoration:'line-through'
            }
        }else
        {
            styles={
            
            } 
        }
    // }
    // console.log(prop)

    this.setState((prevState)=>{
        return{
            flag:!prevState.flag
        }
    })
}
createTasks(item)
{
    return(
            <li  className="list-item" key={item.key}>
                <input type="checkbox"  checked={this.state.flag} onChange={this.clickHandler} ></input>
                <p style={styles}>{item.text}</p>
            </li>            
    )
}

render()
{
    var todos=this.props.entries
    // var listItems=todos.map(this.createTasks)

    let listItems = null;

    listItems = (
        <Aux>
            {todos.map((item) => {     
                return(
                    <li  className="list-item" key={item.key}>
                        <input type="checkbox"  checked={this.state.flag} onChange={this.clickHandler} ></input>
                        <p style={styles}>{item.text}</p>
                    </li>  
                )      
            })}

        </Aux>
    )

    console.log(this.props)
    


    return(
        
            <Aux>
                {listItems}
            </Aux>
    )
}

}
export default TodoItem;