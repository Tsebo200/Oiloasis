import React, { useState } from 'react';
import axios from 'axios';
import styles from '../Pages/Login.module.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();



  axios.post("http://localhost:5002/api/addUser", { username, password })
      .then((res) => console.log(res))
      .catch((err) => console.log("error occurred when submitting:", err));
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.login_container}>
        <div className={styles.left}>
          <div className={styles.spacer}></div>
          <div className={styles.logo}></div>
          <div className={styles.head_container}>
            <h1 className={styles.login_heading}>Log in</h1>
          </div>

          <div className={styles.intro_box}>
            <p className={styles.intro_login}>Welcome back! Please enter your details</p>
          </div>
         
          <form onSubmit={handleSubmit} className={styles.form_container}>
            <div className={styles.username_container}>
              <p className={styles.username_label}>Username</p>
              <input 
                className={styles.username_input} 
                placeholder='Enter Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className={styles.password_container}>
              <p className={styles.password_label}>Password</p>
              <input 
                type="password" 
                className={styles.password_input} 
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.signIn_btn_container}>
              <p className={styles.signIn_text}> Sign In</p>
            </button>
          </form>
        </div>
        <div className={styles.right}>
        </div>
      </div>
    </div>
  )
}

export default Login