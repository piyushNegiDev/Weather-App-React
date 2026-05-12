import styles from "./Header.module.css";

export default function Header({ inputValue, setInputValue, setStateData }) {
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
      <button
        onClick={() => {
          setStateData(inputValue);
        }}
      >
        Search
      </button>
    </header>
  );
}
