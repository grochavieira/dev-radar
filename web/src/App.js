import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem/index";
import DevForm from "./components/DevForm/index";

function App() {
  const [devs, setDevs] = useState([]);

  async function loadDevs() {
    const response = await api.get("/devs");

    setDevs(response.data);
  }
  useEffect(() => {
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    await api.post("/devs", data);

    loadDevs();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => {
            if (dev === null) {
            } else {
              return <DevItem key={dev._id} dev={dev} />;
            }
            return <p key={22342}>NULLLLL</p>;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
