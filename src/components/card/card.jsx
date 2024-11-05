import React from "react";
import styles from "./card.module.css";
function CardComponent(props) {
  console.log({ props });
  return (
    <div className={styles.container}>
      <h2>
        {props.user.name} {props.user.lastname}
      </h2>
      <p>Username: {props.user.username}</p>
      <p>Password: {props.user.password}</p>
    </div>
  );
}
export default CardComponent;
