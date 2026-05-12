import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import CityIcon from "../../assets/city.svg?react";
import HomeIcon from "../../assets/home.svg?react";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src="./umbrella.svg" className={styles.logo} height="50" alt="" />

      <NavLink className={styles.navLink} to="/">
        <div className={styles.sideBarIcons}>
          <HomeIcon className={styles.icons} />
          <span className={styles.iconName}>Home</span>
        </div>
      </NavLink>

      <NavLink className={styles.navLink} to="/city">
        <div className={styles.sideBarIcons}>
          <CityIcon className={styles.icons} />
          <span className={styles.iconName}>City</span>
        </div>
      </NavLink>
    </div>
  );
}
