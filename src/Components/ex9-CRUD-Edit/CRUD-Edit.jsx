import React, {useState} from "react";
import "./CRUD-Edit.css";

function EditOperation(){

    const [items, editItem] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [isEditing, setIsEditing] = useState(false);
    const [itemIndex, currentIndex] = useState(null);
    const [editedItem, setEditedItem] = useState('');
    
    function editSelectedItem(index){
        console.log("editing item");
        setEditedItem(items[index]);
        currentIndex(index);
        setIsEditing(true);
    }

    function handleNewValue(event){
        setEditedItem(event.target.value);
    }

    function handleSaveNewValue(){
        const updatedArray = [...items];
        
        updatedArray[itemIndex] = editedItem;

        editItem(updatedArray);
        console.log(items);
        currentIndex(null);
        setIsEditing(false);
    }

    return(
        <div>
            {items.map((element, index)=>(
                <li className="row" key={index}>{
                    isEditing && itemIndex === index?(
                    <>
                        <input
                            type="text"
                            value = {editedItem}
                            onChange = {handleNewValue}
                        >
                        </input>
                         <button onClick={()=>handleSaveNewValue()}>
                                <>Save</>
                        </button>
                    </>
                    ):(
                    <div>
                        {element}
                    </div>
                    )
                }
                    <button onClick={()=>editSelectedItem(index)}>
                        <>Edit</>
                    </button>
                </li>
            ))}
        </div>
    )
}
export default EditOperation;