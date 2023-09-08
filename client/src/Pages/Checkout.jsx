import React from 'react';
import MainNavBar from '../Components/NavBar/MainNavBar';
import styles from '../Pages/Checkout.module.scss';
import Logo from '../Components/Logo/Logo'

function Checkout() {
  return (
    <>
    <MainNavBar/>
    <Logo/>
    <div className={styles.main_container}>
      <div className={styles.left}>
        <div className={styles.inner_container}>
          <h1>Shopping Cart</h1>
          <div className={styles.heading_block}>
            <div className={styles.product_block}>
            <p className={styles.product_text}>Product</p>
            </div>
            <p className={styles.size_text}>Size</p>

          <div className={styles.quantity_block}>
          <p className={styles.quantity_text}>Quantity</p>
          </div>
          <div className={styles.price_block}>
          <p className={styles.price_text}>Total Price</p>
          </div>
  
          </div>
          <hr className={styles.checkline}/>

            <div className={styles.row_one}>
              <div className={styles.img_block}></div>
                <div className={styles.product_block}>
                  <b><p className={styles.product_name}>Product One</p></b> 
                  <p className={styles.username}>Zack</p>
                </div>
              
              <select className={styles.size_input}>
                <option>Size</option>
                <option>5ml</option>
                <option>10ml</option>
                <option>15ml</option>
              </select>


              <div className={styles.quantity_selector_container}>
                <div className={styles.checkout_minus_block}>
                    <div className={styles.checkout_minus_icon}></div>
                </div>
                  <p className={styles.checkout_quantity_count}>2</p>
                <div className={styles.checkout_plus_block}>
                  <div className={styles.checkout_plus_icon}></div>
                </div>
              </div>

              <p className={styles.row_one_total_price}>R 120</p>
                <div className={styles.remove_btn}></div>

            </div>

        </div>


     
      </div>
      <div className={styles.right}>
            <div className={styles.payment_info_container}>
              <h1 className={styles.payment_info_text}>Payment Info</h1>
                <div className={styles.payment_container}>
                  <p className={styles.payment_method_text}>Payment Method:</p>
                    <div className={styles.checkbox_container}>
                    <input className={styles.credit} type='radio' name="checked"></input>
                    <div className={styles.credit_icon}></div><p className={styles.credit_text}>Credit Card</p>
                    
                    <div className={styles.paypal_container}>
                    <input className={styles.paypal} type='radio' name="checked"></input>
                    <div className={styles.paypal_icon}></div><p className={styles.paypal_text}>Paypal</p>
                    </div>
                  </div>

                  <div className={styles.detail_container}>
                      <div className={styles.name_container}>
                          <p className={styles.card_owner_text}>Card owner:</p>
                          <p className={styles.card_owner_name}>John Cena</p>
                      </div>
                      <div className={styles.breaker}></div>

                      <div className={styles.card_number_container}>
                        <p className={styles.card_number_text}>Card Numbers:</p>
                        <div className={styles.card_numbers_container}>
                            <div  className={styles.dot_one}></div>
                            <div  className={styles.dot_two}></div>
                            <div  className={styles.dot_three}></div>
                            <div  className={styles.dot_four}></div>
                            <div  className={styles.dot_five}></div>
                            <div  className={styles.dot_six}></div>
                            <div  className={styles.dot_seven}></div>
                            <div  className={styles.dot_eight}></div>
                            <div  className={styles.dot_nine}></div>
                            <div  className={styles.dot_ten}></div>   
                            <div  className={styles.dot_eleven}></div>
                            <div  className={styles.dot_twelve}></div>
                            <p className={styles.card_last_digits}>2153</p>
                        </div> 

                        <div className={styles.head_info_container}>
                          <p className={styles.expiration_date_text}>Expiration Date:</p>
                          <p className={styles.cvv_text}>CVV:</p>
                        </div>
                        <div className={styles.actual_card_detail}>
                        <p className={styles.ex_month}>05</p>

                        <div className={styles.downarrow_icon}></div>
                          <p className={styles.ex_year}>2022</p>
                          <div className={styles.downarrow_icon_two}></div>
                          <div className={styles.downarrow_icon}></div>
                          <p className={styles.actual_cvv_text}>159</p>
                    
                        <div className={styles.checkout_butt}><p className={styles.checkout_text}>Check Out</p></div>
                        </div>

                    </div>
                

                  </div>
                </div>
            </div>
      </div>
    </div>

    </>
  )
}

export default Checkout