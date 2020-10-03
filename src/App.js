import React, { useEffect, useState } from "react";
import "./App.css";
import MonthsList from "./components/MonthsList";
import moment from "moment";
import { apiUrl } from "./config/api";
import { months } from "./months";

function App() {
  const [birthdayUsers, setBirthdayUsers] = useState([]);

  //1 вариант
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((json) => setUsers(json));
  // });
  //////////////////////////////////////////////

  const helper = (users, months) => {
    return months.map((month) => {
      // filter users
      let sort = users.filter ((user) => {
        const check = moment(user.dob, "YYYY/MM/DD");
        const editedMonth = check.format("M");
        return month.id === editedMonth;
      });
      //был пустой массив и скопировал всех отсортированых людей
      month.sortUsers = [...sort];
      return month;
    });
  };

  const loadUsers = async () => {
    const data = await fetch(apiUrl);
    const users = await data.json();

    setBirthdayUsers(users);

    //вызов функции
    console.log(helper(users, months));
  };

  //componentDidMount
  useEffect(() => {
    loadUsers();
  }, []);

  // console.log(users);

  return (
    <div>
      <MonthsList />
    </div>
  );
}

export default App;
