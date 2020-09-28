import React, { Component } from 'react'
import Products from './Products'
import {Route, Redirect} from 'react-router-dom'
import Cart from './Cart'
import Payment from './Payment'

export class Section extends Component {
    render(){
        return(
            <section>
                <Route exact path="/" component={Products} />
                <Route path="/product" component={Products} /> 
                <Route path="/cart" component={Cart} />     
                <Route path="/payment" component={Payment} /> 
                <Redirect to="/" />
            </section>

        )
    }
}

export default Section;