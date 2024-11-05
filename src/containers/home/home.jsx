import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CardComponent from "../../components/card/card";
import styles from "./home.module.css";
function HomeContainer() {
  const [usersData, setUsersData] = useState([]);

  const showAlertError = () => {
    return Swal.fire({
      title: "Algo salió mal!",
      text: "Pusiste mal mas credenciales",
      icon: "error",
    });
  };

  const bringData = async () => {
    try {
      const users = await fetch(
        "https://be-fsi-login-auak.onrender.com/usuarios/usuarios"
      ).then((data) => data.json());

      setUsersData(users);
    } catch (e) {
      showAlertError();
    }
  };

  useEffect(() => {
    bringData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Users list</h1>
      <div className={styles.users_container}>
        {usersData.map((user) => {
          return <CardComponent user={user} />;
        })}
      </div>
    </div>
  );
}

export default HomeContainer;
