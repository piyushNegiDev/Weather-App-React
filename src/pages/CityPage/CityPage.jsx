import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./CityPage.module.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import { setAddedCitiesToLocalStorage } from "../../utils/getterSetter";

export default function CityPage() {
  const { addedCities, setAddedCities, setStateData } = useContext(UserContext);

  return (
    <div className={styles.cityPageContainer}>
      <Sidebar />
      <div className={styles.middleSection}>
        <Header />
        <div className={styles.citiesCardsContainer}>
          {addedCities.map((city) => {
            const updatedCities = addedCities.filter(
              (cityToRemove) => cityToRemove.name !== city.name,
            );

            return (
              <div className={styles.cityCard} key={city.name}>
                <span>{city.name}</span>

                <img
                  src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                  alt=""
                />

                <span>{city.temp} &#8451;</span>

                <div className={styles.btnsContainer}>
                  <NavLink className={styles.navLink} to="/">
                    <button
                      className={styles.showBtn}
                      onClick={() => {
                        setStateData(city.name);
                        console.log("working");
                      }}
                    >
                      Show
                    </button>
                  </NavLink>

                  <button
                    onClick={() => {
                      setAddedCities(updatedCities);
                      setAddedCitiesToLocalStorage(updatedCities);
                    }}
                    className={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
