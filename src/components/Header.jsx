import React, { Component } from 'react'
import Logo from './images/logo.jpg';
import Search from '@material-ui/icons/Search';
import Cart from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import {DataContext} from './Context'

export class Header extends Component {
static contextType = DataContext;
render(){
const {cart} = this.context;
return(
<header className="header">
    <div className="logoWrap">
        <Link to="/">
        {/* <Logo className="logo" /> */}
        <img src={Logo} alt="Logo" />
        </Link>
    </div>
    <div className="headerRight">
        <ul>
            <li>
                <Search />
            </li>
            <li className="headerCart"><span>{cart.length}</span>
                <Link to="/cart">
                <Cart />
                </Link>
            </li>
        </ul>
    </div>
</header>
)
}

}
export default Header