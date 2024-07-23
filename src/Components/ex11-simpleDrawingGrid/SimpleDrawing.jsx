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
