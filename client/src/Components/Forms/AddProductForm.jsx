import React, { useEffect, useState } from 'react'
import styles from '../Forms/AddProductForm.module.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProductForm() {


  const navigate = useNavigate();

  const [ product, setProduct ] = useState();  
  const [updateProducts, setUpdateProducts] = useState(false);

  const [ productName, setProductName ] = useState('');
  const [ size, setSize] = useState('');
  // const [ capColor, setCapColor] = useState();
  const [ instock, setInstock] = useState('');
  const [ quantity, setQuantity] = useState('');
  const [ productPrice, setProductPrice] = useState('');
  const [ disclaimer, setDisclaimer] = useState('');
  const [ description, setDescription] = useState('');

  const [ color, setColor ] = useState('');
  const [ black, setBlack] = useState('');
  const [ white, setWhite] = useState('');
  const [ gold, setGold] = useState('');
  const [ silver, setSilver] = useState('');

  const [ image, setImage ] = useState();




  // capColor = black + white + gold + silver;
  
    const handleSubmit = (e) => {
      e.preventDefault();
        const payload = {
            productName: productName,
            productPrice: productPrice,
            description: description,
            disclaimer: disclaimer,
            size: size,
            quantity: quantity,
            color: document.getElementById("color").value
            // capColor: capColor
        }
        console.log(payload)
        axios.post("http://localhost:5002/api/oil", payload)
        .then(res => console.log(res))
        .catch(err => console.log("error occurred when submitting:", err))
        }


//       const [file, setFile]  = useState();

//       const handleUpload = (e) => {
//         console.log(file)
//         const formdata = new FormData()
//         formdata.append('file', file)
//         axios.post("http://localhost:5002/upload", formdata)
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
//       }


//   useEffect(() => {
//     axios.get('http://localhost:5002/getImage')
//     .then(res => setImage(res.data[0].image))
//     .catch(err => console.log(err))
// }, []);

  return (
   <>
    <div className={styles.add_form_container}>
              <div className={styles.heading_cont}>
                  <p className={styles.add_product_text}>Add A Oil Product</p>
                  {/* <div className={styles.upload_section}>
                    <input type="file" onChange={e => setFile(e.target.files[0])}/>
                    <button onClick={handleUpload}>upload</button>
                  </div> */}
              </div>
              <form className={styles.form_input_container} onSubmit={handleSubmit}>
                
              <input className={styles.product_name} placeholder='Product Name*' value={productName} onChange={(e) => setProductName(e.target.value)}></input>
              <input className={styles.product_price} placeholder='Product Price*'  value={productPrice} onChange={(e) => setProductPrice(e.target.value)}></input>
              <input className={styles.product_desc} placeholder='Product Description*' value={description} onChange={(e) => setDescription(e.target.value)}></input>
              <input className={styles.product_disclaim} placeholder='Product Disclaimer*' value={disclaimer} onChange={(e) => setDisclaimer(e.target.value)}></input>
              <select className={styles.product_size} placeholder='Select Size' value={size} onChange={(e) => setSize(e.target.value)}>
                <option>Select Size</option>
                  <option>5ml</option>
                  <option>10ml</option>
                  <option>15ml</option>
              </select>
              <select id='color'>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="black">Silver</option>
                <option value="black">Gold</option>
                {/* <option value={setColor("white")}>Gold</option> */}
              </select>
              <input className={styles.product_quantity} placeholder='Quantity*'  value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
              <button type="submit" className={styles.new_product_btn}>ADD NEW PRODUCT</button>
              </form>
          </div>

   </>
  )
}

export default AddProductForm