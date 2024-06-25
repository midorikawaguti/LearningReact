import React, {useState} from 'react';
import "./CRUD-Delete.css";

function DeleteOperation(){
    const [items, deleteItem] = useState(['Item 1', 'Item 2', 'Item 3']); 

    function deleteSelectedItem(index){
        deleteItem(items.filter((_,i)=> i !== index)); 
        console.log(items);
    }

    return(
    <div>
        <span>
            <ul>
                {items.map((element, index)=>(
                    <li key={index}>
                        <div className='list'>{element}</div>
                        <button onClick={()=>deleteSelectedItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </span>
    </div>
)
}
export default DeleteOperation;