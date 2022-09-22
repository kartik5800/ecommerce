import React, { useEffect, useState } from 'react';
import { productdata, singleproductdata } from '../../Redux/Action/Product.action';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../../Redux/Action/Cart.action';
import Slider from 'react-slick';


function Singleproduct(props) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  console.log("DATA single product", data[0]);

  const product = useSelector((state) => state.Product);
  console.log("product", product);

  const { id } = useParams();

  console.log(id);


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




  const send = (e) => {
    console.log("e", e);
    dispatch(ADD(e));
  }



  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
                <p>See more Details</p>
                <h1>Single Product</h1>
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
                    <img src={ele.url} alt={ele.url} height='370px' width='370px'/>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="single-product-content">
                    <h3>{ele.product_name}s</h3>
                    <p className="single-product-pricing"><span>Price Per Unit.</span>{ele.price}</p>
                    <p>{ele.description}</p>
                    <div className="single-product-form">
                    
                      <a className='cart-btn' onClick={() => send(ele)}><i className="fas fa-shopping-cart" />add to cart</a>
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
            <Slider {...settings}>
              {product && product.product.map((val, index) => {
                return (
                  <>
                    <div className="p-3 text-center">
                      <div className="single-product-item">
                        <div className="product-image">
                          <Link to={`/Singleproduct/${val.id}`}><img src={val.url} alt="image" width="200px" height="250px" /></Link>
                        </div>
                        <h3>{val.product_name}</h3>
                        <p className="product-price"><span>Per Kg</span> {val.price} </p>
                        <a className='cart-btn' onClick={() => send(val)}>add to cart</a>
                      </div>
                    </div>
                  </>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Singleproduct;







