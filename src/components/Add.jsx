import React from "react";

export default function Add(props){

function handleInput(event){
 props.handleInputchange(event.target.value)
}

function addBtn(event){
  event.preventDefault()
  props.handleAdd()
}

return(<> 

 <form className="row g-3 form-add">
  <div className="col-auto">
    <input onChange={handleInput} value={props.value} type="text"  className="form-control" placeholder="Add"/>
  </div>
  <div className="col-auto">
    <button onClick={addBtn} type="submit" className="btn btn-primary">Add</button>
  </div>
</form>
    </>)
}