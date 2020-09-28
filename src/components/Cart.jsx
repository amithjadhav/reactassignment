import React, { Component } from 'react'
import {DataContext} from './Context'
import IconDecrease from '@material-ui/icons/RemoveCircleOutline';
import IconIncrease from '@material-ui/icons/AddCircleOutline';
import IconRemove from '@material-ui/icons/Clear';
import {Link} from 'react-router-dom'

export class Cart extends Component{
static contextType = DataContext;
componentDidMount(){
    this.context.getTotal();
}
render(){
const {cart, increase, decrease, removeProduct, total} = this.context;
if(cart.length === 0){
return <div className="noParoduct">
    <h2>No Products Availble in Cart</h2>
    <p>Kindly Add Product</p>
    <Link to="/">Add Product</Link>
</div>
} else{
return(
<>
    {
    cart.map(item =>(
    <div className="cart" key={item._id}>
        <img src={item.src} alt="" />
        <div className="box">
            <h2>{item.title}</h2>
            <span className="price">₹ {item.price * item.count}</span>
            <div className="amount">
                <button className="count" onClick={()=> decrease(item._id)}>
                    <IconDecrease className="amountIcon" /></button>
                <span>{item.count}</span>
                <button className="count" onClick={()=> increase(item._id)}>
                    <IconIncrease className="amountIcon" /> </button>
            </div>
        </div>
        <div className="delete" onClick={()=> removeProduct(item._id)}>
            <IconRemove className="iconDelete" />
        </div>
    </div>
    ))
    }
    <div className="tatal">
        <div className="caption">Total</div>
<div className="totalAmount">₹ {total}</div>
    </div>
    <div className="paymebtBtn text-center">
        <Link to="/payment">Make Payment</Link>
    </div>
</>
)
}

}
}

export default Cart;