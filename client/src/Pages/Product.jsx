import React from 'react'
import styles from '../Pages/Product.module.scss';
import MainNavBar from '../Components/NavBar/MainNavBar';
import Logo from '../Components/Logo/Logo';


function Product() {
  return (
<>

    <MainNavBar/>
    <div className={styles.main_container_two}>
    <Logo/>

    <div className={styles.hor_line}></div>
    <div className={styles.product_info_container_left}>
        <div className={styles.product_info_row_one}>
        <p className={styles.product_one}>Love Spell</p>
        {/* <p className={styles.product_price}>R90.00</p> */}
        <p className={styles.product_details}>4th HEART LOVE Lavender, Ylang- Ylang, Bergamot, and Rose Absolute. CRYSTAL: Rose Quartz or Aventurine'
'This essential Chakra oil is made with plant-based essential oils and designed to help focus and align the 4th Chakra in your body. Excellent to be used for meditation, prayer, massage, yoga, or daily aromatherapy.</p>
    </div>

    <p className={styles.bought_with_text}>Usually Bought with</p>
    <div className={styles.product_two_container}>
        <div className={styles.product_two_img}></div>
        <p className={styles.product_two_name}>Healing</p>
    </div>
    <div className={styles.product_three_container}>
        <div className={styles.product_three_img}></div>
        <p className={styles.product_three_name}>Archangel haniel</p>
    </div>
    <div className={styles.product_four_container}>
        <div className={styles.product_four_img}></div>
        <p className={styles.product_four_name}>7 Chakras</p>
    </div>
    <div className={styles.buttons_container}>
        <div className={styles.add_and_sub_container}>
            <div className={styles.sub_btn_side}>
                <div className={styles.subtract_icon}></div>
            <div className={styles.vert_line}></div>
            </div>
            <div className={styles.counter_side}>
                <p className={styles.current_count}>2</p>
            <div className={styles.vert_line_two}></div>
            </div>
            <div className={styles.add_btn_side}>
                <div className={styles.plus_icon}></div>
            </div>
        </div>
       <a href="Login"> <div className={styles.add_cart_btn}>
            <p className={styles.add_to_cart_text}>Add To Cart</p>
            <div className={styles.right_chevron_arrow_icon}></div>
        </div></a>
    </div>
    </div>
    <div className={styles.product_info_container_right}>
        <div className={styles.main_product}></div>
        <div className={styles.other_products_container}>
            <div className={styles.other_product_one}></div>
            <div className={styles.other_product_two}></div>
            <div className={styles.other_product_three}></div>
            <div className={styles.other_product_four}></div>
        </div>
    </div>
    <div className={styles.modal_arrow}></div>
    <div className={styles.modal}>
       
    </div>
</div>
</>
  )
}

export default Product