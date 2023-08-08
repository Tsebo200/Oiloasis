import React from 'react';
import styles from '../Cards/ProductInfoCard.module.scss'

function ProductInfoCard() {
  return (
    <>
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
              {/* <p className={styles.instock_text}>InStock:</p> */}

              <div className={styles.right_col}>
                  <p className={styles.cap_text}>Cap:</p>
              </div>
              {/* </div> */}
        </div>
    </>
  )
}

export default ProductInfoCard