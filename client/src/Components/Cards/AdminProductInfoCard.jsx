import React from 'react';
import styles from '../Cards/AdminProductInfoCard.module.scss'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import  Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductInfoCard(props) {
  const [show, setShow] = useState(false);
    // const [items, setItems] = useState([]);
    // console.log(localStorage)

const [productName, setProductName] = useState(props.productName);
const [size, setSize] = useState(props.size);
const [color, setColor] = useState(props.color);
const [productPrice, setProductPrice] = useState(props.productPrice);
const [quantity, setQuantity] = useState(props.quantity);
const [description, setDescription] = useState(props.description);
const [disclaimer, setDisclaimer] = useState(props.disclaimer);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
      console.log('deleted: ',props.id)
      axios.delete(`http://localhost:5002/api/oil/${props.id}`)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
      
    };

    const handleUpdate = () => {
  axios.put(`http://localhost:5002/api/oil/${props.id}`, {
    productName,
    size,
    color,
    productPrice,
    quantity,
    description,
    disclaimer
  })
  .then(res => {
    console.log(res.data);
    handleClose();
    
  })
  .catch(err => console.error(err));
};

  return (
    <>
    <div className={styles.hSpacer}></div>
         <div className={styles.detail_one}>
              <div className={styles.row_one}>
                  <div className={styles.spell_icon}></div>
                  <p className={styles.spell_name}>{props.productName}</p>
                  <div className={styles.delete_btn} onClick={handleDelete}></div>
              </div>
              <div className={styles.row_two}>
              <div className={styles.left_col}>
                  <p className={styles.size_text}>Size:</p>
                  <p className={styles.size_value}>{props.size}</p>
              </div>
         

              <div className={styles.right_col}>
                  <p className={styles.cap_text}>Cap:</p>
                  <p className={styles.cap_value}>{props.color}</p>
              </div>
              </div>

              <div className={styles.row_three}>
                <div className={styles.left_col_two}>
                    <p className={styles.instock_text}>Price:</p>
                    <p className={styles.instock_value}><span className={styles.currency_text}>R </span>{props.productPrice}</p>
                </div>
                <div className={styles.right_col}>
                    <p className={styles.price_text}>InStock:</p>
                    <p className={styles.price_value}>{props.quantity}</p>
                </div>
              </div>
              <div className={styles.row_breaker}></div>

              <div className={styles.row_four}>
                <p className={styles.desc_text}>Description: {props.description}</p>
              </div>
              <div className={styles.row_five}>
                <p className={styles.disclaim_text}>Disclaimer: {props.disclaimer}</p>
              </div>

              <div className={styles.row_six}>

              <button className={styles.view_btn}>View Product</button>
              <button className={styles.edit_btn} onClick={handleShow}>Edit Product</button>

        <Modal className={styles.modal} show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Product</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
    <Form.Group controlId="productName">
      <Form.Label>Product Name</Form.Label>
      <Form.Control type="text" placeholder="Enter product name" value={productName} onChange={e => setProductName(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="size">
      <Form.Label>Size</Form.Label>
      <Form.Control type="text" placeholder="Enter size" value={size} onChange={e => setSize(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="color">
      <Form.Label>Color</Form.Label>
      <Form.Control type="text" placeholder="Enter color" value={color} onChange={e => setColor(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="productPrice">
      <Form.Label>Price</Form.Label>
      <Form.Control type="number" placeholder="Enter price" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="quantity">
      <Form.Label>Quantity</Form.Label>
      <Form.Control type="number" placeholder="Enter quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
    </Form.Group>

    <Form.Group controlId="description">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="disclaimer">
      <Form.Label>Disclaimer</Form.Label>
      <Form.Control as="textarea" rows={3} placeholder="Enter disclaimer" value={disclaimer} onChange={e => setDisclaimer(e.target.value)}/>
    </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close   </Button>
    <Button
  undefinedvariant="primary" onClick={handleUpdate}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
{/* 
              <p className={styles.view_text}>View Product</p>
                <p className={styles.edit_text}>Edit Product</p> */}


              </div>

        </div>
        <div className={styles.vSpacer}></div>

    </>
  )
}

export default ProductInfoCard