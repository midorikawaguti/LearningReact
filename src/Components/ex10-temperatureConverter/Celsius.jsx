import React from 'react';

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
}