import React from "react";
import s from "./birthdayUserList.module.css";

function BirthdayUserList(props) {
    console.log(props.birthdayUsers, "Birth")
  return (
    <ul className={s.birthdayUsersList}>
        {props.birthdayUsers.map((user) => (
            <li>
                <div>{user.firstName}</div>
            </li>
            ))}
    </ul>
  );
}

export default BirthdayUserList;
