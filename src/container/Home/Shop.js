import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productdata } from '../../Redux/Action/Product.action';
import { categorydata } from '../../Redux/Action/category.action'
import Navbar from "./Navbar";
import { ADD } from '../../Redux/Action/Cart.action';





function Shop(props) {

    const [menuData, setMenuData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const dispatch = useDispatch();
    const [uid, setUid] = useState()
    const product = useSelector((state) => state.Product);
    console.log("product111",product);

    const category = useSelector((state) => state.category);
console.log("category",category);

    // const [finalData, setfinalData] = useState(product);
    // // console.log(data);
  

    const uniqueList = [
        "ALL",
        ...new Set(
            product.product.map((curElem) => {
                return curElem.category;
            })
        ),
    ];
    console.log("uniqcategory", uniqueList);



    useEffect(() => {
        dispatch(productdata());
        setMenuData(product.product)
    }, []);


    useEffect(() => {
        dispatch(categorydata());
        setCategoryData(category.category)
    }, []);



    const filterItem = (category) => {
        console.log("category", category);
        if (category === "All") {
            setMenuData(product);
            return;
        }

        const updatedList = product.product.filter((curElem1, index) => {
            return (
                curElem1.category === category
            )

        });
        setMenuData(updatedList);
        console.log("updatedList", updatedList);
    };


    let finalData = menuData.length > 0 ? menuData : product.product;


  

  
  
    const send = (e)=>{
      console.log("e",e);
      dispatch(ADD(e));
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
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end breadcrumb section */}


            {/* products */}
            <div className="product-section mt-150 mb-150">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-md-12">
                            <div className="product-filters"> <ul>
                                    {uniqcategory.map((valcat, index) => {
                                        return (
                                            <li data-filter=".strawberry">{valcat}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div> */}
                    <Navbar filterItem={filterItem} uniqueList={uniqueList} />
                    <div className="row product-lists">
                        {finalData && finalData.map((val, index) => {
                            return (
                                <>
                                    {/* <li>{val.product_name}</li> */}
                                    <div className="col-lg-4 col-md-6 text-center">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                {/* <a href="single-product.html"><img src={val.url} alt="product image" width="200px" height="250px" /></a> */}
                                                <Link to={`/Singleproduct/${val.id}`}><img src={val.url} alt="image" width="200px" height="250px" /></Link>
                                            </div>
                                            <h3>{val.product_name}</h3>
                                            <p className="product-price"><span>Per Kg</span> {val.price} </p>
                                            {/* <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a> */}
                                            {/* <Link to={`/Cart/${val.id}`} className="cart-btn" onClick={()=> send(val)}><i className="fas fa-shopping-cart" />Add to Cart</Link> */}
                                            <button className='cart-btn' onClick={()=> send(val)}>add to cart</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })}


                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="pagination-wrap">
                                <ul>
                                    <li><a href="#">Prev</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a className="active" href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">Next</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >

    );
}

export default Shop;