import React from 'react'
import MainNavBar from '../Components/NavBar/MainNavBar'
import styles from '../Pages/Admin.module.scss'
import Logo from '../Components/Logo/Logo'



function Admin() {
  return (
    <>
    <MainNavBar/>
    <div className={styles.main_container}>
    <Logo/>
    <div className={styles.left_side}>
      <p className={styles.shop_heading}>The Oiloasis Shop: Oil Spells</p>
    </div>
      <div className={styles.right_side}>
          <div className={styles.add_form_container}>
            <p className={styles.add_product_text}>Add A Product</p>
            <input className={styles.product_name} placeholder='Product Name*'></input>
            
          </div>
          
      </div>
    </div>
    </>
  )
}

export default Admin