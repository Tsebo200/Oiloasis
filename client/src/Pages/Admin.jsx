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

      <div className={styles.spells_container}>
        <div className={styles.detail_one}>
              <div className={styles.row_one}>
                  <div className={styles.spell_icon}></div>
                  <p className={styles.spell_name}>Lucid Dreaming Spell</p>
                  <div className={styles.delete_btn}></div>
              </div>
              {/* <div className={styles.row_two}> */}
              <div className={styles.left_col}>
                  <p className={styles.size_text}>Size:</p>
            
              </div><br/>
              <p className={styles.instock_text}>InStock:</p>

              <div className={styles.right_col}>
                  <p className={styles.cap_text}>Cap:</p>
              </div>
              {/* </div> */}
        </div>
      </div>
    </div>
      <div className={styles.right_side}>
          <div className={styles.add_form_container}>
              <div className={styles.heading_cont}>
                  <p className={styles.add_product_text}>Add A Oil Product</p>
              </div>
              <div className={styles.form_input_container}>
          
              <input className={styles.product_name} placeholder='Product Name*'></input>
              <input className={styles.product_price} placeholder='Product Price*'></input>
              <input className={styles.product_desc} placeholder='Product Description*'></input>
              <input className={styles.product_disclaim} placeholder='Product Disclaimer*'></input>
              <select className={styles.product_size} placeholder='Select Size'>
                <option>Select Size</option>
                  <option>5ml</option>
                  <option>10ml</option>
                  <option>15ml</option>
              </select>
              <input className={styles.product_quantity} placeholder='Quantity*'></input>
              <input className={styles.product_color_black} placeholder='In Stock: Black*'></input>
              <input className={styles.product_color_white} placeholder='In Stock: White*'></input>
              <input className={styles.product_color_silver} placeholder='In Stock: Silver*'></input>
              <input className={styles.product_color_gold} placeholder='In Stock: Gold*'></input>
              <button type={"submit"} className={styles.new_product_btn}>ADD NEW PRODUCT</button>
              </div>
          </div>
          
      </div>
    </div>
    </>
  )
}

export default Admin