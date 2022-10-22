import React from 'react'
import {Todoitem} from"./Todoitem";
export const Todos = (props) => {
  let sty={
    minheight:"70vh"
  }
  return (
    <div className="container my-3" style={sty}>
      <h3>Todos List</h3>
      {props.todos.length===0?"No todos to display":
      props.todos.map((todo)=>{
          return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
      }
      
      
    </div>
  )
}
