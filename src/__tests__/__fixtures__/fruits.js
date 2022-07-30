const fruits = [
	{
		id: 'bbb33b2d-e07d-4d13-a869-f3790e100477',
		name: 'Apple',
		img: {
			color: 'apple-color.png',
			linear: 'apple-linear.png'
		},
		checked: true
	},
	{
		id: '96e46eeb-6ef0-42cf-b603-1aafcf1f4243',
		name: 'Banana',
		img: {
			color: 'banana-color.png',
			linear: 'banana-linear.png'
		},
		checked: true
	},
	{
		id: '54bd781a-c214-4f86-a7cb-04aa3cf9fe94',
		name: 'Blackberry',
		img: {
			color: 'blackberry-color.png',
			linear: 'blackberry-linear.png'
		},
		checked: true
	},
	{
		id: 'dee3e5ec-5009-430d-be10-03a7046bfcb7',
		name: 'Blueberries',
		img: {
			color: 'blueberries-color.png',
			linear: 'blueberries-linear.png'
		},
		checked: true
	},
	{
		id: 'b07b36bc-2294-4cb6-bb30-c7e632b135c8',
		name: 'Cherries',
		img: {
			color: 'cherries-color.png',
			linear: 'cherries-linear.png'
		},
		checked: true
	},
	{
		id: '782a90f6-b968-4750-b7c3-5215416d0dc4',
		name: 'Coconut',
		img: {
			color: 'coconut-color.png',
			linear: 'coconut-linear.png'
		},
		checked: true
	},
	{
		id: '68fa7475-94ca-441a-a038-eb3730164e91',
		name: 'Dragon Fruit',
		img: {
			color: 'dragon-fruit-color.png',
			linear: 'dragon-fruit-linear.png'
		},
		checked: true
	},
	{
		id: 'f5209f29-317d-40cc-8430-743e54f06787',
		name: 'Fig',
		img: {
			color: 'fig-color.png',
			linear: 'fig-linear.png'
		},
		checked: true
	},
	{
		id: 'af5aabeb-cef5-4aa0-ab95-6139e3758625',
		name: 'Grapes',
		img: {
			color: 'grapes-color.png',
			linear: 'grapes-linear.png'
		},
		checked: true
	},
	{
		id: '7fa2ab07-41a9-4809-ad18-0245ba4b8a66',
		name: 'Kiwi',
		img: {
			color: 'kiwi-color.png',
			linear: 'kiwi-linear.png'
		},
		checked: true
	},
	{
		id: '3a546af4-d0e5-42b0-b030-693aef8bc118',
		name: 'Lemon',
		img: {
			color: 'lemon-color.png',
			linear: 'lemon-linear.png'
		},
		checked: true
	},
	{
		id: '96a49d88-ed3c-434c-a4ab-02ba3f81ef0a',
		name: 'Lychee',
		img: {
			color: 'lychee-color.png',
			linear: 'lychee-linear.png'
		},
		checked: true
	},
	{
		id: '8630f009-dd2a-4552-ab30-d45269ddcf91',
		name: 'Mango',
		img: {
			color: 'mango-color.png',
			linear: 'mango-linear.png'
		},
		checked: true
	},
	{
		id: '4988db07-d09f-4538-ab06-6e29a3eb8f1c',
		name: 'Melon',
		img: {
			color: 'melon-color.png',
			linear: 'melon-linear.png'
		},
		checked: true
	},
	{
		id: 'f5571ca7-5216-4125-b28c-c2e51489fd15',
		name: 'Orange',
		img: {
			color: 'orange-color.png',
			linear: 'orange-linear.png'
		},
		checked: true
	},
	{
		id: 'ef858b1e-a7b7-4c77-ab7d-36ec8fea11fa',
		name: 'Papaya',
		img: {
			color: 'papaya-color.png',
			linear: 'papaya-linear.png'
		},
		checked: true
	},
	{
		id: '131dd57d-aa14-4579-af7a-5590e73424aa',
		name: 'Peach',
		img: {
			color: 'peach-color.png',
			linear: 'peach-linear.png'
		},
		checked: true
	},
	{
		id: '96302038-f1ab-4cbd-ac30-584eec9d2809',
		name: 'Pear',
		img: {
			color: 'pear-color.png',
			linear: 'pear-linear.png'
		},
		checked: true
	},
	{
		id: '74e201cc-2972-413f-a037-5bb41bd6eaca',
		name: 'Pineapple',
		img: {
			color: 'pineapple-color.png',
			linear: 'pineapple-linear.png'
		},
		checked: true
	},
	{
		id: '03f0cea5-cd8c-4b71-b1d0-e6d563e10547',
		name: 'Plum',
		img: {
			color: 'plum-color.png',
			linear: 'plum-linear.png'
		},
		checked: true
	},
	{
		id: '35b3b4c3-678a-4dc8-b9aa-f25c7b490e23',
		name: 'Pomegranate',
		img: {
			color: 'pomegranate-color.png',
			linear: 'pomegranate-linear.png'
		},
		checked: true
	},
	{
		id: 'cb5f4716-83f1-4fde-ba45-ac28b4123ce1',
		name: 'Star Fruit',
		img: {
			color: 'star-fruit-color.png',
			linear: 'star-fruit-linear.png'
		},
		checked: true
	},
	{
		id: '1e932ec2-946d-4eb0-a688-d821cf3d457f',
		name: 'Strawberry',
		img: {
			color: 'strawberry-color.png',
			linear: 'strawberry-linear.png'
		},
		checked: true
	},
	{
		id: 'afcd0595-ffb1-4002-b127-53e5dd9c4f73',
		name: 'Watermelon',
		img: {
			color: 'watermelon-color.png',
			linear: 'watermelon-linear.png'
		},
		checked: true
	}
]

export { fruits as default }
