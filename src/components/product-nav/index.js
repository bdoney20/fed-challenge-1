import React from 'react';
import './index.css';

const ProductNav = () => {
    return (
        <div className="product-nav">
            <ul>
                <li>
                    <a className="product" href="/">
                        <span>Blog</span>
                    </a>
                </li>
                <li>
                    <a className="product" href="/">
                        <span>Nourish</span>
                    </a>
                </li>
                <li>
                    <a className="product" href="/">
                        <span>Shop</span>
                    </a>
                </li>
            </ul>    
        </div>
    )

}

export default ProductNav;