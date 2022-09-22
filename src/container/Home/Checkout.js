import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { postcoustomer } from "../../Redux/Action/coustomer.action";

// import { Watch } from "react-loader-spinner";

function Checkout(props) {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  const [price, setPrice] = useState(0);



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



  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [Update, setUpdate] = useState();
  const dispatch = useDispatch();

  const coustomer = useSelector((state) => state.coustomer);


  // for dialog box open
  const handleClickOpen = () => {
    setOpen(true);
  };

  // //for dialog box close
  // const handleClose = () => {
  //   setOpen(false);
  // };

  //for form validation
  let coustomer1 = {
    name: yup.string().required("enter name"),
    email: yup.string().email("please enter valid email id").required("please enter email"),
    full_addresh: yup.string().required("please enter addresh"),
    phone: yup.number().required("please enter phone"),
    message: yup.string().required("please enter massage"),
  };

  let schema = yup.object().shape(coustomer1);

  //for  initial value
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      full_addresh: "",
      phone: "",
      message: "",

    },

    validationSchema: schema,
    onSubmit: (value, { resetForm }) => {
      handleSubmitdata(value);
      resetForm();
    },
  });


  // data submit krva mate
  const handleSubmitdata = (value) => {
    dispatch(postcoustomer(value));
    setOpen(false);
    // loadData();
  };

  const columns1 = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: " Email", width: 130 },
    { field: "full_addresh", headerName: "Full Addresh", width: 130 },
    { field: "phone", headerName: "Phone No", width: 70 },
    { field: "message", headerName: "Message", width: 130 },


  ];

  // const loadData = () => {
  //   setData(coustomer.coustomer);
  // };

  // useEffect(() => {
  //   dispatch(doctordata());
  //   loadData();
  // }, []);


const handleClose =() => {
  return (
setData(null)
  )
}


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
            <div className="col-lg-7 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>Check Out Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section */}
      {/* check out section */}
      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Billing Address
                        </button>
                      </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="billing-address-form">
                          <Formik value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                              <TextField
                                margin="dense"
                                id="name"
                                label="name"
                                type="name"
                                fullWidth
                                onChange={formik.handleChange}
                                defaultValue={formik.values.name}
                                helperText={formik.errors.name}
                                error={formik.errors.name ? true : false}
                              />
                              <TextField
                                margin="dense"
                                id="email"
                                label="email"
                                type="email"
                                fullWidth
                                onChange={formik.handleChange}
                                defaultValue={formik.values.email}
                                helperText={formik.errors.email}
                                error={formik.errors.email ? true : false}
                              />
                              <TextField
                                margin="dense"
                                id="full_addresh"
                                label="full_addresh"
                                type="full_addresh"
                                fullWidth
                                onChange={formik.handleChange}
                                defaultValue={formik.values.full_addresh}
                                helperText={formik.errors.full_addresh}
                                error={formik.errors.full_addresh ? true : false}
                              />
                              <TextField
                                margin="dense"
                                id="phone"
                                label="phone"
                                fullWidth
                                onChange={formik.handleChange}
                                defaultValue={formik.values.phone}
                                helperText={formik.errors.phone}
                                error={formik.errors.phone ? true : false}
                              />
                              <TextField
                                margin="dense"
                                id="message"
                                label="message"
                                fullWidth
                                onChange={formik.handleChange}
                                defaultValue={formik.values.message}
                                helperText={formik.errors.message}
                                error={formik.errors.message ? true : false}
                              // className="border rounded py-2"
                              // className="form-control"
                              />
                              <button className=" btn boxed-btn btn-warning" type="submit">Submit Details</button>
                            </Form>
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card single-accordion">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Card Details
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="card-details">
                          <p>Your card details goes here.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="order-details-wrap">
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Your order Details</th>
                      <th>Price</th>
                      <th>Quntity</th>
                      <th>total price</th>
                    </tr>
                  </thead>
                  <tbody className="order-details-body">
                    {
                      cart.carts.map((e) => {
                        return (

                          <>

                            <tr>
                              <td>{e.product_name}</td>
                              <td>{e.price}</td>
                              <td>{e.qnty}</td>
                              <td>{e.qnty * e.price}</td>
                            </tr>
                          </>
                        )
                      })
                    }

                  </tbody>

                </table>
               
              </div>





              <div className="order-details-wrap">
                <table className="order-details">

                  <tbody className="order-details-body">

                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td>{price}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>1%</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>{ price + (price * 1 / 100)}</td>
                      </tr>
                    </tbody>
                  </tbody>

                </table>
                
              </div>
              <button className="boxed-btn" onSubmit={handleClose} >Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Checkout;




