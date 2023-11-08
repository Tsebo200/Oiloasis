import React from 'react';
import styles from '../Card/ViewProductCard.module.scss';
function ViewProductCard() {
  return (
<>
    <div className={styles.detail_container}>
    <h1 className={styles.productName}> Product Name</h1>
    <p className={styles.productDescription}> product Description</p>
    <p className={styles.size}> size</p>
    <p className={styles.color}> color</p>
    <p className={styles.price}> price</p>
    <p className={styles.instock}> instock</p>
    <p className={styles.disclaimer}>disclaimer</p>
    </div>
</>
  )
}

export default ViewProductCard