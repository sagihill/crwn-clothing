import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

import { createStructuredSelector } from "reselect";

export const CheckoutItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" className="" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			<span className="remove-button">&#10005;</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
