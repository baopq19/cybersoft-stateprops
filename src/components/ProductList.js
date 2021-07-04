import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    
    renderProduct = () => {
        const products = this.props.productsData;

        const jsx = products.map(item => {
            console.log(item.id);
            return <div key={item.id} className="col-3 mt-2">
                <ProductItem product={item} key={item.id} xemChiTiet={this.props.xemChiTiet}/>
            </div>
        })
        return jsx
    }

    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        )
    }
}
