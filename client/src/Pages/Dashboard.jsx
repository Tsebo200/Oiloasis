import React from 'react'
import styles from '../Pages/Dashboard.module.scss'
import Logo from '../Components/Logo/Logo'
import NavBar from '../Components/NavBar/NavBar'


function Dashboard() {
  return (
    <>
    <NavBar/>
    <div className={styles.main_container}>
      <Logo/>
      <div className={styles.content_container}>
          <div className={styles.slide_container}></div>
          <div className={styles.index_container}>
              <div className={styles.numb_one}></div>
              <div className={styles.numb_two}></div>
              <div className={styles.numb_three}></div>
          </div>
          <div className={styles.text_box}>
            <h1 className={styles.brand_heading}>Oiloasis</h1>
            <p className={styles.intro_text}>Welcome to Oiloasis, we offer the best spiritual oils for any occasion from love attraction to healing.</p>
              <div className={styles.more_btn}>
                  <p className={styles.more_text}>MORE</p>
                  <div className={styles.arrow}></div>
              </div>
          </div>

          <div className={styles.slide_navigator}>
            <div className={styles.left_arrow}></div>
            {/* <hr/> */}
            <div className={styles.right_arrow}></div>
          </div>
      </div>
    </div>
    </>

  )
}

export default Dashboard