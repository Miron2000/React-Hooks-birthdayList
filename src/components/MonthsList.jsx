import React, { useEffect, useState } from "react";
import s from "./monthsList.module.css";
import BirthdayUserList from "./BirthdayUserList";
import { months } from "../months";

function MonthsList(props) {


  // const getUsers = () => {
  //   props.users.forEach((user) => {
  //     const check = moment(user.dob, "YYYY/MM/DD");
  //     const editedMonth = check.format("M");
  //     months[parseInt(editedMonth) - 1].sortUsers.push(user);
  //   });
  //
  //   // months.forEach((m) => {
  //   //   console.log(m.sortUsers, "user");
  //   //   // m.sortUsers.forEach((n) => {
  //   //   //   console.log(n, "I")
  //   //   // })
  //   // });
  // };
  //
  // useEffect(() => {
  //   getUsers();
  // }, [props.users]);

  // const showUsersBornInMonth = (id) => {
  //   // setBirthdayUsers(months[id - 1].sortUsers);
  //   setBirthdayUsers(months[id - 1].sortUsers, (n) => {
  //     console.log(n);
  //   });
  //   // console.log(birthdayUsers, "birthdayUsers");
  // };

  return (
    <>
      <ul className={s.monthsContainer}>
        {months.map((m) => (
          <li
            className={s.monthsItem}
            value={m.id}
            // onMouseEnter={}
          >
            {m.name}
            {/*<BirthdayUserList birthdayUsers={birthdayUsers}/>*/}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MonthsList;
