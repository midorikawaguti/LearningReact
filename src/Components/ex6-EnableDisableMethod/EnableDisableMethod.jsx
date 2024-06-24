import React, { useState } from "react";
import "./EnableDisableMethod.css";

function EnableDisableMethod({name}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick(){
    setIsEditing((editing) => !editing);
  }

    function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

let editablePlayerName = <span className="player-name">{playerName}</span>;
  
if (isEditing){
    editablePlayerName = <input className="edit" 
      type="text" 
      required 
      value={playerName} 
      onChange={handleChange} />
  }

  return (
<div className="text-box">
  <span className="player">
      {editablePlayerName}
  </span>
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
</div>
        
  );
}

export default EnableDisableMethod;