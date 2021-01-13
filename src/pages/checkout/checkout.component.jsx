import React from "react";

import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectTotalPrice } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, totalPrice }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} item={cartItem} />
			))}
			<div className="total">{`Total: $${totalPrice}`}</div>
			<div className="test-warning">
				*Please use the following test credit card for payment*
				<br />
				4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
			</div>
			<StripeCheckoutButton price={totalPrice} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectTotalPrice,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
