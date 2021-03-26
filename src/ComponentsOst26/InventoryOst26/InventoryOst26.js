import React from 'react';
import getInventory from '../../Services/inventoryService';
import { getCart, addItem, deleteItem, checkout } from '../../Services/cartService';

class InventoryOst26 extends React.Component{

    state = {
        products: [],
        cartItems: [],
        total: 0,
        checkout: false
    }

    componentDidMount(){
        getInventory().then(response => {
            this.setState({
                products: response.data
            })
        })

        getCart().then(response => {
            this.setState({
                cartItems: response.data
            })

            if(this.state.cartItems.length !== 0){
                let total = 0;
                this.state.cartItems.forEach(items => {
                    total += (items.price * items.quantity);
                });
                this.setState({
                    total
                })
            }
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.checkout !== this.state.checkout){
            getInventory().then(response => {
                this.setState({
                    products: response.data
                })
            })
    
            getCart().then(response => {
                this.setState({
                    cartItems: response.data
                })
            })
        }

        if(prevState.cartItems !== this.state.cartItems){
            if(this.state.cartItems.length !== 0){
                let total = 0;
                this.state.cartItems.forEach(items => {
                    total += (items.price * items.quantity);
                });
                this.setState({
                    total,
                    checkout: false
                })
            }
        }
    }

    displayProducts = () => {
        return this.state.products.map((product, index) => {
            let button = <input onClick={this.addToCart} ref={el => this.add_btn = el } type="submit" data-id={product.sku} className="btn btn-success" value="Add" />
            if(product.quantity <= 0){
                button = <input onClick={this.addToCart} ref={el => this.add_btn = el } type="submit" className="btn btn-dark" value="Out of stock" disabled={true} />
            }
            return (                
                <tr key={index}>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
                <td>{button}</td>
                </tr>
            )
        })
    }

    displayCart = () => {
        if(this.state.cartItems.length !== 0 ){
            return this.state.cartItems.map((item, index) => {
               
                return (                
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td><input onClick={this.deleteFromCart} type="submit" data-id={item.sku} className="btn btn-danger" value="Delete" /></td>
                    </tr>
                )
            })
        }
    }

    addToCart = (e) => {
        e.preventDefault();
        let sku = e.target.getAttribute('data-id');
        
        let product = this.state.products.find(product => product.sku === sku)

        addItem(product).then(response => {
            this.setState({
                cartItems: response.data
            })
        });
    }

    deleteFromCart = (e) => {
        e.preventDefault();
        let sku = e.target.getAttribute('data-id');

        deleteItem({ sku }).then(response => {
            this.setState({
                cartItems: response.data
            })
        });
    }

    checkOut = (e) => {
        e.preventDefault();
        checkout(this.state.cartItems).then(response => {
            this.setState({
                cartItems: [],
                total: 0,
                checkout: true
            })
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid mb-4 mt-4 d-flex justify-content-center" >
                    <h4 style={{ 
                    backgroundColor: 'gray',
                    padding: '30px',
                    width: '50%',
                    color: '#fff'
                }} >Assignment #3 - OBIKA STANLEY OST26</h4>
                </div>

                <div className="row">
                    <div className="col-sm-8" >
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th>SKU</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Add</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.displayProducts()}
                            </tbody>
                        </table>     
                    </div>

                    <div className="col-sm-4" >
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.displayCart()}
                            </tbody>
                        </table>    

                        <div className="d-flex justify-content-between">
                            <input onClick={this.checkOut} type="submit" className="btn btn-primary" value="Checkout" />
                            <h1>${this.state.total.toFixed(2)}</h1>
                        </div>

                    </div>               
                </div>
        
            </React.Fragment>
        )
    }
}

export default InventoryOst26;