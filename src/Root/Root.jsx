import { Outlet, useLocation } from "react-router-dom";
import ListBar from "../components/ListBar/ListBar";
import Header from "../components/Header/Header";
import MainPage from "../components/MainPage/MainPage";
import HomePage from "../components/HomePage/HomePage";

export default function Root() {
  const location = useLocation();
  const hideHeaderFooter = ["/"].includes(location.pathname);
  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
