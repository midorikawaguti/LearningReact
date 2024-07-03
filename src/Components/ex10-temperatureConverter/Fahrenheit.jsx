import React from 'react';

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
}