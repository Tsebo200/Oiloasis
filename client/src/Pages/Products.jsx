import React from 'react'
import MainNavBar from '../Components/NavBar/MainNavBar'
import styles from '../Pages/Products.module.scss'
import Logo from '../Components/Logo/Logo'
import ProductCard from '../Components/Cards/ProductCard'

function Products() {
  return (
    <>
      <MainNavBar/>
    
      <div className={styles.main_container}>
      <Logo/>
            <div className={styles.left_side}>
                <div className={styles.filter_header}></div>
                <div className={styles.filter_section}>
                <p className={styles.filter_text}>Filter</p>
                <div className={styles.filter_box}>
                </div>
            </div> 
          
            <div className={styles.bag_box}></div>

            </div>
            <div className={styles.right_side}>
            <ProductCard/>
            </div>
      </div>
    </>
  )
}

export default Products