import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import styles from "./login.module.css";
import Swal from "sweetalert2";

function LoginContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const showAlertError = () => {
    return Swal.fire({
      title: "Algo salió mal!",
      text: "Pusiste mal mas credenciales",
      icon: "error",
    });
  };

  const handleLogin = async () => {
    if (username !== "" && password !== "") {
      // La llamada al backend
      const body = {
        username,
        password,
      };

      try {
        const response = await fetch(
          "https://be-fsi-login-auak.onrender.com/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        if (response.ok) {
          Swal.fire({
            title: "Felicidades",
            text: "Serás redirigido",
            icon: "success",
          }).then(() => {
            window.location.href = "/home";
          });
        } else {
          showAlertError();
        }
      } catch (err) {
        showAlertError();
      }
    } else {
      showAlertError();
    }
  };

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <img src="logo192.png" className={styles.logo} />
        <a href="">Contact</a>
      </header>
      <div className={styles.content}>
        <FaCircleUser size={60} color="rgb(28, 90, 189)" />
        <input
          type="text"
          placeholder="Ingrese username"
          onChange={(event) => handleChangeUsername(event)}
        />
        {/* <input type="text" placeholder="Ingrese username" onChange={a} /> */}
        <input
          type="password"
          placeholder="Ingrese contraseña"
          onChange={handleChangePassword}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
      <footer className={styles.footer}>
        <p>Copyright 2024 - Clase increíble</p>
      </footer>
    </div>
  );
}
export default LoginContainer;
