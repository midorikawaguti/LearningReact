
export const QUESTIONS = [
 {
    question:`What will the data state look like after updateUserAge(1, 26) is executed?`,

    questionCode: `
    const [data, setData] = useState({
    users: [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 }
    ]
    });

    function updateUserAge(id, newAge) {
    setData((prevData) => ({
        ...prevData,
        users: prevData.users.map(user =>
        user.id === id ? { ...user, age: newAge } : user
        )
    }));
    }

    updateUserAge(1, 26);
`,
    options: [`{
    users: [
        { id: 1, name: "Alice", age: 26 },
        { id: 2, name: "Bob", age: 30 }
    ]
    }`,
    "No change.", 
    `{
    users: [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 26 }
    ]
    }`,
     `{
    users: [
        { id: 1, name: "Alice", age: 30 },
        { id: 2, name: "Bob", age: 26 }
    ]
    }`
    ],
    answer: 0,
    concepts: ['useState', 'updating state with functional updates', 'mapping arrays']
  },
  {
    question: "What will be the output after clicking the button?",
    questionCode:`
    import React, { useState } from 'react';

    function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    }

    `,
    options: [`0`, `1`, `2`, `Undefined`],
    answer: 1,
    concepts:['useState', 'event handling', 'functional updates']
  },
    {
    question: "What will the gameBoard state look like after handleSquareClick(1, 1) is executed?",
    questionCode:`
    const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
    ];

    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const activePlayerSymbol = 'X';

    function handleSquareClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
        return updatedBoard;
    });
    }

    handleSquareClick(1, 1);
    `,
    options: [` 
        [[null, null, null],
        [null, 'X', null],
        [null, null, null]]`,
       `[[null, null, null],
        [null, null, null],
        [null, 'X', null]]`,
       `[[null, null, null],
        [null, null, 'X'],
        [null, null, null]]`,
      `No change`],
    answer: 0,
    concepts:['useState', 'updating nested state', 'mapping arrays']
  },
   {
    question: `What will be the value of playerName after clicking the "Save" button?`,
    questionCode:`
    const [playerName, setPlayerName] = useState("Player 1");
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
    setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
    setPlayerName(event.target.value);
    }

    // Assume the input field value is changed to "Alice" before clicking "Save"
    <input type="text" value={playerName} onChange={handleChange} />
    <button onClick={handleEditClick}>Save</button>
    `,
    options: [`Player 1`, `Alice`, `Player 2`, `Undefined`],
    answer: 1,
    concepts:['useState', 'controlled components', 'event handling']
  },
    {
    question: `What will be the selectedOptionIndex after selecting an option and clicking the "Next" button?`,
    questionCode:`
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

    function handleOptionChange(index) {
    setSelectedOptionIndex(index);
    }

    function handleSubmit() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOptionIndex(null);
    }

    // Assume option with index 2 is selected
    handleOptionChange(2);
    handleSubmit();

    `,
    options: [`0`, `1`, `2`, `Null`],
    answer: 3,
    concepts:['useState', 'state reset', 'event handling']
  },
   {
    question: `What will be the value of selected after clicking the "Toggle" button?`,
    questionCode:`
    const [selected, setSelected] = useState(false);

    function handleToggle() {
    setSelected(prevSelected => !prevSelected);
    }

    <button onClick={handleToggle}>Toggle</button>
    `,
    options: [`true`, `false`, `null`, `undefined`],
    answer: 0,
    concepts:['useState', 'toggle state']
  },
     {
    question: `What will the names state look like after addName("Charlie") is executed?`,
    questionCode:`
    const [names, setNames] = useState(["Alice", "Bob"]);

    function addName(newName) {
    setNames(prevNames => [...prevNames, newName]);
    }

    addName("Charlie");
    `,
    options: [`["Alice", "Bob"]`, `["Alice", "Bob", "Charlie"]`, `["Charlie", "Alice", "Bob"]`, `undefined`],
    answer: 1,
    concepts:['useState', 'adding to arrays']
  },
   {
    question: `What will be the output after clicking the button?`,
    questionCode:`
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
    setIsVisible(prev => !prev);
    }

    return (
    <div>
        {isVisible && <p>Visible</p>}
        <button onClick={toggleVisibility}>Toggle</button>
    </div>
    );
    `,
    options: [` <p>Visible</p> and "Toggle" button`, ` Only "Toggle" button`, `Error`, `undefined`],
    answer: 0,
    concepts:['useState', 'conditional rendering', 'event handling']
  },
  {
    question: `What will be the value of colors after executing updateColor(1, "blue")?`,
    questionCode:`
    const [colors, setColors] = useState(["red", "green", "yellow"]);

    function updateColor(index, newColor) {
    setColors(prevColors => {
        const updatedColors = [...prevColors];
        updatedColors[index] = newColor;
        return updatedColors;
    });
    }

    updateColor(1, "blue");
    `,
    options: [` ["red", "green", "yellow"]`, `["blue", "green", "yellow"]`, `["red", "blue", "yellow"]`, `undefined`],
    answer: 2,
    concepts:['']
  },
   {
    question: `What will be the value of user.age after executing handleAgeChange(35)?`,
    questionCode:`
    const [user, setUser] = useState({ name: "Alice", age: 25 });

    function handleAgeChange(newAge) {
    setUser(prevUser => ({
        ...prevUser,
        age: newAge
    }));
    }

    handleAgeChange(35);
    `,
    options: [` 25`, `30`, `35`, `undefined`],
    answer: 2,
    concepts:['']
  },

  {
    question: `What will be the output after rendering the NameList component?`,
    questionCode:`
    import React from 'react';

    const names = ["Alice", "Bob", "Charlie"];

    function NameList() {
    return (
        <ul>
        {names.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>
    );
    }

    export default NameList;
    `,
    options: [` 
        <ul>
        <li>Alice</li>
        <li>Bob</li>
        <li>Charlie</li>
        </ul>`,
        `<ul>
        <li>Alice, Bob, Charlie</li>
        </ul>`,
        `<ul>
        <li>name</li>
        <li>name</li>
        <li>name</li>
        </ul>`,
        ` No output`],
    answer: 0,
    concepts:['']
  },
  {
    question: `What does the map function do in JavaScript?`,
    questionCode: ``,
    options: [
      "It filters elements in an array based on a condition.",
      "It reduces an array to a single value.",
      "It transforms each element in an array according to a specified function and returns a new array.",
      "It sorts the elements of an array in place."
    ],
    answer: 2,
    concepts: ['map']
  },
  {
    question: `What will be the output of the following code?`,
    questionCode: `
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled);
    `,
    options: [
      "[1, 2, 3, 4]",
      "[2, 4, 6, 8]",
      "[1, 4, 9, 16]",
      "[0, 1, 2, 3]"
    ],
    answer: 1,
    concepts: ['map']
  },
  {
    question: `What is the return value of the map function when called on an array?`,
    questionCode: ``,
    options: [
      "The original array",
      "A new array with transformed elements",
      "A single value resulting from the transformations",
      "The length of the array"
    ],
    answer: 1,
    concepts: ['map']
  },
  {
    question: `What is the purpose of the callback function passed to map?`,
    questionCode: ``,
    options: [
      "To sort the elements of the array",
      "To filter elements from the array",
      "To perform a transformation on each element of the array",
      "To find a specific element in the array"
    ],
    answer: 2,
    concepts: ['map']
  },
  {
    question: `What will be the output of the following code?`,
    questionCode: `
    const fruits = ["apple", "banana", "cherry"];
    const uppercased = fruits.map(fruit => fruit.toUpperCase());
    console.log(uppercased);
    `,
    options: [
      `["APPLE", "BANANA", "CHERRY"]`,
      `["apple", "banana", "cherry"]`,
      `["Apple", "Banana", "Cherry"]`,
      `["apple", "banana", "cherry", "APPLE", "BANANA", "CHERRY"]`
    ],
    answer: 0,
    concepts: ['map']
  },
  {
    question: `What will be the output of the following code?`,
    questionCode: `
    const numbers = [1, 2, 3, 4, 5];
    const incremented = numbers.map((num, index) => num + index);
    console.log(incremented);
    `,
    options: [
      `[1, 2, 3, 4, 5]`,
      `[2, 3, 4, 5, 6]`,
      `[1, 3, 5, 7, 9]`,
      `[1, 3, 5, 7, 9]`
    ],
    answer: 1,
    concepts: ['map']
  },
  {
    question: `What will be the output of the following code?`,
    questionCode: `
    const strings = ["1", "2", "3"];
    const numbers = strings.map(str => parseInt(str));
    console.log(numbers);
    `,
    options: [
      `[1, 2, 3]`,
      `["1", "2", "3"]`,
      `[1, 2, 3, NaN]`,
      `[NaN, NaN, NaN]`
    ],
    answer: 0,
    concepts: ['map']
  },
  {
    question: `How can you use the map function to extract specific properties from objects in an array?`,
    questionCode: `
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 }
    ];
    `,
    options: [
      `const names = people.map(person => person.name);`,
      `const names = people.filter(person => person.name);`,
      `const names = people.reduce((acc, person) => acc.concat(person.name), []);`,
      `const names = people.sort((a, b) => a.name.localeCompare(b.name));`
    ],
    answer: 0,
    concepts: ['map']
  },
  {
    question: `What will be the output of the following code?`,
    questionCode: `
    const arr = [1, 2, 3, 4];
    const newArr = arr.map((num, index) => num * index);
    console.log(newArr);
    `,
    options: [
      `[0, 2, 6, 12]`,
      `[0, 2, 4, 6]`,
      `[0, 2, 6, 8]`,
      `[0, 1, 2, 3]`
    ],
    answer: 0,
    concepts: ['map']
  },
  {
    question: `What happens if the callback function passed to map does not return a value?`,
    questionCode: ``,
    options: [
      `The map function throws an error.`,
      `The map function skips that element.`,
      `The map function includes undefined for that element in the new array.`,
      `The map function includes the original element in the new array.`
    ],
    answer: 2,
    concepts: ['map']
  },
   {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n[2, 4, 6, 8, 10]`,
    options: [
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num * 2);`,
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num + 1);`,
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num * 3);`,
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num / 2);`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n["A", "B", "C"]`,
    options: [
      `const letters = ["a", "b", "c"];\nletters.map(letter => letter.toUpperCase());`,
      `const letters = ["A", "B", "C"];\nletters.map(letter => letter.toLowerCase());`,
      `const letters = ["x", "y", "z"];\nletters.map(letter => letter.toUpperCase());`,
      `const letters = ["a", "b", "c"];\nletters.map(letter => letter.toLowerCase());`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n["Alice: 25", "Bob: 30", "Charlie: 35"]`,
    options: [
      `const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Charlie", age: 35 }\n];\nusers.map(user => \`\${user.name}: \${user.age}\`);`,
      `const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Charlie", age: 35 }\n];\nusers.map(user => \`\${user.age}: \${user.name}\`);`,
      `const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Charlie", age: 35 }\n];\nusers.map(user => \`\${user.name} is \${user.age}\`);`,
      `const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Charlie", age: 35 }\n];\nusers.map(user => \`\${user.name} - \${user.age}\`);`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n["One", "Two", "Three"]`,
    options: [
      `const numbers = ["one", "two", "three"];\nnumbers.map(num => num.charAt(0).toUpperCase() + num.slice(1));`,
      `const numbers = ["one", "two", "three"];\nnumbers.map(num => num.toUpperCase());`,
      `const numbers = ["One", "Two", "Three"];\nnumbers.map(num => num.toLowerCase());`,
      `const numbers = ["one", "two", "three"];\nnumbers.map(num => num.toLowerCase());`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n[10, 20, 30, 40, 50]`,
    options: [
      `const numbers = [5, 10, 15, 20, 25];\nnumbers.map(num => num * 2);`,
      `const numbers = [10, 20, 30, 40, 50];\nnumbers.map(num => num / 2);`,
      `const numbers = [10, 20, 30, 40, 50];\nnumbers.map(num => num * 2);`,
      `const numbers = [5, 10, 15, 20, 25];\nnumbers.map(num => num * 4);`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n[1, 4, 9, 16, 25]`,
    options: [
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num * num);`,
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num + num);`,
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num - num);`,
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num / num);`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n["10", "20", "30"]`,
    options: [
      `const numbers = [10, 20, 30];\nnumbers.map(num => num.toString());`,
      `const numbers = [10, 20, 30];\nnumbers.map(num => num.toFixed());`,
      `const numbers = [10, 20, 30];\nnumbers.map(num => num.toString().concat('0'));`,
      `const numbers = [10, 20, 30];\nnumbers.map(num => (num + '0'));`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n[2, 3, 4, 5, 6]`,
    options: [
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num + 1);`,
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num - 1);`,
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num * 2);`,
      `const numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => num / 2);`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n["$1", "$2", "$3"]`,
    options: [
      `const prices = [1, 2, 3];\nprices.map(price => \`$\${price}\`);`,
      `const prices = [1, 2, 3];\nprices.map(price => \`\${price}$\`);`,
      `const prices = [1, 2, 3];\nprices.map(price => \`$ \${price}\`);`,
      `const prices = [1, 2, 3];\nprices.map(price => \`\${price} dollars\`);`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "Given the output below, what was the input array used in the map function?",
    questionCode: `Output:\n\njavascript\nCopy code\n["apple pie", "banana pie", "cherry pie"]`,
    options: [
      `const fruits = ["apple", "banana", "cherry"];\nfruits.map(fruit => \`\${fruit} pie\`);`,
      `const fruits = ["apple", "banana", "cherry"];\nfruits.map(fruit => \`pie \${fruit}\`);`,
      `const fruits = ["apple", "banana", "cherry"];\nfruits.map(fruit => \`pie-\${fruit}\`);`,
      `const fruits = ["apple", "banana", "cherry"];\nfruits.map(fruit => \`\${fruit}cake\`);`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "What will be the updatedUsers array after executing the updateUserAge function?",
    questionCode: `const users = [\n  { id: 1, name: "Alice", age: 25 },\n  { id: 2, name: "Bob", age: 30 },\n  { id: 3, name: "Charlie", age: 35 }\n];\n\nfunction updateUserAge(users, id, newAge) {\n  return users.map(user =>\n    user.id === id ? { ...user, age: newAge } : user\n  );\n}\n\nconst updatedUsers = updateUserAge(users, 2, 32);`,
    options: [
      `[\n  { id: 1, name: "Alice", age: 25 },\n  { id: 2, name: "Bob", age: 30 },\n  { id: 3, name: "Charlie", age: 35 }\n]`,
      `[\n  { id: 1, name: "Alice", age: 25 },\n  { id: 2, name: "Bob", age: 32 },\n  { id: 3, name: "Charlie", age: 35 }\n]`,
      `[\n  { id: 1, name: "Alice", age: 32 },\n  { id: 2, name: "Bob", age: 32 },\n  { id: 3, name: "Charlie", age: 32 }\n]`,
      `No change`
    ],
    answer: 1,
    concepts: []
  },
  {
    question: "What will be the output of the NumberList component?",
    questionCode: `import React from 'react';\n\nconst numbers = [1, 2, 3, 4, 5];\n\nfunction NumberList() {\n  return (\n    <ul>\n      {numbers.map(number => (\n        <li key={number}>{number * 2}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default NumberList;`,
    options: [
      `<ul>\n  <li>2</li>\n  <li>4</li>\n  <li>6</li>\n  <li>8</li>\n  <li>10</li>\n</ul>`,
      `<ul>\n  <li>1</li>\n  <li>2</li>\n  <li>3</li>\n  <li>4</li>\n  <li>5</li>\n</ul>`,
      `<ul>\n  <li>number * 2</li>\n  <li>number * 2</li>\n  <li>number * 2</li>\n  <li>number * 2</li>\n  <li>number * 2</li>\n</ul>`,
      `No output`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "What will be the value of colorsList after the following code is executed?",
    questionCode: `const colors = ["red", "green", "blue"];\nconst colorsList = colors.map(color => color.toUpperCase());`,
    options: [
      `["red", "green", "blue"]`,
      `["RED", "GREEN", "BLUE"]`,
      `["Red", "Green", "Blue"]`,
      `["rEd", "gReEn", "bLuE"]`
    ],
    answer: 1,
    concepts: []
  },
  {
    question: "What will be rendered by the FruitList component?",
    questionCode: `import React from 'react';\n\nconst fruits = ["Apple", "Banana", "Cherry"];\n\nfunction FruitList() {\n  return (\n    <ul>\n      {fruits.map((fruit, index) => (\n        <li key={index}>{fruit}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default FruitList;`,
    options: [
      `<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Cherry</li>\n</ul>`,
      `<ul>\n  <li>fruit</li>\n  <li>fruit</li>\n  <li>fruit</li>\n</ul>`,
      `<ul>\n  <li>{fruit}</li>\n  <li>{fruit}</li>\n  <li>{fruit}</li>\n</ul>`,
      `No output`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "What will be the value of usernames after executing the extractUsernames function?",
    questionCode: `const users = [\n  { id: 1, username: "alice" },\n  { id: 2, username: "bob" },\n  { id: 3, username: "charlie" }\n];\n\nfunction extractUsernames(users) {\n  return users.map(user => user.username);\n}\n\nconst usernames = extractUsernames(users);`,
    options: [
      `["alice", "bob", "charlie"]`,
      `[1, 2, 3]`,
      `["Alice", "Bob", "Charlie"]`,
      `["username", "username", "username"]`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "What will be the value of squaredNumbers after executing the squareNumbers function?",
    questionCode: `const numbers = [1, 2, 3, 4, 5];\n\nfunction squareNumbers(numbers) {\n  return numbers.map(number => number * number);\n}\n\nconst squaredNumbers = squareNumbers(numbers);`,
    options: [
      `[1, 4, 9, 16, 25]`,
      `[1, 2, 3, 4, 5]`,
      `[1, 8, 27, 64, 125]`,
      `[1, 16, 81, 256, 625]`
    ],
    answer: 0,
    concepts: []
  },
  {
    question: "What will the items array look like after executing the markAsSold function?",
    questionCode: `const items = [\n  { id: 1, name: "Item 1", sold: false },\n  { id: 2, name: "Item 2", sold: false }\n];\n\nfunction markAsSold(items, id) {\n  return items.map(item =>\n    item.id === id ? { ...item, sold: true } : item\n  );\n}\n\nconst updatedItems = markAsSold(items, 2);`,
    options: [
      `[\n  { id: 1, name: "Item 1", sold: false },\n  { id: 2, name: "Item 2", sold: false }\n]`,
      `[\n  { id: 1, name: "Item 1", sold: false },\n  { id: 2, name: "Item 2", sold: true }\n]`,
      `[\n  { id: 1, name: "Item 1", sold: true },\n  { id: 2, name: "Item 2", sold: true }\n]`,
      `No change`
    ],
    answer: 1,
    concepts: []
  }
]