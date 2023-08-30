import React from 'react';
import MainNavBar from '../Components/NavBar/MainNavBar';
import styles from '../Pages/Checkout.module.scss';
import Logo from '../Components/Logo/Logo'

function Checkout() {
  return (
    <>
    <MainNavBar/>
    <Logo/>
    <div className={styles.main_container}>
      <div className={styles.left}>
        <div className={styles.inner_container}>
          <h1>Shopping Cart</h1>
          <div className={styles.heading_block}>
            <div className={styles.product_block}>
            <p className={styles.product_text}>Product</p>
            </div>
            <p className={styles.size_text}>Size</p>

          <div className={styles.quantity_block}>
          <p className={styles.quantity_text}>Quantity</p>
          </div>
          <div className={styles.price_block}>
          <p className={styles.price_text}>Total Price</p>
          </div>
          </div>
        
        </div>


     
      </div>
      <div className={styles.right}>

      </div>
    </div>

    </>
  )
}

export default Checkout