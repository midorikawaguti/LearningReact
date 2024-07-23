import React from "react";
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
                className={`grid ${cell ? 'active' : ''}`} // Apply active class if cell is true
                onClick={() => onToggleCell(rowIndex, colIndex)}
              >
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
