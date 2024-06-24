import "./TabButton.css";

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <ul id="ul-tab-button">
        <li>
        <button  id = "tab-button" className={isSelected ? "active" : ""} {...props}>
          {children}
        </button>
      </li>
    </ul>
  
  );
}
