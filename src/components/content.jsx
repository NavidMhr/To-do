import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri"; 


export default function Content(props){


    function deleteBtn(){
        props.handleDelete()
    }
    function FinidhedBtn(){
        props.handleDone()
    }
    


    return(<>
    
    <ul className="ul">
        <li className="list-li">
          <span className={ props.done ? "list-name" : ''}>{props.name}</span>
            <div>
            <button onClick={FinidhedBtn} className="btn  btn-outline-success">Done</button>
            <button onClick={deleteBtn} className="btn mx-3 btn-outline-danger"> <RiDeleteBin6Line/>  </button>
            </div>
        </li>
    </ul>
    
    </>)
}