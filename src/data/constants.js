import { v4 as uuidv4 } from 'uuid'

// Fruits Data

const data = [
	{
		id: uuidv4(),
		name: 'Apple',
		img: {
			color: require('../assets/images/icons/apple-color.webp'),
			linear: require('../assets/images/icons/apple-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Banana',
		img: {
			color: require('../assets/images/icons/banana-color.webp'),
			linear: require('../assets/images/icons/banana-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Blackberry',
		img: {
			color: require('../assets/images/icons/blackberry-color.webp'),
			linear: require('../assets/images/icons/blackberry-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Blueberries',
		img: {
			color: require('../assets/images/icons/blueberries-color.webp'),
			linear: require('../assets/images/icons/blueberries-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Cherries',
		img: {
			color: require('../assets/images/icons/cherries-color.webp'),
			linear: require('../assets/images/icons/cherries-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Coconut',
		img: {
			color: require('../assets/images/icons/coconut-color.webp'),
			linear: require('../assets/images/icons/coconut-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Dragon Fruit',
		img: {
			color: require('../assets/images/icons/dragon-fruit-color.webp'),
			linear: require('../assets/images/icons/dragon-fruit-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Fig',
		img: {
			color: require('../assets/images/icons/fig-color.webp'),
			linear: require('../assets/images/icons/fig-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Grapes',
		img: {
			color: require('../assets/images/icons/grapes-color.webp'),
			linear: require('../assets/images/icons/grapes-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Kiwi',
		img: {
			color: require('../assets/images/icons/kiwi-color.webp'),
			linear: require('../assets/images/icons/kiwi-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Lemon',
		img: {
			color: require('../assets/images/icons/lemon-color.webp'),
			linear: require('../assets/images/icons/lemon-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Lychee',
		img: {
			color: require('../assets/images/icons/lychee-color.webp'),
			linear: require('../assets/images/icons/lychee-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Mango',
		img: {
			color: require('../assets/images/icons/mango-color.webp'),
			linear: require('../assets/images/icons/mango-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Melon',
		img: {
			color: require('../assets/images/icons/melon-color.webp'),
			linear: require('../assets/images/icons/melon-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Orange',
		img: {
			color: require('../assets/images/icons/orange-color.webp'),
			linear: require('../assets/images/icons/orange-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Papaya',
		img: {
			color: require('../assets/images/icons/papaya-color.webp'),
			linear: require('../assets/images/icons/papaya-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Peach',
		img: {
			color: require('../assets/images/icons/peach-color.webp'),
			linear: require('../assets/images/icons/peach-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Pear',
		img: {
			color: require('../assets/images/icons/pear-color.webp'),
			linear: require('../assets/images/icons/pear-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Pineapple',
		img: {
			color: require('../assets/images/icons/pineapple-color.webp'),
			linear: require('../assets/images/icons/pineapple-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Plum',
		img: {
			color: require('../assets/images/icons/plum-color.webp'),
			linear: require('../assets/images/icons/plum-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Pomegranate',
		img: {
			color: require('../assets/images/icons/pomegranate-color.webp'),
			linear: require('../assets/images/icons/pomegranate-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Star Fruit',
		img: {
			color: require('../assets/images/icons/star-fruit-color.webp'),
			linear: require('../assets/images/icons/star-fruit-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Strawberry',
		img: {
			color: require('../assets/images/icons/strawberry-color.webp'),
			linear: require('../assets/images/icons/strawberry-linear.webp')
		},
		checked: true
	},
	{
		id: uuidv4(),
		name: 'Watermelon',
		img: {
			color: require('../assets/images/icons/watermelon-color.webp'),
			linear: require('../assets/images/icons/watermelon-linear.webp')
		},
		checked: true
	}
]

// Fruity Logo

const logo = {
    size_128x128: require('../assets/images/logos/fruity-128x128.webp'),
    size_256x256: require('../assets/images/logos/fruity-256x256.webp'),
    size_512x512: require('../assets/images/logos/fruity-512x512.webp')
}

export { data, logo }
