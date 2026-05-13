import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { setAddedCitiesToLocalStorage } from "../../utils/getterSetter";
import styles from "./CityPage.module.css";

export default function CityCards() {
  const { addedCities, setAddedCities, setStateData } = useContext(UserContext);

  return (
    <>
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
    </>
  );
}
