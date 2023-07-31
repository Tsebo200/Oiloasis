import React from 'react'
import styles from '../NavBar/NavBar.module.scss'
import { Link } from 'react-router-dom'
// import Logo from '../Logo/Logo'



function NavBar() {
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
// individual products will be found when tapped on a product in all products page
export default NavBar