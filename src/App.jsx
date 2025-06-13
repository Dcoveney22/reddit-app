import { useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import PreviewPage from "./components/PreviewPage/PreviewPage";
import "./App.css";
import ListBar from "./components/ListBar/ListBar";
import Root from "./Root/Root";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<MainPage />} />
      <Route path="home/posts/:id" element={<PreviewPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
