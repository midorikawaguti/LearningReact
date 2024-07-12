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
