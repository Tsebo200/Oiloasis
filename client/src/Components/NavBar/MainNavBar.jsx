import React from 'react';
import styles from '../NavBar/MainNavBar.module.scss'
import { Link } from 'react-router-dom';

function MainNavBar() {
  return (
    <div className={styles.header}>
        <div className={styles.links_container}>
            <Link to="/">Home</Link>
            <Link to="/allproducts">Products</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/admin">Admin</Link>
        </div>
    </div>
  )
}

export default MainNavBar