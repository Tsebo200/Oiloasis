import React from 'react';
import styles from '../Cards/AdminProductInfoCard.module.scss'
import { useState } from 'react';


function ProductInfoCard() {
    
    // const [items, setItems] = useState([]);
    // console.log(localStorage)

  return (
    <>
         <div className={styles.detail_one}>
              <div className={styles.row_one}>
                  <div className={styles.spell_icon}></div>
                  <p className={styles.spell_name}>Lucid Dreaming Spell</p>
                  <div className={styles.delete_btn}></div>
              </div>
              <div className={styles.row_two}>
              <div className={styles.left_col}>
                  <p className={styles.size_text}>Size:</p>
              </div>
         

              <div className={styles.right_col}>
                  <p className={styles.cap_text}>Cap:</p>
              </div>
              </div>

              <div className={styles.row_three}>
                <div className={styles.left_col_two}>
                    <p className={styles.instock_text}>InStock:</p>
                </div>
                <div className={styles.right_col}>
                    <p className={styles.price_text}>Price:</p>
                </div>
              </div>
              <div className={styles.row_breaker}></div>

              <div className={styles.row_four}>
                <p className={styles.desc_text}>Description:</p>
              </div>
              <div className={styles.row_five}>
                <p className={styles.disclaim_text}>Disclaimer:</p>
              </div>

              <div className={styles.row_six}>

              <button className={styles.view_btn}>View Product</button>
              <button className={styles.edit_btn}>Edit Product</button>
{/* 
              <p className={styles.view_text}>View Product</p>
                <p className={styles.edit_text}>Edit Product</p> */}
              </div>


        </div>
    </>
  )
}

export default ProductInfoCard