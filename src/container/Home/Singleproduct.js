import React, { useEffect, useState } from 'react';
import { productdata, singleproductdata } from '../../Redux/Action/Product.action';
import { params, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";



function Singleproduct(props) {
  const [data, setData] = useState([]);
  console.log("DATA single product", data[0]);

  const product = useSelector((state) => state.Product);
  console.log("product", product);

  const { id } = useParams();


  const dispatch = useDispatch();



  const compare = () => {
    let comparedata = product.product.filter((e) => {
      return e.id == id
    });

    setData(comparedata);

  }

  // add data




  useEffect(() => {
    compare();
  }, [id])





  return (
    <div>
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn"><i className="fas fa-window-close" /></span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Search For:</h3>

                  <input type="text" placeholder="Keywords" />
                  <button type="submit">Search <i className="fas fa-search" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end search arewa */}
      {/* breadcrumb-section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>See more Details</p>
                <h1>Single Product</h1>
                <pre>aaaa</pre>


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section */}
      {/* single product */}
      {data && data.map((ele, index) => {
        return (
          <div className="single-product mt-150 mb-150">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="single-product-img">
                    <img src={ele.url} alt />
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="single-product-content">
                    <h3>{ele.product_name}s</h3>
                    <p className="single-product-pricing"><span>Price Per Unit.</span>{ele.price}</p>
                    <p>{ele.description}</p>
                    <div className="single-product-form">
                      <form action="index.html">
                        <input type="number" placeholder={0} />
                      </form>
                      <a href="cart.html" className="cart-btn" ><i className="fas fa-shopping-cart" /> Add to Cart</a>
                      <p><strong>Categories: </strong>{ele.category}</p>
                    </div>
                    <h4>Share:</h4>
                    <ul className="product-share">
                      <li><a href><i className="fab fa-facebook-f" /></a></li>
                      <li><a href><i className="fab fa-twitter" /></a></li>
                      <li><a href><i className="fab fa-google-plus-g" /></a></li>
                      <li><a href><i className="fab fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* end single product */}
      {/* more products */}
      <div className="more-products mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3><span className="orange-text">Related</span> Products</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt /></a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price"><span>Per Kg</span> 85$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt /></a>
                </div>
                <h3>Berry</h3>
                <p className="product-price"><span>Per Kg</span> 70$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt /></a>
                </div>
                <h3>Lemon</h3>
                <p className="product-price"><span>Per Kg</span> 35$ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Singleproduct;









// // useEffect(() => {
// //  const data1 =  dispatch(singleproductdata(data.id))
// //   setData(data);
// // console.log("single product",data1);
// // }, [id])

