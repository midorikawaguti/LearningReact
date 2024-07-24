import TabButton from "./TabButton";
import { useState } from "react";
import { LEARN_CONCEPTS } from "../data.js";
import CodeDisplay from "./CodeDisplay/CodeDisplay.jsx";
import "./Examples.css";

import Counter from "./ex1-Counter/Counter";
import ChangeVisibility from "./ex2-ChangeVisibility/ChangeVisibility";
import Form from "./ex3-Form/Form";
import ToDo from "./ex4-ToDo/ToDo";
import FetchAPI from "./ex5-FetchAPI/FetchAPI";
import EnableDisableMethod from "./ex6-EnableDisableMethod/EnableDisableMethod.jsx";
import CRUDCreate from "./ex7-CRUD-Create/CRUD-Create.jsx";
import CRUDDelete from "./ex8-CRUD-Delete/CRUD-Delete.jsx"
import CRUDEdit from "./ex9-CRUD-Edit/CRUD-Edit.jsx";
import TemperatureConverter from "./ex10-temperatureConverter/TemperatureConverter.jsx";
import Accordion from "./ex12-Accordion/Accordion.jsx";
import SimpleDrawing from "./ex11-simpleDrawingGrid/SimpleDrawing.jsx";

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
          Change Visibility
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
          Enable and Disable
        </TabButton>

        <TabButton
          isSelected={selectedExample === "ex7"}
          onClick={() => handleSelect("ex7")}
        >
          CRUD - Create
        </TabButton>

        <TabButton
          isSelected={selectedExample === "ex8"}
          onClick={() => handleSelect("ex8")}
        >
          CRUD - Delete
        </TabButton>

        <TabButton
          isSelected={selectedExample === "ex9"}
          onClick={() => handleSelect("ex9")}
        >
          CRUD - Edit
        </TabButton>

         <TabButton
          isSelected={selectedExample === "ex10"}
          onClick={() => handleSelect("ex10")}
        >
          Temperature Converter
        </TabButton>

         <TabButton
          isSelected={selectedExample === "ex11"}
          onClick={() => handleSelect("ex11")}
        >
          Grid Base Drawing
        </TabButton>

        <TabButton
          isSelected={selectedExample === "ex12"}
          onClick={() => handleSelect("ex12")}
        >
          Accordion
        </TabButton>
      </menu>

      {!selectedExample ? (
        <p>Select an example</p>
      ) : (
        <div id="tab-content">
          <h3>{LEARN_CONCEPTS[selectedExample].title}</h3>
          <ul>
            {LEARN_CONCEPTS[selectedExample].description.map(
              (conceptItem, index) => (
                <li key={index}>{conceptItem}</li>
              )
            )}
          </ul>
          {selectedExample === "ex1" && <Counter />}
          {selectedExample === "ex2" && <ChangeVisibility />}
          {selectedExample === "ex3" && <Form />}
          {selectedExample === "ex4" && <ToDo />}
          {selectedExample === "ex5" && <FetchAPI />}
          {selectedExample === "ex6" && <EnableDisableMethod name ="Player Name"/>}
          {selectedExample === "ex7" && <CRUDCreate/>}
          {selectedExample === "ex8" && <CRUDDelete/>}
          {selectedExample === "ex9" && <CRUDEdit/>}
          {selectedExample === "ex10" && <TemperatureConverter/>}
          {selectedExample === "ex11" && <SimpleDrawing/>}
          {selectedExample === "ex12" && <Accordion/>}

           {LEARN_CONCEPTS[selectedExample]?.codeSnippet.map((snippet, index) => (
            <CodeDisplay key={index} code={snippet} />
          ))}

          <div className="images">
            {LEARN_CONCEPTS[selectedExample]?.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Example ${selectedExample} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
