import React, {useState} from "react";
import "./CRUD-Create.css";

function CreateOperation (){
    const [items, setNewItem] = useState([]);
    const [inputItem, inputField] = useState('');

    function createAndAddNewItem(){
        console.log("input item:", inputItem)
        setNewItem([...items, inputItem]);
        inputField(''); //Clear input field
        console.log(...items);

    }
    function handleItemTyped(event){
        inputField(event.target.value);
    }
    return(     
        <div>
            <input
                type="text"
                required
                value={inputItem}
                onChange={handleItemTyped}
                >
            </input>
            <button type="submit" onClick={createAndAddNewItem}>Submit</button>
            
            <span>
                <ul>
                    {items.map((x, index)=>(
                        <li key={index}>{x}</li>
                    ))}
                </ul>
            </span>
        </div>
    )
}
export default CreateOperation;