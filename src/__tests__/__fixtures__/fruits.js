const fruits = [
	{
		id: 'bbb33b2d-e07d-4d13-a869-f3790e100477',
		name: 'Apple',
		img: {
			color: 'http://localhost:8080/assets/apple-color.3aed0776e9335292e633.png',
			linear: 'http://localhost:8080/assets/apple-linear.ec415c97ef2f4e7ccce3.png'
		},
		checked: true
	},
	{
		id: '96e46eeb-6ef0-42cf-b603-1aafcf1f4243',
		name: 'Banana',
		img: {
			color: 'http://localhost:8080/assets/banana-color.5789535c9cae73aa1640.png',
			linear: 'http://localhost:8080/assets/banana-linear.00ac28687cfc25e09648.png'
		},
		checked: true
	},
	{
		id: '54bd781a-c214-4f86-a7cb-04aa3cf9fe94',
		name: 'Blackberry',
		img: {
			color: 'http://localhost:8080/assets/blackberry-color.4022e52dd981b5a5c6ce.png',
			linear: 'http://localhost:8080/assets/blackberry-linear.abd62baf0ab7f975219d.png'
		},
		checked: true
	},
	{
		id: 'dee3e5ec-5009-430d-be10-03a7046bfcb7',
		name: 'Blueberries',
		img: {
			color: 'http://localhost:8080/assets/blueberries-color.b9b5ec2707a5270b2d8f.png',
			linear: 'http://localhost:8080/assets/blueberries-linear.139f368a55658931629c.png'
		},
		checked: true
	},
	{
		id: 'b07b36bc-2294-4cb6-bb30-c7e632b135c8',
		name: 'Cherries',
		img: {
			color: 'http://localhost:8080/assets/cherries-color.858014e9805430083045.png',
			linear: 'http://localhost:8080/assets/cherries-linear.47d09a68f8860f7b40f0.png'
		},
		checked: true
	},
	{
		id: '782a90f6-b968-4750-b7c3-5215416d0dc4',
		name: 'Coconut',
		img: {
			color: 'http://localhost:8080/assets/coconut-color.89f21915bb34f79cf431.png',
			linear: 'http://localhost:8080/assets/coconut-linear.b52509e63c4e904dd91b.png'
		},
		checked: true
	},
	{
		id: '68fa7475-94ca-441a-a038-eb3730164e91',
		name: 'Dragon Fruit',
		img: {
			color: 'http://localhost:8080/assets/dragon-fruit-color.c313b975af225aac39ff.png',
			linear: 'http://localhost:8080/assets/dragon-fruit-linear.752d557c1f2ee0f97759.png'
		},
		checked: true
	},
	{
		id: 'f5209f29-317d-40cc-8430-743e54f06787',
		name: 'Fig',
		img: {
			color: 'http://localhost:8080/assets/fig-color.63831354b6fac1f2f5c9.png',
			linear: 'http://localhost:8080/assets/fig-linear.8c3a55e1a7f17685eebb.png'
		},
		checked: true
	},
	{
		id: 'af5aabeb-cef5-4aa0-ab95-6139e3758625',
		name: 'Grapes',
		img: {
			color: 'http://localhost:8080/assets/grapes-color.b76ad170c25eb54f9b3f.png',
			linear: 'http://localhost:8080/assets/grapes-linear.a5fd5f506d0050ee70ad.png'
		},
		checked: true
	},
	{
		id: '7fa2ab07-41a9-4809-ad18-0245ba4b8a66',
		name: 'Kiwi',
		img: {
			color: 'http://localhost:8080/assets/kiwi-color.772eaad957780f24eb7b.png',
			linear: 'http://localhost:8080/assets/kiwi-linear.f769eb9d406e591ff828.png'
		},
		checked: true
	},
	{
		id: '3a546af4-d0e5-42b0-b030-693aef8bc118',
		name: 'Lemon',
		img: {
			color: 'http://localhost:8080/assets/lemon-color.becd7441124ffdb18903.png',
			linear: 'http://localhost:8080/assets/lemon-linear.e79bb9679f83af6c00b3.png'
		},
		checked: true
	},
	{
		id: '96a49d88-ed3c-434c-a4ab-02ba3f81ef0a',
		name: 'Lychee',
		img: {
			color: 'http://localhost:8080/assets/lychee-color.80451e2966ce30314ad4.png',
			linear: 'http://localhost:8080/assets/lychee-linear.7de8f4739ed41c81ed42.png'
		},
		checked: true
	},
	{
		id: '8630f009-dd2a-4552-ab30-d45269ddcf91',
		name: 'Mango',
		img: {
			color: 'http://localhost:8080/assets/mango-color.ef2e8d88b503cb9b2869.png',
			linear: 'http://localhost:8080/assets/mango-linear.7a9c7d4cd1ffc1c1d763.png'
		},
		checked: true
	},
	{
		id: '4988db07-d09f-4538-ab06-6e29a3eb8f1c',
		name: 'Melon',
		img: {
			color: 'http://localhost:8080/assets/melon-color.f16676146e906f44cc44.png',
			linear: 'http://localhost:8080/assets/melon-linear.8c62e3be5639da4e6394.png'
		},
		checked: true
	},
	{
		id: 'f5571ca7-5216-4125-b28c-c2e51489fd15',
		name: 'Orange',
		img: {
			color: 'http://localhost:8080/assets/orange-color.757dade892a0d6e202b7.png',
			linear: 'http://localhost:8080/assets/orange-linear.de79a1e5eaa3119bbc78.png'
		},
		checked: true
	},
	{
		id: 'ef858b1e-a7b7-4c77-ab7d-36ec8fea11fa',
		name: 'Papaya',
		img: {
			color: 'http://localhost:8080/assets/papaya-color.a709dc5522e986bd1cd3.png',
			linear: 'http://localhost:8080/assets/papaya-linear.6b9e7f5434568125cada.png'
		},
		checked: true
	},
	{
		id: '131dd57d-aa14-4579-af7a-5590e73424aa',
		name: 'Peach',
		img: {
			color: 'http://localhost:8080/assets/peach-color.954eeada20f8161da401.png',
			linear: 'http://localhost:8080/assets/peach-linear.68c8e3ee63ac1f6a6f49.png'
		},
		checked: true
	},
	{
		id: '96302038-f1ab-4cbd-ac30-584eec9d2809',
		name: 'Pear',
		img: {
			color: 'http://localhost:8080/assets/pear-color.7feb59870ee0e816740d.png',
			linear: 'http://localhost:8080/assets/pear-linear.ce55bfa47137181473b0.png'
		},
		checked: true
	},
	{
		id: '74e201cc-2972-413f-a037-5bb41bd6eaca',
		name: 'Pineapple',
		img: {
			color: 'http://localhost:8080/assets/pineapple-color.d4b6ad8429a2a2b22eb5.png',
			linear: 'http://localhost:8080/assets/pineapple-linear.09d6fc12ad6a978e1c46.png'
		},
		checked: true
	},
	{
		id: '03f0cea5-cd8c-4b71-b1d0-e6d563e10547',
		name: 'Plum',
		img: {
			color: 'http://localhost:8080/assets/plum-color.dd4c4eabd34f52a973ce.png',
			linear: 'http://localhost:8080/assets/plum-linear.3e68b230dcc6e0b82395.png'
		},
		checked: true
	},
	{
		id: '35b3b4c3-678a-4dc8-b9aa-f25c7b490e23',
		name: 'Pomegranate',
		img: {
			color: 'http://localhost:8080/assets/pomegranate-color.99c9860d17a40f78c0f8.png',
			linear: 'http://localhost:8080/assets/pomegranate-linear.c41fb320c05f72579fc4.png'
		},
		checked: true
	},
	{
		id: 'cb5f4716-83f1-4fde-ba45-ac28b4123ce1',
		name: 'Star Fruit',
		img: {
			color: 'http://localhost:8080/assets/star-fruit-color.0fff78e836d19dbb7d09.png',
			linear: 'http://localhost:8080/assets/star-fruit-linear.7db5f28fa4d7eb0471a5.png'
		},
		checked: true
	},
	{
		id: '1e932ec2-946d-4eb0-a688-d821cf3d457f',
		name: 'Strawberry',
		img: {
			color: 'http://localhost:8080/assets/strawberry-color.7b44a7389f6d60d9ce4f.png',
			linear: 'http://localhost:8080/assets/strawberry-linear.38e65f2d93190fc0e94f.png'
		},
		checked: true
	},
	{
		id: 'afcd0595-ffb1-4002-b127-53e5dd9c4f73',
		name: 'Watermelon',
		img: {
			color: 'http://localhost:8080/assets/watermelon-color.2d34ca19454b4d6cc54a.png',
			linear: 'http://localhost:8080/assets/watermelon-linear.fad542c35527833dbb2a.png'
		},
		checked: true
	}
]

export { fruits as default }
