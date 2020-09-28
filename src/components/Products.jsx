import React,{Component} from 'react'
// import {Link} from 'react-router-dom'
import {DataContext} from './Context'
import Footer from './Footer'
import Sort from "./images/icon-sort.jpg";
import Filter from "./images/icon-filter.jpg";

export class Products extends Component{

static contextType = DataContext;

render(){
const {products} = this.context;
return(
    <>
    <div className="filterWrap">
        <ul>
            <li><img src={Sort} alt="Icon Sort" /> Sort</li>
            <li><img src={Filter} alt="Icon Filter" /> Filter</li>
        </ul>
    </div>
<div className="product">
    
    {
    products.map(product => (
    <div className="card" key={product._id}>
        <img src={product.src} alt="" />
        <h3>{product.title}</h3>
        <span className="price">₹ {product.price}</span> <span className="oldPrice">{product.oldPrice}</span> <span className="discount">{product.disc}</span>
        <div className="text-center mt-10"> <button onClick={() => this.context.addCart(product._id)}>Add to Cart</button></div>

    </div>
    ))}
    <Footer />
</div>
</>
)
}
}

export default Products;