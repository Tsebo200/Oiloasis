import React from 'react';
import styles from '../Cards/ProductCard.module.scss'

function ProductCard() {
  return (
   <div className={styles.card_container}>
    <div className={styles.row_one}>
        <div className={styles.card_one}>
            <div className={styles.img_box}></div>
            <div className={styles.product_name}>
                <p className={styles.product_text}>Third Eye Opening</p>
            </div>
            <div className={styles.price_box}>
            <p className={styles.price_text}>R50</p>
            </div>
        </div>
        <div className={styles.vert_break}></div>

        <div className={styles.card_one}>
            <div className={styles.img_box}></div>
            <div className={styles.product_name}>
                <p className={styles.product_text}>Third Eye Opening</p>
            </div>
            <div className={styles.price_box}>
            <p className={styles.price_text}>R50</p>
            </div>
        </div>
        <div className={styles.vert_break}></div>
             <div className={styles.card_one}>
            <div className={styles.img_box}></div>
            <div className={styles.product_name}>
                <p className={styles.product_text}>Third Eye Opening</p>
            </div>
            <div className={styles.price_box}>
            <p className={styles.price_text}>R50</p>
            </div>
        </div>
        {/* <div className={styles.vert_break}></div> */}
        </div>
    <div className={styles.hor_break}></div>



{/* Row Two */}

    <div className={styles.row_one}>
        <div className={styles.card_one}>
            <div className={styles.img_box}></div>
            <div className={styles.product_name}>
                <p className={styles.product_text}>Third Eye Opening</p>
            </div>
            <div className={styles.price_box}>
            <p className={styles.price_text}>R50</p>
            </div>
          </div>
        <div className={styles.vert_break}></div>


        <div className={styles.card_one}>
            <div className={styles.img_box}></div>
            <div className={styles.product_name}>
                <p className={styles.product_text}>Third Eye Opening</p>
            </div>
            <div className={styles.price_box}>
            <p className={styles.price_text}>R50</p>
            </div>
          </div>
        <div className={styles.vert_break}></div>


        <div className={styles.card_one}>
            <div className={styles.img_box}></div>
            <div className={styles.product_name}>
                <p className={styles.product_text}>Third Eye Opening</p>
            </div>
            <div className={styles.price_box}>
            <p className={styles.price_text}>R50</p>
            </div>
          </div>
    </div>


        <div className={styles.card_two}></div>
        <div className={styles.card_three}></div>

   </div>
  )
}

export default ProductCard