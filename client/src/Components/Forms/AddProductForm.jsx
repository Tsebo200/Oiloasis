import React, { useState } from 'react'
import styles from '../Forms/AddProductForm.module.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProductForm() {


  const navigate = useNavigate();

  const [ name, setName] = useState();
  const [ size, setSize] = useState();
  const [ capColor, setCapColor] = useState();
  const [ instock, setInstock] = useState();
  const [ quantity, setQuantity] = useState();
  const [ price, setPrice] = useState();
  const [ disclaimer, setDisclaimer] = useState();
  const [ description, setDescription] = useState();

  const [ black, setBlack] = useState();
  const [ white, setWhite] = useState();
  const [ gold, setGold] = useState();
  const [ silver, setSilver] = useState();

  // capColor = black + white + gold + silver;
  
    const handleSubmit = () => {
        const payload = {
            name: name,
            size: size,
            capColor: capColor,
            instock: instock,
            quantity: quantity,
            price: price,
            description: description,
            disclaimer: disclaimer
        }
        
        try {
          const res = axios.post("http://localhost:5002/", payload);
          console.log("Oil Data added:", res.data)
        } catch (error) {
          console.log("error occurred when submitting:", error);
        }
      };

      const [file, setFile]  = useState();

      const handleUpload = (e) => {
        console.log(file)
        const formdata = new FormData()
        formdata.append('file', file)
        axios.post("http://localhost:5002/upload", formdata)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }

  return (
   <>
    <div className={styles.add_form_container}>
              <div className={styles.heading_cont}>
                  <p className={styles.add_product_text}>Add A Oil Product</p>
                  <div className={styles.upload_section}>
                    <input type="file" onChange={e => setFile(e.target.files[0])}/>
                    <button onClick={handleUpload}>upload</button>
                  </div>
              </div>
              <form className={styles.form_input_container} onSubmit={handleSubmit}>
                
              <input className={styles.product_name} placeholder='Product Name*' value={name} onChange={(e) => setName(e.target.value)}></input>
              <input className={styles.product_price} placeholder='Product Price*'  value={price} onChange={(e) => setPrice(e.target.value)}></input>
              <input className={styles.product_desc} placeholder='Product Description*' value={description} onChange={(e) => setDescription(e.target.value)}></input>
              <input className={styles.product_disclaim} placeholder='Product Disclaimer*' value={disclaimer} onChange={(e) => setDisclaimer(e.target.value)}></input>
              <select className={styles.product_size} placeholder='Select Size' value={size} onChange={(e) => setSize(e.target.value)}>
                <option>Select Size</option>
                  <option>5ml</option>
                  <option>10ml</option>
                  <option>15ml</option>
              </select>
              <input className={styles.product_quantity} placeholder='Quantity*'  value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
              <input className={styles.product_color_black} placeholder='In Stock: Black*'  value={black} onChange={(e) => setBlack(e.target.value)}></input>
              <input className={styles.product_color_white} placeholder='In Stock: White*'  value={white} onChange={(e) => setWhite(e.target.value)}></input>
              <input className={styles.product_color_silver} placeholder='In Stock: Silver*'  value={silver} onChange={(e) => setSilver(e.target.value)}></input>
              <input className={styles.product_color_gold} placeholder='In Stock: Gold*'  value={gold} onChange={(e) => setGold(e.target.value)}></input>
              <button type={"submit"} className={styles.new_product_btn}>ADD NEW PRODUCT</button>
              </form>
          </div>

   </>
  )
}

export default AddProductForm