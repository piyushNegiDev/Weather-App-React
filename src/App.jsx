import { UserContext } from "./context/UserContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx/HomePage";
import CityPage from "./pages/CityPage/CityPage";
import { useAppData } from "./hooks/useAppData";
import styles from "./App.module.css";
import { SyncLoader } from "react-spinners";

export default function App() {
  const appData = useAppData();

  if (!appData.weatherData || appData.isLoading) {
    return (
      <div className={styles.loaderClass}>{<SyncLoader color="white" />}</div>
    );
  }

  return (
    <UserContext.Provider value={appData}>
      <div className={styles.appContainer}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/city" element={<CityPage />}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}
