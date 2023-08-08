import React from 'react'
import styles from '../Forms/AddProductForm.module.scss'

function AddProductForm() {
  return (
   <>
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

   </>
  )
}

export default AddProductForm