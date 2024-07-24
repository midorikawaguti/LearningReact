

export const LEARN_CONCEPTS = {
  ex1: {
    title: "Simple Counter",
    description: [
      "Use the useState hook to manage the counter state.",
      "Implement two functions (increment and decrement) to increase and decrease the counter.",
      "Display the current counter value and provide buttons to increment and decrement the counter.",
    ],
    images: [],
    concepts:["useState"],
    codeSnippet: [`
       import React, { useState } from "react";
       import "./Counter.css";

       function Counter() {
         const [count, setCount] = useState(0);

         const increment = () => {
           setCount(count + 1);
         };

         const decrement = () => {
           setCount(count - 1);
         };

         return (
           <div className="counter">
             <h1>Counter: {count}</h1>
             <button onClick={increment}>Increment</button>
             <button onClick={decrement}>Decrement</button>
           </div>
         );
       }

       export default Counter;`]

  },
  ex2: {
    title: "Toggle Text",
    description: [
      "Use the useState hook to manage the visibility state of the text.",
      "Implement a function to toggle the visibility state.",
      "Conditionally render a piece of text based on the visibility state.",
      "Provide a button to toggle the visibility of the text.",
      "The ternary operator is a shorthand for an if-else statement. It has the form (condition ? exprIfTrue : exprIfFalse)."
    ],
    images: [],
    concepts:["useState"],
    codeSnippet:[`
    import React, { useState } from "react";
    import "./ChangeVisibility.css";

    function ChangeVisibility() {
      const [isVisible, setIsVisible] = useState(true);

      function toggleVisibility() {
        setIsVisible((visible) =>!isVisible);
      };
      return (
        <div className="toggle-text">
          <div>
            {isVisible && <p>Text is visible!</p>}
          </div>
          <button onClick={toggleVisibility}>
            {isVisible ? 'Hide Text' : 'Show Text'}
          </button>
        </div>
      );
    }
    export default ChangeVisibility;`
  ]
  },
  ex3: {
    title: "Simple Form",
    description: [
      "Use the useState hook to manage the form input state.",
      "Implement functions to handle input changes and form submission.",
      "Display an alert with the input value when the form is submitted.",
    ],
    images: [],
    concepts:["useState"],
    codeSnippet: [`
      import React, { useState } from "react";
      import "./Form.css";

      function Form() {
        const [inputValue, setInputValue] = useState("");

        const handleChange = (event) => {
          setInputValue(event.target.value);
        };

        const handleSubmit = (event) => {
          event.preventDefault();
          alert(\`Form submitted with input: \${inputValue}\`);
        };

        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Type something..."
            />
            <button type="submit">Submit</button>
          </form>
        );
      }

      export default Form;`]
  },
  ex4: {
    title: "To Do List",
    description: [
      "Use the useState hook to manage the list of todos and the current input value.",
      "Implement functions to handle input changes and form submission.",
      "Add new todos to the list and display the list of todos.",
      "Clear the input field after adding a todo.",
    ],
    images: [],
    concepts:["useState"],
    codeSnippet: [`
      import React, { useState } from "react";
      import "./ToDo.css";

      function ToDo() {
        const [todos, setTodos] = useState([]);
        const [newTodo, setNewTodo] = useState("");
        const [isEditing, setIsEditing] = useState(false);
        const [currentIndex, setCurrentIndex] = useState(null);
        const [editTodo, setEditTodo] = useState("");

        const handleChange = (event) => {
          setNewTodo(event.target.value);
        };

        const handleSubmit = (event) => {
          event.preventDefault();
          if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
          }
        };

        const handleEditClick = (index) => {
          setIsEditing(true);
          setCurrentIndex(index);
          setEditTodo(todos[index]);
        };

        const handleSaveClick = () => {
          const updatedTodos = [...todos];
          updatedTodos[currentIndex] = editTodo;
          setTodos(updatedTodos);
          setIsEditing(false);
          setCurrentIndex(null);
          setEditTodo("");
        };

        const handleTaskChange = (event) => {
          setEditTodo(event.target.value);
        };

        return (
          <div className="todo-list">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newTodo}
                onChange={handleChange}
                placeholder="Add a new todo"
              />
              <button type="submit">Add</button>
            </form>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                  {isEditing && currentIndex === index ? (
                    <input
                      type="text"
                      value={editTodo}
                      onChange={handleTaskChange}
                    />
                  ) : (
                    <span>{todo}</span>
                  )}
                  {isEditing && currentIndex === index ? (
                    <button onClick={handleSaveClick}>Save</button>
                  ) : (
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      }

      export default ToDo;

      `]
  },
  ex5: {
    title: "Fetch API Data",
    description: [
      "Use the useState hook to manage the fetched data.",
      "Use the useEffect hook to fetch data from the API when the component mounts.",
      "Display the fetched data in a list format.",
    ],
    images: [],
    concepts:["useState"],
    codeSnippet:[`
      import React, { useState, useEffect } from "react";
      import "./FetchAPI.css";

      function FetchAPI() {
        const [data, setData] = useState([]);

        useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setData(data));
        }, []);

        return (
          <div className="api-data">
            <h1>Fetched Data</h1>
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        );
      }

      export default FetchAPI;`]
  },
    ex6: {
    title: "Enable/ Disable",
    description: [
      "Add a function that's triggered when the <button> is clicked.",
      "Change isEditing to true in that function.",
    ],
    images: [],
    concepts:["useState"],
    codeSnippet:[`
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

      export default EnableDisableMethod;`]
  },

   ex7: {
    title: "CRUD - Create Operation",
    description: [
      "Use useState hook to manage the new items added to the list and the input field.",
    ],
    images: [],
    concepts:["useState", "spread operator '...'"],
    codeSnippet:[`
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
      export default CreateOperation;`]
  },

     ex8: {
    title: "CRUD - Delete Operation",
    description: [
      "Use useState hook to manage deleted items.",
    ],
    images: [],
    concepts:["useState", "filter method"],
    codeSnippet:[`
      import React, {useState} from 'react';
      import "./CRUD-Delete.css";

      function DeleteOperation(){
          const [items, deleteItem] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']); 

          function deleteSelectedItem(index){
              deleteItem(items.filter((_,i)=> i !== index)); 
              console.log(items);
          }

          return(
          <div>
              <ul>
                  {items.map((element, index)=>(
                      <li key={index}>
                          <div className='list'>{element}</div>
                          <button onClick={()=>deleteSelectedItem(index)}>Delete</button>
                      </li>
                  ))}
              </ul>
          </div>
      )
      }
      export default DeleteOperation;
      `]
  },
     ex9: {
    title: "CRUD - Edit Operation",
    description: [
      "Use useState hook to manage edited items.",
    ],
    images: [],
    concepts:["useState"],
    codeSnippet:[`
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
      export default EditOperation;`]
  },
      ex10: {
    title: "Temperature Conveter",
    description: [
      "By lifting the state up to the parent component, both child components can share and synchronize their state through props, allowing the application to keep the temperature values in sync between Celsius and Fahrenheit.",
    ],
    images: [],
    concepts:["useState"],
    codeSnippet:[`
    import React, { useState } from 'react';
    import CelsiusInput from './Celsius.jsx';
    import FahrenheitInput from './Fahrenheit.jsx';

    function toCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    }

    function toFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }

    function TemperatureConverter() {
      const [temperature, setTemperature] = useState('');
      const [scale, setScale] = useState('c');

      function handleCelsiusChange(temperature) {
        setTemperature(temperature);
        setScale('c');
      }

      function handleFahrenheitChange(temperature) {
        setTemperature(temperature);
        setScale('f');
      }

      const celsius =
        scale === 'f' ? toCelsius(parseFloat(temperature)) : temperature;
      const fahrenheit =
        scale === 'c' ? toFahrenheit(parseFloat(temperature)) : temperature;

      return (
        <div>
          <CelsiusInput
            temperature={scale === 'c' ? temperature : celsius}
            onTemperatureChange={handleCelsiusChange}
          />
          <FahrenheitInput
            temperature={scale === 'f' ? temperature : fahrenheit}
            onTemperatureChange={handleFahrenheitChange}
          />
        </div>
      );
    }
    export default TemperatureConverter;
`,
  `import React from 'react';

  export default function CeulsiusInput({temperature, onTemperatureChange}){
      return(
          <fieldset>
              <legend> Celsius: </legend>
              <input
                  value={temperature}
                  onChange={(e) => onTemperatureChange(e.target.value)}>
              </input>
          </fieldset>
      )
  }`, 
  `import React from 'react';

    export default function FahrenheitInput({temperature, onTemperatureChange}){
        return(
            <fieldset>
                <legend> Fahrenheit: </legend>
                <input
                    value={temperature}
                    onChange={(e) => onTemperatureChange(e.target.value)}>
                </input>
            </fieldset>
        )
    }`]
  },
   ex11: {
    title: "Grid Based drawing",
    description: [
      "Each cell in the grid can be toggled between two states - filled or empty.",
    ],
    images: [],
    concepts:["useState"],
    codeSnippet:[`
      import { useState } from 'react';
      import Grid from './Grid.jsx';

      function SimpleDrawing() {
        const initialGrid = [
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false]
        ];

        const [grid, setGrid] = useState(initialGrid);

        function handleToggleCell(rowIndex, colIndex) {
          setGrid((prevGrid) => {
            const newGrid = prevGrid.map((row, rIndex) => 
              row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? !cell : cell))
            );
            return newGrid;
          });
        }

        return (
          <main>
            <Grid grid={grid} onToggleCell={handleToggleCell} />
          </main>
        );
      }

      export default SimpleDrawing;
      `,
   `import React from "react";
    import "./SimpleDrawing.css";

    export default function Grid({ grid, onToggleCell }) {
      return (
        <table>
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={\`grid \${cell ? 'active' : ''}\`} // Apply active class if cell is true
                    onClick={() => onToggleCell(rowIndex, colIndex)}
                  >
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }`]
  },

    ex12: {
  title: "Accordion",
  description: [
      "React Project Tutorial - freeCodeCamp",
    ],
    images: [],
    concepts:["useState", "Logical AND (&&) Operator", "Array Methods: map/ join"],
    codeSnippet:[`
      import React, { useState } from 'react';
      import "./Accordion.css";
      import { LEARN_CONCEPTS } from '../../data';

      export default function Accordion(){
          const [selected, setSelected] = useState(null);

          // takes a parameter getTitle and sets the state variable selected to this value.
      function selectItem(getTitle) {
          setSelected(prevSelected => (prevSelected === getTitle ? null : getTitle));
          // The ternary operator is used to toggle the selected state. If the item is already selected, 
          // clicking it again will deselect it (null). If the item is not selected, clicking it will select 
          // it (getTitle)
          console.log(getTitle);
      }
          return (
              <div className='wrapper'>
                  <div className='accordian'>
                      {
                          LEARN_CONCEPTS && Object.keys(LEARN_CONCEPTS).length > 0 ?

                          (Object.values(LEARN_CONCEPTS).map(dataItem => {
                              //console.log(dataItem.title); 
                              return (
                                  <div className="item" key={dataItem.title}> 
                                      
                                      <div onClick={() => selectItem(dataItem.title)} className='title'>
                                          <h3>{dataItem.title}</h3>
                                      </div>

                                      {selected === dataItem.title && (
                                      <div className='content'>
                                          <div>{dataItem.description.join(", ")}</div>
                                      </div>
                                      )}

                                  </div>
                              );
                          })) :
                          <div>No data found!</div>
                      }
                  </div>
              </div>
          );
      }
`]
  }
};
