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
