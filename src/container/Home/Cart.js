import { Table } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADD, DLT, REMOVE } from '../../Redux/Action/Cart.action';



function Cart(props) {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  const [price, setPrice] = useState(0);
  // console.log(price);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const { id } = useParams();
  console.log("cart id", id);


  const dlt = (id) => {
    dispatch(DLT(id))
  }


  // add data


  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }



  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item))
  }

  const total = () => {
    let price = 0;
    cart.carts.map((ele, k) => {
      price = ele.price * ele.qnty + price
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total])


  const handleClose = () => {
    setAnchorEl(null);
  };

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
                <p>Fresh and Organic</p>
                <h1>Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section */}
      {/* cart */}

      <div className="cart-section mt-150 mb-150">
        {
          cart.carts.length ?
            <div className="container">
              <div className="row">




                <div className="col-lg-8 col-md-12">
                  <div className="cart-table-wrap">
                    <table className="cart-table">
                      <thead className="cart-table-head">
                        <tr className="table-head-row">
                          <th className="product-remove" />
                          <th className="product-image">Product Image</th>
                          <th className="product-name">Name</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cart.carts.map((e) => {
                            return (

                              <>
                                <tr className="table-body-row">
                                  {/* <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p> */}
                                  <td className="product-remove"><a href="#" onClick={() => dlt(e.id)}><i className="fas fa-trash smalltrash" /></a></td>
                                  <td className="product-image"><img src={e.url} alt /></td>
                                  <td className="product-name">{e.product_name}</td>
                                  <td className="product-price">{e.price}</td>
                                  <td className="product-quantity">
                                    
                                  <div className='justify-content-between align-items-center' style={{cursor:"pointer",background:"#ddd",color:"#111"}}>
                                    {/* <input type="number" placeholder={0} /> */}

                                    <span style={{ fontSize: 24 }} onClick={e.qnty <= 1 ? () => dlt(e.id) : () => remove(e)}>-</span>
                                    <span style={{ fontSize: 22 }}>{e.qnty}</span>
                                    <span style={{ fontSize: 24 }} onClick={() => send(e)}>+</span>
</div>
                                  </td>
                                  <td className="product-total">{e.qnty}</td>
                                </tr>
                              </>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>



                <div className="col-lg-4">
                  <div className="total-section">
                    <table className="total-table">
                      <thead className="total-table-head">
                        <tr className="table-total-row">
                          <th>Total</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="total-data">
                          <td><strong>Subtotal: </strong></td>
                          <td>{price}</td>
                        </tr>
                        <tr className="total-data">
                          <td><strong>Shipping: </strong></td>
                          <td>FREE</td>
                        </tr>
                        <tr className="total-data">
                          <td><strong>Total: </strong></td>
                          <td>{price}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="cart-buttons">
                      <a href="cart.html" className="boxed-btn">Update Cart</a>
                      <a href="checkout.html" className="boxed-btn black">Check Out</a>
                    </div>
                  </div>
                  <div className="coupon-section">
                    <h3>Apply Coupon</h3>
                    <div className="coupon-form-wrap">
                      <form action="index.html">
                        <p><input type="text" placeholder="Coupon" /></p>
                        <p><input type="submit" defaultValue="Apply" /></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>



            </div> :

            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
              <i className='fas fa-close smallclose'
                onClick={handleClose}
                style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
              <p style={{ fontSize: 22 }}>Your carts is empty</p>
              <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
            </div>
        }



      </div>






    </div>



  );
}

export default Cart;
