import React, { useEffect, useState } from "react";
import "./App.css";
import MonthsList from "./components/MonthsList";
import { apiUrl } from "./config/api";

function App() {
  const [users, setUsers] = useState([]);

  //1 вариант
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((json) => setUsers(json));
  // });

  const loadUsers = async () => {
    const data = await fetch(apiUrl);
    const json = await data.json();
    setUsers(json);
  };
  //componentDidMount
  useEffect(() => {
    loadUsers();
  }, []);

  // console.log(users);

  return (
    <div>
      <MonthsList users={users}/>
    </div>
  );
}

export default App;
