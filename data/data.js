const Categories = [
	{
		imageUrl: "https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg",
		title: "Burgers"
	},
	{
		imageUrl: "https://st2.depositphotos.com/1692343/5636/i/950/depositphotos_56360285-stock-photo-hot-homemade-pepperoni-pizza.jpg",
		title: "Pizzas"
	},
	{
		imageUrl: "https://curlytales.com/wp-content/uploads/2020/07/Biryani-1-1024x576.jpg",
		title: "Biryani"
	},
	{
		imageUrl: "https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2014/07/shutterstock_176646242.jpg",
		title: "Deserts"
	},
	{
		imageUrl: "https://www.wellandgood.com/wp-content/uploads/2020/12/chow-mein-cup-full-of-kale-feature.jpg",
		title: "Chinese"
	},
	{
		imageUrl: "https://img4.goodfon.com/wallpaper/nbig/7/d5/napitki-kokteili-led-klubnika-laim.jpg",
		title: "Soft Drinks"
	}
];

const Restaurants = [
	{
		name: "Burger King",
		image:
			"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1058912512%2F0x0.jpg%3Ffit%3Dscale",
		rating: 4.5
	},
	{
		name: "Dominos",
		image: "https://www.yodeck.com/wp-content/uploads/2021/02/case-study-dominos-5.jpg",
		rating: 4.1
	},
	{
		name: "Paradise",
		image: "https://i.ytimg.com/vi/18ImIHGq7hY/maxresdefault.jpg",
		rating: 4.4
	},
	{
		name: "Nanking",
		image: "https://i2.wp.com/www.nagpurpulse.com/wp-content/uploads/ng/2018/10/Nankings_HN9548_1534591370.jpg?ssl=1",
		rating: 3.8
	},
	{
		name: "Karachi Bakery",
		image: "https://img.onmanorama.com/content/dam/mm/en/travel/eatouts/images/2019/2/26/karachi-bakery.jpg",
		rating: 3.5
	},
	{
		name: "London Shakes & Cafe",
		image: "https://media-cdn.tripadvisor.com/media/photo-s/14/68/ba/34/20180825-143601-largejpg.jpg",
		rating: 4.8
	},
	{
		name: "McDonald's",
		image: "https://www.snopes.com/tachyon/2018/12/ss_mcdonalds.jpg",
		rating: 4.3
	},
	{
		name: "Star Bucks",
		image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72908.jpg",
		rating: 4.1
	}
];

const restaurantMenuImgs = [
	{
		restaurant: "burger king",
		menuImgs: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj2JTKCJVXl_ygB94ytdNbfkb64ZQPjZHvw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1g7ceIOuJbCMOsBfWboSlxikQLzWuhde9Jg&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BfB3No6ZfQQO41WQushIibujARJldqajbg&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQcrK7B_2AWmpIOY-Cf4VlOET0WgevUA9tA&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIK3YF0QHpAdcawo2WBB8sbE78Uvse8NJpA&usqp=CAU"
		]
	},
	{
		restaurant: "dominos",
		menuImgs: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sT26_BWoXpD4eYMA0PjxLTb5bOhCkyt1Gw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sT26_BWoXpD4eYMA0PjxLTb5bOhCkyt1Gw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sT26_BWoXpD4eYMA0PjxLTb5bOhCkyt1Gw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sT26_BWoXpD4eYMA0PjxLTb5bOhCkyt1Gw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sT26_BWoXpD4eYMA0PjxLTb5bOhCkyt1Gw&usqp=CAU"
		]
	},
	{
		restaurant: "karachi bakery",
		menuImgs: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjbD3rOI4qRUkITGe1a5U26iGvcDQ4vqokw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdDpAgkBVt-M1gDwcRiSdJjM9Zko7aTeoNw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqdwWMko9bna5sCfAmmuZqqOENTmLvGovpg&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfWYA1Yh0bmr5LphTUYKZma77FQgrlkl0oQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7-EtpHExvhK8uvOlOXrqOkItGZMisLCGCQ&usqp=CAU"
		]
	},
	{
		restaurant: "london shakes & cafe",
		menuImgs: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz5d3NwLQgHs7AXh0x4FSTQr90NbuFUxKEQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz5d3NwLQgHs7AXh0x4FSTQr90NbuFUxKEQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz5d3NwLQgHs7AXh0x4FSTQr90NbuFUxKEQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz5d3NwLQgHs7AXh0x4FSTQr90NbuFUxKEQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz5d3NwLQgHs7AXh0x4FSTQr90NbuFUxKEQ&usqp=CAU"
		]
	},
	{
		restaurant: "mcdonald's",
		menuImgs: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCk47iON2qEyctUj1LYFo4gv0mlzkdROxhw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj2JTKCJVXl_ygB94ytdNbfkb64ZQPjZHvw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqdwWMko9bna5sCfAmmuZqqOENTmLvGovpg&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWvOC5k5cB7XS4C63Z_r06BEM_ucAcr0RXA&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdDpAgkBVt-M1gDwcRiSdJjM9Zko7aTeoNw&usqp=CAU"
		]
	},
	{
		restaurant: "nanking",
		menuImgs: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDT7wt0bWsggDzCz11W3SyFwn_tnejoBCReQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IIo9mZTNSa5vZJPzqKvtX6ND1DK0Nz_K4g&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6fB6Jk3V31GgzFmh2_YR-CBfCandt196Qw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1q403ZRqZm2U5wUwv-YOcT6VczfIWyH-fw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2vpPGZj0wDKABPzXxDiqlcYspT8UQsbLhA&usqp=CAU"
		]
	},
	{
		restaurant: "paradise",
		menuImgs: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJ4DchEygbGqeOEyxv8UJB5YcYG-eCicSKw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJ4DchEygbGqeOEyxv8UJB5YcYG-eCicSKw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJ4DchEygbGqeOEyxv8UJB5YcYG-eCicSKw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJ4DchEygbGqeOEyxv8UJB5YcYG-eCicSKw&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJ4DchEygbGqeOEyxv8UJB5YcYG-eCicSKw&usqp=CAU"
		]
	},
	{
		restaurant: "starbucks",
		menuImgs: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVUjXrLtgnkqNt7-8nctHFOSkLGOWkjbFVQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVUjXrLtgnkqNt7-8nctHFOSkLGOWkjbFVQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVUjXrLtgnkqNt7-8nctHFOSkLGOWkjbFVQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVUjXrLtgnkqNt7-8nctHFOSkLGOWkjbFVQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVUjXrLtgnkqNt7-8nctHFOSkLGOWkjbFVQ&usqp=CAU"
		]
	}
];

const resTemplates = [
	`Burger King is a quick service restaurant chain operating restaurants worldwide with headquarters based in Florida, United States.
	 The restaurant chain was founded in Florida in 1953 under the name 'Insta-Burger King'. Insta-Burger King was purchased in 1954, 
	 by its two Miami-based franchisees David Edgerton and James McLamore, who renamed it 'Burger King'.`,
	`Domino's Pizza, Inc. is an American multinational pizza restaurant chain founded in 1960 and led by CEO Richard Allison.
	 The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan`,
	`Karachi Bakery is located in Hyderabad, Telangana. The main store is located in on Moazzam Jahi Market.
	  It was founded by Sri Khanchand Ramnani. It is one of the popular bakeries in Hyderabad. It is known for its fruit biscuits,
	   dil kush and plum cake`
];

export { Categories, Restaurants, restaurantMenuImgs };
