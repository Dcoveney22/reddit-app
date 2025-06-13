import { Outlet } from "react-router-dom";
import ListBar from "../components/ListBar/ListBar";
import Header from "../components/Header/Header";

export default function Root() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  );
}
