import React, { useEffect, useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    setLoading(true);
    const users = await axios.get("http://localhost:3000/users");
    setUsers(users.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 style={{ marginBottom: 5 }}>Users:</h1>
        {loading && <h3>Loading...</h3>}
        <ul style={{ margin: 0 }}>
          {users.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
