import React from 'react';
import styles from '../Pages/Login.module.scss';

function Login() {
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
               
               <div className={styles.form_container}>
                    <div className={styles.username_container}>
                        <p className={styles.username_label}>Username</p>
                        <input className={styles.username_input} placeholder='Enter Username'></input>
                    </div>

                    <div className={styles.password_container}>
                        <p className={styles.password_label}>Password</p>
                        <input type="password" className={styles.password_input} placeholder='Enter Password'></input>
                    </div>
                    <div className={styles.signIn_btn_container}>

                    <p className={styles.signIn_text}> Sign In</p>

                    </div>
                </div>
            </div>
            <div className={styles.right}>
            </div>
        </div>
    </div>
  )
}

export default Login