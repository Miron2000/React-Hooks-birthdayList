import React, { useEffect, useState } from "react";
import s from "./monthsList.module.css";
import moment from "moment";
import BirthdayUserList from "./BirthdayUserList";
import { months } from "../months";

function MonthsList(props) {
  const [birthdayUsers, setBirthdayUsers] = useState(months);

  const getUsers = () => {
    props.users.forEach((user) => {
      const check = moment(user.dob, "YYYY/MM/DD");
      const editedMonth = check.format("M");
      months[parseInt(editedMonth) - 1].sortUsers.push(user);
    });

    // months.forEach((m) => {
    //   console.log(m.sortUsers, "user");
    //   // m.sortUsers.forEach((n) => {
    //   //   console.log(n, "I")
    //   // })
    // });
  };

  useEffect(() => {
    getUsers();
  });

  const pointUser = (e) => {
    let cursor = e.target.value;
    setBirthdayUsers(months[cursor - 1].sortUsers);
    console.log(months[cursor - 1].sortUsers);
  };

  return (
    <>
      <ul className={s.monthsContainer}>
        {months.map((m) => (
          <li className={s.monthsItem} value={m.id} onMouseEnter={pointUser}>
            {m.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MonthsList;
