import React from 'react';
import { productsData } from '../../datas';
import Chart from '../../components/chart/Chart';
import {Link} from 'react-router-dom';
import "./ProductDell.css"

const Product = () => {
    return (
        <div className='product'>
    
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to="/newProduct">
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>
    
            <div className="productTop">
    
              <div className="productTopLeft">
                <Chart title="Sale In Month" data={productsData} dataKey='sales' />
              </div>
    
              <div className="productTopRight">
                <div className="productInfoTop">
                  <img src="/image/mc.jfif" alt="Dell LapTop" className='productInfoImg' />
                  <span className='productName'>Dell LapTop</span>
                </div>
    
                <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <div className="productInfoKey">ID: </div>
                    <div className="productInfoValue">132</div>
                  </div>
                  <div className="productInfoItem">
                    <div className="productInfoKey">Name: </div>
                    <div className="productInfoValue">Dell Laptop</div>
                  </div>
                  <div className="productInfoItem">
                    <div className="productInfoKey">Sales: </div>
                    <div className="productInfoValue">$90000</div>
                  </div>
                  <div className="productInfoItem">
                    <div className="productInfoKey">Active: </div>
                    <div className="productInfoValue">Yes</div>
                  </div>
                  <div className="productInfoItem">
                    <div className="productInfoKey">In Stock: </div>
                    <div className="productInfoValue">No</div>
                  </div>
                </div>
    
              </div>
    
            </div>
    
        </div>
      )
    }

export default Product;
