const data = [
	{
		header : 'Appetizers',
		list   : [
			{ code: 'A1', name: 'Crispy Spring Rolls', price: 495 },
			{ code: 'A2', name: 'Vegetarian Crispy Spring Rolls', price: 495 },
			{ code: 'A3', name: 'Shrimp Chips', price: 395 },
			{ code: 'A4', name: 'Crispy Fried Wontons', price: 495 },
			{
				code: 'A5',
				name: 'Fresh Salad Rolls',
				price: 495,
				desc:
					'Rice paper rolls served with fine vermicelli noodles, lettuce, cucumber, and served with sweet home-made sauce. Rolled with one of the options below. If you prefer a fish sauce as dip, let us know.',
				subOptions: [ 'A. Shrimp & Pork', 'B. Grilled Beef', 'C. Grilled Chicken', 'D. Vegetables' ]
			},
			{ code: 'A6', name: 'Marianted Minced Pork', price: 595 },
			{ code: 'A8', name: 'Golden Shrimp', price: 995 },
			{
				code: 'A9A',
				name: 'Appetizer Platter A',
				price: 1795,
				desc: 'Cripsy Spring Rolls (4), Spring & Pork Salad Rolls (4), Fried Wontons (8), Shrimp Chips (8)'
			},
			{
				code: 'A9B',
				name: 'Appetizer platter B',
				price: 2295,
				desc: 'Cripsy Spring Rolls (3), Spring & Pork Salad Rolls (3), Fried Wontons (6), Shrimp Chips (6)'
			}
		]
	},
	{
		header : 'Soups',
		desc   :
			'These are appetizer soups, there are no noodles. All soup bases are bone bone based. We do not have vegetarian broth.',
		list   : [
			{ code: 'A10', name: 'Vegetable soup', price: 595 },
			{ code: 'A11S', name: 'Wonton (shrimp & pork filling) Soup - Small', price: 695 },
			{ code: 'A11L', name: 'Wonton (shrimp & pork filling) Soup - Large', price: 695 },
			{ code: 'A12A', name: 'Tom Yum Soup - Chicken', price: 695 },
			{ code: 'A12B', name: 'Tom Yum Soup - Vegetables', price: 595 },
			{ code: 'A12C', name: 'Tom Yum Soup - Seafood', price: 795 },
			{ code: 'A12D', name: 'Tom Yum Soup - Beef', price: 695 }
		]
	},
	{
		header : 'Salads',
		desc   : 'Julienned mangoes, cucumber, carrots and bell peppers, topped with mint, fish sauce and peanuts.',
		list   : [
			{ code: 'G1', name: 'Mango Salad', price: 745 },
			{ code: 'G2', name: 'Shrimp Mango Salad', price: 995 }
		]
	},
	{
		header : 'Pho',
		desc   :
			'Pho is a popular Vietnamese noodle soup. Beef bones are simmered for many hours in combination with herbs and spices that help to bring out the flavour. It is served with traditional rice noodles and your choice of meat, or vegetables. Topped with green and white onions and black pepper.',
		list   : [
			{ code: 'P0', name: 'Plain (only noodles)', subOptions: [ 'M: 7.00', 'L: 8.00', 'XL: 9.00' ] },
			{ code: 'P1', name: 'Rare beef', subOptions: [ 'M: 9.95', 'L: 10.95', 'XL: 11.95' ] },
			{ code: 'P2', name: 'Rare beef with beef ball', subOptions: [ 'M: 9.95', 'L: 10.95', 'XL: 11.95' ] },
			{
				code: 'P3',
				name: 'Rare beef with beef ball and well-done beef',
				subOptions: [ 'M: 9.95', 'L: 10.95', 'XL: 11.95' ]
			},
			{ code: 'P4', name: 'Well-done beef', subOptions: [ 'M: 9.95', 'L: 10.95', 'XL: 11.95' ] },
			{ code: 'P5', name: 'Well-done beef with beef-ball', subOptions: [ 'M: 9.95', 'L: 10.95', 'XL: 11.95' ] },
			{ code: 'P6', name: 'Beef ball', subOptions: [ 'M: 9.95', 'L: 10.95', 'XL: 11.95' ] },
			{ code: 'P7', name: 'Chicken', subOptions: [ 'M: 9.95', 'L: 10.95', 'XL: 11.95' ] },
			{ code: 'P8', name: 'Vegetables', subOptions: [ 'M: 9.95', 'L: 10.95', 'XL: 11.95' ] },
			{ code: 'P9', name: 'Vegetables', subOptions: [ 'M: 9.95', 'L: 10.95', 'XL: 11.95' ] },
			{
				code: 'P10',
				name: 'House Special',
				desc: '(Assorted beef, with vegetables and shrimp)',
				subOptions: [ 'M: 10.95', 'L: 12.95', 'XL: 12.95' ]
			},
			{ code: 'P11', name: 'Shrimp', subOptions: [ 'M: 10.95', 'L: 12.95', 'XL: 12.95' ] }
		]
	},
	{
		header : 'Noodle Soups',
		list   : [
			{ code: 'H1', name: 'Spicy Huế beef vermicelli soup (Bún bò Huế)', price: 1145 },
			{ code: 'H3', name: 'Wonton and pork egg noodle soup', price: 1145 },
			{ code: 'H4', name: 'Wonton and pork rice noodle soup', price: 1145 },
			{ code: 'H5', name: 'Seafood egg noodle soup', price: 1145 },
			{ code: 'H6', name: 'Seafood rice noodle soup', price: 1145 },
			{ code: 'H7', name: 'Special egg noodle soup (shrimp, wontons, chicken and pork)', price: 1145 }
		]
	},
	{
		header : 'Steamed Rice Dishes',
		list   : [
			{ code: 'R1', name: 'Rice with grilled lemongrass porkchop', price: 1145 },
			{ code: 'R2', name: 'Rice with grilled lemongrass chicken', price: 1145 },
			{ code: 'R3', name: 'Rice with grilled beef', price: 1145 },
			{ code: 'R4', name: 'Rice with grilled lemongrass chicken & porkchop', price: 1345 },
			{ code: 'R5', name: 'Stir fry chicken with satay', price: 1195 },
			{ code: 'R6', name: 'Stir fry beef with satay', price: 1195 },
			{ code: 'R6', name: 'Stir fry chicken with cashews', price: 1195 },
			{ code: 'R6', name: 'Stir fry shrimp with cashews', price: 1495 },
			{ code: 'R6', name: 'Combination Stir fry (shrimp, beef, chicken, pork)', price: 1495 }
		]
	},
	{
		header : 'Fried Rice Dishes',
		desc   : 'All fried rice dishes contain egg, carrots, peas and onions.',
		list   : [
			{ code: 'F1', name: 'Fried rice with grilled lemongrass porkchop', price: 1295 },
			{ code: 'F2', name: 'Fried rice with grilled lemongrass chicken', price: 1295 },
			{ code: 'F3', name: 'Fried rice with grilled beef chicken', price: 1295 },
			{ code: 'F4', name: 'Fried rice with vegetables', price: 1245 },
			{ code: 'F5', name: 'Fried rice with minced BBQ pork', price: 1295 },
			{ code: 'F6', name: 'Fried rice with minced shrimp', price: 1495 },
			{ code: 'F7', name: 'Special Mekong Fried rice (minced pork, chicken & shrimp)', price: 1495 },
			{ code: 'F8', name: 'Fried rice with grilled lemongrass chicken and porkchop', price: 1495 }
		]
	},
	{
		header : 'Vermicelli',
		desc   : 'All vermicelli dishes are served with a fish sauce dressing.',
		list   : [
			{ code: 'V1', name: 'Vermicelli with tofu and vegetarian crispy rolls', price: 1095 },
			{ code: 'V2A', name: 'Vermicelli with spring roll and grilled pork', price: 1195 },
			{ code: 'V2B', name: 'Vermicelli with spring roll and grilled beef', price: 1195 },
			{ code: 'V2C', name: 'Vermicelli with spring roll and grilled chicken', price: 1195 },
			{ code: 'V3A', name: 'Vermicelli with spring roll, marianated minced pork and grilled pork', price: 1295 },
			{ code: 'V3B', name: 'Vermicelli with spring roll, marianated minced pork and grilled beef', price: 1295 },
			{
				code: 'V3C',
				name: 'Vermicelli with spring roll, marianated minced pork and grilled chicken',
				price: 1295
			},
			{ code: 'V4A', name: 'Vermicelli with spring roll and satay chicken', price: 1295 },
			{ code: 'V4B', name: 'Vermicelli with spring roll and satay beef', price: 1295 }
		]
	},
	{
		header : 'Congee',
		list   : [
			{ code: 'C1', name: 'Chicken congee', price: 895 },
			{ code: 'C2', name: 'Pork congee', price: 895 },
			{ code: 'C3', name: 'Shrimp congee', price: 995 },
			{ code: 'C4', name: 'Assorted (pork, beef, shrimp, chicken) congee', price: 995 },
			{ code: 'C5', name: 'Seafood (imitation crab, fish balls, scallop, mussell, shrimp) congee', price: 995 }
		]
	},
	{
		header : 'Pad Thai',
		desc   :
			'All pad thai dishes contain onions, egg, beansprouts, cabbage and tofu. The home made pad thai sauce contains dairy and shellfish ingredients and peanut butter. Please choose between MILD, MEDIUM, or SPICY',
		list   : [
			{ code: 'T1', name: 'Vegetable Pad Thai', price: 1095 },
			{ code: 'T2', name: 'Chicken Pad Thai', price: 1195 },
			{ code: 'T3', name: 'Beef Pad Thai', price: 1195 },
			{ code: 'T4', name: 'Shrimp Pad Thai', price: 1395 }
		]
	},
	{
		header : 'Spicy Tom Yum Noodle Soup',
		desc   : 'All tom yum noodle soups come with rice noodles and vegetables',
		list   : [
			{ code: 'T5', name: 'Vegetable Tom Yum Noodle Soup', price: 1095 },
			{ code: 'T6', name: 'Chicken Tom Yum Noodle Soup', price: 1195 },
			{ code: 'T7', name: 'Beef Tom Yum Noodle Soup', price: 1195 },
			{ code: 'T8', name: 'Shrimp Tom Yum Noodle Soup', price: 1395 }
		]
	},
	{
		header : 'Stir-fry Noodles',
		desc   :
			'An egg noodle stir-fry dish, choose between SOFT or CRISPY noodles. All stir-fry dishes contain onions, cabbage and carrots.',
		list   : [
			{ code: 'M1', name: 'Vegetable Stir-fry', price: 1145 },
			{ code: 'M2', name: 'Chicken Stir-fry', price: 1145 },
			{ code: 'M3', name: 'Beef Stir-fry', price: 1145 },
			{ code: 'M4', name: 'Chicken satay Stir-fry', price: 1145 },
			{ code: 'M5', name: 'Beef satay Stir-fry', price: 1145 },
			{ code: 'M6', name: 'Shrimp Stir-fry', price: 1145 },
			{ code: 'M7', name: 'Shrimp satay Stir-fry', price: 1145 },
			{ code: 'M8', name: 'Seafood Stir-fry', price: 1145 },
			{ code: 'M8', name: 'Combination (shrimp, pork, beef) Stir-fry', price: 1145 }
		]
	},
	{
		header : 'Curry',
		desc   : 'All curries come with a side of steamed rice. The broth used in our curries are not vegetarian.',
		list   : [
			{ code: 'T9', name: 'Yellow chicken curry', price: 1245 },
			{ code: 'T10', name: 'Yellow shrimp curry', price: 1445 },
			{ code: 'T11A', name: 'Red chicken curry', price: 1245 },
			{ code: 'T11B', name: 'Red beef curry', price: 1245 },
			{ code: 'T11C', name: 'Red shrimp curry', price: 1445 },
			{ code: 'T12', name: 'Yellow curry with vegetables', price: 1145 }
		]
	},
	{
		header : 'Signature Dishes',
		list   : [
			{ code: 'S3A', name: 'Grilled lemongrass chicken (3)', price: 1595 },
			{ code: 'S3B', name: 'Grilled lemongrass porkchop (3)', price: 1595 },
			{ code: 'S4', name: 'Stir-fry vegetables with a side of steamed rice', price: 1095 },
			{ code: 'S5', name: 'Stir-fry beef and broccoli with a side of steamed rice', price: 1395 },
			{ code: 'S6A', name: 'Spicy satay stir-fry chicken with steamed rice', price: 1395 },
			{ code: 'S6B', name: 'Spicy satay stir-fry beef with steamed rice', price: 1395 },
			{ code: 'S7A', name: 'Stir fry ginger chicken with steamed rice', price: 1395 },
			{ code: 'S7B', name: 'Stir fry ginger beef with steamed rice', price: 1395 },
			{ code: 'S8A', name: 'Stir fry ginger shrimp with steamed rice', price: 1395 },
			{ code: 'S8B', name: 'Spicy satsy stir fry ginger shrimp with steamed rice', price: 1395 }
		]
	}
];

export default data;
