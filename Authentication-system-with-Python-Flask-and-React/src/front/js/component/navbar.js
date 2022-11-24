import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    store.token != null && (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">Home</span>
          </Link>
          <div className="ml-auto">
            <Link to="/demo">
              <button className="btn btn-primary">
                Check the Context in action
              </button>
            </Link>
          </div>
        </div>
      </nav>
    )
  );
};
=======

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-secundario">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
>>>>>>> 47608402feba4e1aaf8420f1a6d305d301196389
