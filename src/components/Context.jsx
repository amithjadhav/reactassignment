import React, {Component} from 'react'
// import product1 from './images/product1.jpg';
// import product2 from './images/product2.jpg';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title" : "Item 1",
                "src" : "https://amithjadhav.github.io/htmldemo.github.io/product1.jpg",
                "price": "319",
                "oldPrice": "999",
                "disc":"64% off",
                "count": 1

            },
            {
                "_id": "2",
                "title" : "Item 2",
                "src" : "https://amithjadhav.github.io/htmldemo.github.io/product2.jpg",
                "price": "319",
                "oldPrice": "999",
                "disc":"64% off",
                "count": 1
            },
            {
                "_id": "3",
                "title" : "Item 3",
                "src" : "https://amithjadhav.github.io/htmldemo.github.io/product1.jpg",
                "price": "319",
                "count": 1
            },            
            {
                "_id": "4",
                "title" : "Item 4",
                "src" : "https://amithjadhav.github.io/htmldemo.github.io/product2.jpg",
                "price": "319",
                "oldPrice": "999",
                "disc":"64% off",
                "count": 1
            },            
            {
                "_id": "5",
                "title" : "Item 5",
                "src" : "https://amithjadhav.github.io/htmldemo.github.io/product1.jpg",
                "price": "319",
                "oldPrice": "999",
                "disc":"64% off",
                "count": 1
            },            
            {
                "_id": "6",
                "title" : "Item 6",
                "src" : "https://amithjadhav.github.io/htmldemo.github.io/product2.jpg",
                "price": "319",
                "oldPrice": "999",
                "disc":"64% off",
                "count": 1
            },            
            {
                "_id": "7",
                "title" : "Item 7",
                "src" : "https://amithjadhav.github.io/htmldemo.github.io/product1.jpg",
                "price": "319",
                "oldPrice": "999",
                "disc":"64% off",
                "count": 1
            },            
            {
                "_id": "8",
                "title" : "Item 8",
                "src" : "https://amithjadhav.github.io/htmldemo.github.io/product2.jpg",
                "price": "319",
                "oldPrice": "999",
                "disc":"64% off",
                "count": 1
            },
        ],
        cart: [],
        total: 0
    };

    addCart = (id) => {
        const {products, cart} = this.state;
        const data = products.filter(product => {
            return product._id === id
        })
        this.setState({cart: [...cart,...data]})
    }

    decrease = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id => {
        const {cart} = this.state;
        cart.forEach((item, index) => {
            if(item._id === id){
                cart.splice(index, 1)
            }
        })
        this.setState({cart: cart})
        this.getTotal();
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };

    render () {
        const {products, cart, total} = this.state;
        const {addCart, decrease, increase, removeProduct, getTotal} = this;        
        return(
            <DataContext.Provider value={{products, addCart, cart, decrease, increase, removeProduct, total, getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}