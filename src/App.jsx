import { useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import "./App.css";
import ListBar from "./components/ListBar/ListBar";
import Root from "./Root/Root";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<MainPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
