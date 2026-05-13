import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./CityPage.module.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import Header from "../../components/Header/Header";
import CityCards from "./CityCards";

export default function CityPage() {
  const { addedCities } = useContext(UserContext);

  return (
    <>
      <Sidebar />
      <div className={styles.middleSection}>
        <Header />
        <div className={styles.citiesCardsContainer}>
          {addedCities.length === 0 ? (
            <div className={styles.cityCardSkeleton}>
              Your saved cities will appear here
            </div>
          ) : (
            <CityCards />
          )}
        </div>
      </div>
    </>
  );
}
