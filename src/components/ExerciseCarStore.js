import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'


export default class ExerciseCarStore extends Component {
    products = [
        { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000},
        { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000},
        { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000},
        { id: 4, name: 'steel car', img: './images/products/steel-car.jpg', price: 4000}
    ];

    state = {
        carImg: './images/products/black-car.jpg'
    }

    xemChiTiet = (img) => {
        this.setState({
            carImg: img
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <Modal carImg={this.state.carImg}/>
                <ProductList productsData={this.products} xemChiTiet={this.xemChiTiet}/>
            </div>
        )
    }
}
