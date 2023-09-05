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
                <p className={styles.recent_text}>Recent Products</p>
                  <p className='chakra_text'>Chakra</p>
                  <p className='chakra_text'>Healing</p>
                  <p className='chakra_text'>Fatigue</p>
                  <p className='chakra_text'>Luck</p>
                  <p className='chakra_text'>Full body ache</p>

                <p className={styles.popular_text}>Popular Products</p>
                  <p className='chakra_text'>Lucid Dreaming</p>
                  <p className='chakra_text'>Third Eye</p>
                  <p className='chakra_text'>Love</p>
                  <p className='chakra_text'>Prosperity</p>
                  <p className='chakra_text'>Intuition</p>
                  <p className='chakra_text'>Full Moon</p>
                  <p className='chakra_text'>Grounding</p>
                  <p className='chakra_text'>Enlightenment</p>


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