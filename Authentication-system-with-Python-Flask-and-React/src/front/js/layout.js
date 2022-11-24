<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
=======
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
<<<<<<< HEAD
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Registro from "./component/registro.jsx";
import Login from "./component/login.jsx";
import Protected from "./component/protected.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";

=======
import injectContext, { Context } from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Signup from "./pages/Singup.jsx";
import Private from "./pages/Private.jsx";
import Login from "./pages/Login.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context);
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
<<<<<<< HEAD
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Registro />} path="/registro" />
            <Route element={<Login />} path="/login" />
            <Route element={<Protected />} path="/protected" />
          </Routes>

=======
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
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

<<<<<<< HEAD
export default injectContext(Layout);
=======
export default injectContext(Layout);
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
