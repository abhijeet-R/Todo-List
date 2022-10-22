import React, { useState } from 'react'

export const Addtodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){alert("Title or Description cannot be empty")}
       else
       { props.addTodo(title,desc);
    setTitle("");
    setDesc("");}
    }
  return (
    <div className='container'>
        <form  onSubmit={submit}>
  <div className="mb-3">
    <label for="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">text description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
    </div>
  )
}
