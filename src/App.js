import './App.css';
import Header from "./component/Header";
import {Todos} from "./component/Todos";
import {Footer} from "./component/Footer";
import { Addtodo } from './component/Addtodo';
import React,{useState} from 'react';

function App() {
  const onDelete=(todo)=>{
   console.log("delete",todo);
   setTodos(todos.filter((e)=>{
    return e!==todo;
   }));
  }
  const addTodo =(title,desc)=>{
    console.log("add")
    let sno;
    if(todos.length===0){sno=0;}
    else {sno=todos[todos.length-1].sno+1}
    const mytodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,mytodo]);
    console.log(mytodo);
  }
  const [todos,setTodos]=useState([]);
  return (
    <div className="App">
      <Header title="My Todo List" />
      <Todos todos={todos} onDelete={onDelete}/>
      <Addtodo addTodo={addTodo}/>
      <Footer/>

      
    </div>
  );
}

export default App;
