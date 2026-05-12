import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./CityPage.module.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function CityPage() {
  const { addedCities, setStateData } = useContext(UserContext);

  return (
    <div className={styles.cityPageContainer}>
      <Sidebar />
      <div className={styles.middleSection}>
        <Header />
        <div className={styles.citiesCardsContainer}>
          {addedCities.map((city) => {
            return (
              <div className={styles.cityCard} key={city.name}>
                <span>{city.name}</span>

                <img
                  src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                  alt=""
                />

                <span>{city.temp} &#8451;</span>

                <NavLink className={styles.navLink} to="/">
                  <button
                    onClick={() => {
                      setStateData(city.name);
                      console.log("working");
                    }}
                  >
                    Show
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
