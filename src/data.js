import EnableDisable from "./assets/EnableDisable.jpg"
import SimpleCounter from "./assets/SimpleCounter.jpg";
import ToggleText from "./assets/ToggleText.jpg";
import CreateOperation from "./assets/CRUD-Create.jpg";

export const LEARN_CONCEPTS = {
  ex1: {
    title: "Simple Counter",
    description: [
      "Use the useState hook to manage the counter state.",
      "Implement two functions (increment and decrement) to increase and decrease the counter.",
      "Display the current counter value and provide buttons to increment and decrement the counter.",
    ],
    images: [SimpleCounter],
    concepts:["useState"]

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
    images: [ToggleText],
    concepts:["useState"]
  },
  ex3: {
    title: "Simple Form",
    description: [
      "Use the useState hook to manage the form input state.",
      "Implement functions to handle input changes and form submission.",
      "Display an alert with the input value when the form is submitted.",
    ],
    images: [SimpleCounter],
    concepts:["useState"]
  },
  ex4: {
    title: "To Do List",
    description: [
      "Use the useState hook to manage the list of todos and the current input value.",
      "Implement functions to handle input changes and form submission.",
      "Add new todos to the list and display the list of todos.",
      "Clear the input field after adding a todo.",
    ],
    images: [SimpleCounter],
    concepts:["useState"]
  },
  ex5: {
    title: "Fetch API Data",
    description: [
      "Use the useState hook to manage the fetched data.",
      "Use the useEffect hook to fetch data from the API when the component mounts.",
      "Display the fetched data in a list format.",
    ],
    images: [SimpleCounter],
    concepts:["useState"]
  },
    ex6: {
    title: "Enable/ Disable",
    description: [
      "Add a function that's triggered when the <button> is clicked.",
      "Change isEditing to true in that function.",
    ],
    images: [EnableDisable],
    concepts:["useState"]
  },

   ex7: {
    title: "CRUD - Create Operation",
    description: [
      "Use useState hook to manage the new items added to the list and the input field.",
    ],
    images: [CreateOperation],
    concepts:["useState"]
  },
};
