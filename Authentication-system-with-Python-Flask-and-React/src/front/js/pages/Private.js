import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Private = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    actions.deleteTokenLS();
  };

  
  return (
    <div className="vh-100 bg-fondo color-texto">
      <h2>Sí te logeas me ves, si no no</h2>
      <button className="btn btn-warning" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Private;