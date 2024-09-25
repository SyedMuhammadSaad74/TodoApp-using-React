import { useEffect } from "react";

function TodoInput({onChange , onClick , value}){

 
return(
    <div className='my-3'>
        <input
        onChange={onChange}
        className="border rounded-sm p-2"
        placeholder="Add Todo"
        value={value}
        
        />
  
    <button
    onClick={onClick}
    disabled ={value === ""}
    style ={{backgroundColor : value === "" && "gray"  }}
    className='p-2 ml-2 rounded-sm bg-teal-200'>ADD</button>
  </div>
)
}
export default TodoInput;