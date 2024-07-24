import "./TabButton.css";

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <ul className="ul-tab-button">
        <li>
        <button
          className={`tab-button ${isSelected ? 'active' : ''}`}
          {...props}
        >
          {children}
        </button>
      </li>
    </ul>
  
  );
}
