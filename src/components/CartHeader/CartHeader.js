import React from 'react';
import { BannerCheckoutSection, ViewOrderLink } from './CartHeader.css';
import { Button } from 'reactstrap';

const CartHeader = (props) => {
	return (
		<BannerCheckoutSection className="clearfix">
			<Button color="warning" size="lg" className="float-right">
				<ViewOrderLink to="/viewCart">View My Order</ViewOrderLink>
			</Button>
		</BannerCheckoutSection>
	);
};

export default CartHeader;
