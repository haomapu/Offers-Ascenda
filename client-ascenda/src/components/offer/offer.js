import React, { Component } from "react";

class Offer extends Component {
  render() {
    return (
      <div className="row mt-2 border border-primary rounded">
        <div className="col">Img</div>
        <div className="col-8 d-flex justify-content-between">
          <div>
            <div className="h4">{this.props.title}</div>
            <div>{this.props.description}</div>
          </div>
          <div>{this.props.valid_to}</div>
        </div>
        <div className="col-3">
          {this.props.merchants.map((merchant) => 
              <div key={merchant.id}>
                <div className="h5">Merchant: {merchant.name}</div>
                <div>Distance: {merchant.distance}</div>
              </div>
          )}
        </div>

      </div>
    );
  }
}

export default Offer;
