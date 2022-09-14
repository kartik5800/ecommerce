{
    cart.carts.length ? 
    <div className='card_details' style={{width:"24rem",padding:10}}>
        <Table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.carts.map((e)=>{
                        return (
                            <>
                                <tr>
                                    <td>
                                    {/* <NavLink to={`/cart/${e.id}`}   onClick={handleClose}> */}
                                    {/* <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                    </NavLink>    */}
                                    </td>
                                    <td>
                                        <p>{e.rname}</p>
                                        <p>Price : ₹{e.price}</p>
                                        <p>Quantity : {e.qnty}</p>
                                        <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                            <i className='fas fa-trash smalltrash'></i>
                                        </p>
                                    </td>

                                    <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                    <i className='fas fa-trash largetrash'></i>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
                <p className='text-center'>Total :₹ {price}</p>
            </tbody>
        </Table>
    </div>:
    
<div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
<i className='fas fa-close smallclose'
onClick={handleClose}
 style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
<p style={{fontSize:22}}>Your carts is empty</p>
<img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
</div>
}





























        {/* <div className="container">
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
                          <tr className="table-body-row">
                            <td className="product-remove"><a href="#"><i className="far fa-window-close" /></a></td>
                            <td className="product-image"><img src="assets/img/products/product-img-1.jpg" alt /></td>
                            <td className="product-name">Strawberry</td>
                            <td className="product-price">$85</td>
                            <td className="product-quantity"><input type="number" placeholder={0} /></td>
                            <td className="product-total">1</td>
                          </tr>

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
                            <td>$500</td>
                          </tr>
                          <tr className="total-data">
                            <td><strong>Shipping: </strong></td>
                            <td>$45</td>
                          </tr>
                          <tr className="total-data">
                            <td><strong>Total: </strong></td>
                            <td>$545</td>
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
              </div> */}





