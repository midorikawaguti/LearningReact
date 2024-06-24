import TabButton from "./TabButton";
import { useState } from "react";
import { LEARN_CONCEPTS } from "../data.js";
import "./Examples.css";

import Counter from "./ex1-Counter/Counter";
import ToggleText from "./ex2-Toggle/ToggleTex";
import Form from "./ex3-Form/Form";
import ToDo from "./ex4-ToDo/ToDo";
import FetchAPI from "./ex5-FetchAPI/FetchAPI";
import EnableDisableMethod from "./ex6-EnableDisableMethod/EnableDisableMethod.jsx";

export default function Examples() {
  const [selectedExample, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Practical Examples:</h2>
      <menu>
        <TabButton
          isSelected={selectedExample === "ex1"}
          onClick={() => handleSelect("ex1")}
        >
          Simple Counter
        </TabButton>

        <TabButton
          isSelected={selectedExample === "ex2"}
          onClick={() => handleSelect("ex2")}
        >
          Toggle Text
        </TabButton>

        <TabButton
          isSelected={selectedExample === "ex3"}
          onClick={() => handleSelect("ex3")}
        >
          Simple Form
        </TabButton>

        <TabButton
          isSelected={selectedExample === "ex4"}
          onClick={() => handleSelect("ex4")}
        >
          To Do List
        </TabButton>

        <TabButton
          isSelected={selectedExample === "ex5"}
          onClick={() => handleSelect("ex5")}
        >
          Fetch API Data
        </TabButton>

        <TabButton
          isSelected={selectedExample === "ex6"}
          onClick={() => handleSelect("ex6")}
        >
          Enable and Disable Editing
        </TabButton>
      </menu>

      {!selectedExample ? (
        <p>Select an example</p>
      ) : (
        <div id="tab-content">
          <h3>{LEARN_CONCEPTS[selectedExample].title}</h3>
          <ul>
            {LEARN_CONCEPTS[selectedExample].concepts.map(
              (conceptItem, index) => (
                <li key={index}>{conceptItem}</li>
              )
            )}
          </ul>
          {selectedExample === "ex1" && <Counter />}
          {selectedExample === "ex2" && <ToggleText />}
          {selectedExample === "ex3" && <Form />}
          {selectedExample === "ex4" && <ToDo />}
          {selectedExample === "ex5" && <FetchAPI />}
          {selectedExample === "ex6" && <EnableDisableMethod />}

          <div className="images">
            {LEARN_CONCEPTS[selectedExample].images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Example ${selectedExample} Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
