import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let product = this.props.product;

        return (
            <div className="card">
                <img src={product.img}></img>
                <div className="card-body">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={() => {
                        this.props.xemChiTiet(product.img)
                    }} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#showCarModal">
                    Xem chi tiết
                    </button>
                </div>
            </div>
        )
    }
}
