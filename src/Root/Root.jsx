import { Outlet } from "react-router-dom";
import ListBar from "../components/ListBar/ListBar";

export default function Root() {
  return (
    <>
      {/* <ListBar /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}
