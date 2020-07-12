import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button, ButtonGroup } from 'reactstrap';

// This component is currently not being used but once all menu photos are obtained, the menu will use this component which has an img element
const MenuCard = (props) => {
	return (
		<Card style={{ width: '30%', margin: '1em' }}>
			<CardBody>
				<CardTitle>P10. Pho Mekong</CardTitle>
			</CardBody>
			<section id="P10" style={{ display: 'flex', justifyContent: 'center' }}>
				<img
					width="90%"
					src="https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg"
					alt="Card image cap"
				/>
			</section>
			<CardBody>
				<CardText>Pho with assorted beef, rare, well done, beef balls, and assorted vegatables.</CardText>
				<ButtonGroup style={{ display: 'flex' }}>
					<Button>Medium</Button>
					<Button>Large</Button>
					<Button>X-Large</Button>
				</ButtonGroup>
				{/* <Button color="primary">Add to Order</Button>{' '} */}
			</CardBody>
		</Card>
	);
};

export default MenuCard;
