import React from 'react'
import MainNavBar from '../Components/NavBar/MainNavBar'
import styles from '../Pages/Admin.module.scss'
import Logo from '../Components/Logo/Logo'
import AddProductForm from '../Components/Forms/AddProductForm'
import ProductInfoCard from '../Components/Cards/ProductInfoCard'



function Admin() {
  return (
    <>
    <MainNavBar/>
    <div className={styles.main_container}>
    <Logo/>
    <div className={styles.left_side}>
      <p className={styles.shop_heading}>The Oiloasis Shop: Oil Spells</p>

      <div className={styles.spells_container}>
      <ProductInfoCard/>

      </div>
    </div>
      <div className={styles.right_side}>
          <AddProductForm/>
      </div>
    </div>
    </>
  )
}

export default Admin