import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useLanguage } from "../../contexts/ContextLanguage";
import { useTheme } from "../../contexts/ContextTheme";
import { useData } from "../../contexts/ContextData";

export default function Header() {
  const { eLanguage, language, switchLanguage } = useLanguage();
  const { eTheme, theme } = useTheme();
  const { data } = useData();

  function LanguageSelect() {
    switch (language) {
      case eLanguage.tr:
        return (
          <span className="clr-777777">
            <span
              onClick={() => switchLanguage(eLanguage.en)}
              className="clr-AF0C48 language-select"
            >
              İNGİLİZCE
            </span>
            ' YE GEÇ{" "}
          </span>
        );
      case eLanguage.en:
        return (
          <span className="clr-777777">
            SWITCH TO{" "}
            <span
              onClick={() => switchLanguage(eLanguage.tr)}
              className="clr-AF0C48 language-select"
            >
              TURKISH
            </span>
          </span>
        );
      default:
        return <span></span>;
    }
  }

  function ThemeText() {
    switch (language) {
      case eLanguage.tr:
        return (
          <span className={eTheme.dark === theme ? "clr-grayD9" : "clr-777777"}>
            {eTheme.dark === theme ? "GÜNDÜZ MODU" : "GECE MODU"}
          </span>
        );

      case eLanguage.en:
        return (
          <span className={eTheme.dark === theme ? "clr-grayD9" : "clr-777777"}>
            {eTheme.dark === theme ? "LIGHT MODE" : "DARK MODE"}
          </span>
        );

      default:
        return <span></span>;
    }
  }

  return (
    <div className="header-wrapper">
      <img
        className="header__img"
        src={
          eTheme.dark === theme ? data.headerData.imgDark : data.headerData.img
        }
        alt="circle"
      />
      <header className="header custom-container">
        <div className="header__theme">
          <ToggleSwitch />
          <ThemeText />
        </div>
        <LanguageSelect />
      </header>
    </div>
  );
}
