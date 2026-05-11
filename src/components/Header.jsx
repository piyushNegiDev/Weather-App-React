import styles from "./Header.module.css";

export default function Header({ inputValue, setInputValue, fetchData }) {
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
          fetchData(inputValue);
        }}
      >
        Search
      </button>
    </header>
  );
}
