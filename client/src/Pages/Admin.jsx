import React, { useEffect, useState } from "react";
import MainNavBar from "../Components/NavBar/MainNavBar";
import styles from "../Pages/Admin.module.scss";
import Logo from "../Components/Logo/Logo";
import AddProductForm from "../Components/Forms/AddProductForm";
import AdminProductInfoCard from "../Components/Cards/AdminProductInfoCard";
import { useNavigate } from "react-router-dom";

import AdminProductCardInfoCard from "../Components/Cards/AdminProductInfoCard";
import axios from "axios";

function Admin() {
  const [showModal, setShowModal] = useState(false);

  const [product, setProduct] = useState();
  const [updateProducts, setUpdateProducts] = useState(false);

  const [productName, setProductName] = useState("");
  const [size, setSize] = useState("");
  // const [ capColor, setCapColor] = useState();
  const [stock, setStock] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [disclaimer, setDisclaimer] = useState("");
  const [description, setDescription] = useState("");

  const [color, setColor] = useState("");
  const [black, setBlack] = useState("");
  const [white, setWhite] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");

  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/oils")
      .then((res) => {
        let productData = res.data;
        let renderProducts = productData.map((item) => (
          <AdminProductCardInfoCard
            key={item._id}
            id={item._id}
            quantity={item.quantity}
            productName={item.productName}
            size={item.size}
            color={item.color}
            productPrice={item.productPrice}
            stock={item.stock}
            description={item.description}
            disclaimer={item.disclaimer}
          />
        ));
        setProduct(renderProducts);
        setUpdateProducts(false);
        console.log(productData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateProducts]);

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
      // stock: stock,
      color: document.getElementById("color").value,
      // capColor: capColor
    };
    console.log(payload);
    axios.post("http://localhost:5002/api/oil", payload);
    setUpdateProducts(true)
      .then((res) => console.log(res))
      .catch((err) => console.log("error occurred when submitting:", err));
  };

  //         const handleModalClose = () => setShowModal(false);
  //         const handleModalOpen = () => setShowModal(true);

  //         let renderProducts = productData.map((item) =>
  //   <AdminProductCardInfoCard
  //     key={item._id}
  //     quantity={item.quantity}
  //     productName={item.productName}
  //     size={item.size}
  //     color={item.color}
  //     productPrice={item.productPrice}
  //     stock={item.stock}
  //     description={item.description}
  //     disclaimer={item.disclaimer}
  //     handleModalOpen={handleModalOpen}
  //   />
  // );

  return (
    <>
      <MainNavBar />
      <div className={styles.main_container}>
        <Logo />
        <div className={styles.left_side}>
          <p className={styles.shop_heading}>The Oiloasis Shop: Oil Spells</p>

          <div className={styles.spells_container}>
            {product}
            {/* <AdminProductInfoCard/> */}
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.add_form_container}>
            <div className={styles.heading_cont}>
              <p className={styles.add_product_text}>Add A Oil Product</p>
            </div>

            <form
              className={styles.form_input_container}
              onSubmit={handleSubmit}
            >
              <input
                className={styles.product_name}
                placeholder="Product Name*"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              ></input>
              <input
                className={styles.product_price}
                placeholder="Product Price*"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              ></input>
              <input
                className={styles.product_desc}
                placeholder="Product Description*"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
              <input
                className={styles.product_disclaim}
                placeholder="Product Disclaimer*"
                value={disclaimer}
                onChange={(e) => setDisclaimer(e.target.value)}
              ></input>
              <select
                className={styles.product_size}
                placeholder="Select Size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option>Select Size</option>
                <option>5ml</option>
                <option>10ml</option>
                <option>15ml</option>
              </select>
              <select className={styles.select_color} id="color">
                <option>Select Color</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
              </select>
              <input
                className={styles.product_quantity}
                placeholder="Quantity*"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
              <button type="submit" className={styles.new_product_btn}>
                ADD NEW PRODUCT
              </button>
            </form>
          </div>
          {/* <AddProductForm/>  */}
        </div>
      </div>
    </>
  );
}

export default Admin;
