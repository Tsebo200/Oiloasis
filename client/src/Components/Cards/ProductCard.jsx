import React from 'react';
import styles from '../Cards/ProductCard.module.scss'

function ProductCard() {

    const Cards = [1,2,3,4,5,6];
    const productCards = Cards.map((card)=>
        <div className={styles.card_one}>
            <div className={styles.img_box}></div>
            <div className={styles.product_name}>
                <p className={styles.product_text}>Love Spell</p>
            </div>
            <div className={styles.price_box}>
            <p className={styles.price_text}>R50</p>
            </div>
        </div>

    );


  return (
   <div className={styles.card_container}>
    <div className={styles.row_one}>
       <div>{productCards[0]}</div>
       <div className={styles.vert_break}></div>
       <div>{productCards[1]}</div>
        <div className={styles.vert_break}></div>
       <div>{productCards[2]}</div>
       </div>
      
       <div className={styles.hor_break}></div>
       <div className={styles.row_one}>
       <div>{productCards[3]}</div>
       <div className={styles.vert_break}></div>
       <div>{productCards[4]}</div>
       <div className={styles.vert_break}></div>
       <div>{productCards[5]}</div>
       </div>
{/*        
        <div className={styles.card_one}>
            <div className={styles.img_box}></div>
            <div className={styles.product_name}>
                <p className={styles.product_text}>Third Eye Opening</p>
            </div>
            <div className={styles.price_box}>
            <p className={styles.price_text}>R50</p>
            </div>
        </div> */}
        
        
        {/* <div className={styles.vert_break}></div>
             <div className={styles.card_one}>
            <div className={styles.img_box}></div>
            <div className={styles.product_name}>
                <p className={styles.product_text}>Third Eye Opening</p>
            </div>
            <div className={styles.price_box}>
            <p className={styles.price_text}>R50</p>
            </div>
        </div> */}

        {/* <div className={styles.vert_break}></div> */}
        
        {/* </div> */}

    {/* <div className={styles.hor_break}></div> */}



{/* Row Two */}
{/* 
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
    </div> */}

   </div>
  )
}

export default ProductCard