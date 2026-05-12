import styles from "./Sidebar.module.css";
import CityIcon from "../../assets/city.svg?react";
import HomeIcon from "../../assets/home.svg?react";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src="./umbrella.svg" className={styles.logo} height="50" alt="" />
      <div className={styles.sideBarIcons}>
        <HomeIcon className={styles.icons} />
        <span className={styles.iconName}>Home</span>
      </div>

      <div className={styles.sideBarIcons}>
        <CityIcon className={styles.icons} />
        <span className={styles.iconName}>City</span>
      </div>
    </div>
  );
}
