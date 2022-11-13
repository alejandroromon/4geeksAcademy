import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext, { Context } from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Signup from "./pages/Singup.jsx";
import Private from "./pages/Private.jsx";
import Login from "./pages/Login.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context);
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/home" />
            <Route element={<Login />} path="/" />
            <Route element={<Signup />} path="/signup" />
            <Route
              element={
                !(store.tokenLS === null) ? <Private /> : <Navigate to="/" />
              }
              path="/private"
            />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);