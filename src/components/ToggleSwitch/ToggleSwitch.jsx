import "./ToggleSwitch.css";
import { useTheme } from "../../contexts/ContextTheme";

export default function ToggleSwitch() {
  const { eTheme, theme, toggleTheme } = useTheme();

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <input
          onChange={toggleTheme}
          className="toggle-switch__input"
          type="checkbox"
          checked={eTheme.dark === theme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
