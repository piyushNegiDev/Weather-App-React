import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src="./umbrella.svg" className={styles.logo} height="50" alt="" />
      <div className={styles.sideBarIcons}>
        <img src="./home.svg" height="30" alt="" />
        <span>Home</span>
      </div>

      <div className={styles.sideBarIcons}>
        <img src="./city.svg" height="30" alt="" />
        <span>City</span>
      </div>
    </div>
  );
}
