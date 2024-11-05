import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginContainer from "./containers/login/login";
import HomeContainer from "./containers/home/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginContainer />}></Route>
        <Route index path="/" element={<HomeContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
