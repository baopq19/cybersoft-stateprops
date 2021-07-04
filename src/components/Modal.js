import React, { Component } from 'react'

export default class Modal extends Component {

    renderCarSpec = () => {
        let carImg = this.props.carImg;
        console.log(carImg);
        return <img className="w-100" src={carImg} alt="..."></img>
    }

    render() {
        return (
            <div className="modal fade" id="showCarModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">aaa</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {this.renderCarSpec()}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
