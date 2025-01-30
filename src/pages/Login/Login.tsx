import styles from "./Login.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";

export function Login() {
  const [regMode, setRegMode] = useState<boolean>(false);

  return (
    <Layout>
      <div className={styles.form}>
        <header className={styles.header}>
          {regMode ? "Регистрация" : "Вход"}
        </header>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите логин"
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Введите пароль"
        />
        <div className={styles.btns}>
          <button className={styles.btn}>
            {regMode ? "Зарегистрироваться" : "Войти"}
          </button>
          <button
            className={styles.btn}
            onClick={() => setRegMode((regMode) => !regMode)}
          >
            {regMode ? "Вход" : "Регистрация"}
          </button>
        </div>
      </div>
    </Layout>
  );
}
