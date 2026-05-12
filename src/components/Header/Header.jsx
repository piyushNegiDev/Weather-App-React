import styles from "./Header.module.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { inputValue, setInputValue, setStateData } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Enter City"
      />

      <NavLink className={styles.navLink} to="/">
        <button
          onClick={() => {
            setStateData(inputValue);
          }}
        >
          Search
        </button>
      </NavLink>
    </header>
  );
}
