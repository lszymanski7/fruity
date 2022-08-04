// ====================================================================================================
// 1. First method
// ====================================================================================================

const icons = {
	appleColor: require('./images/icons/apple-color.png'),
	appleLinear: require('./images/icons/apple-linear.png'),
	bananaColor: require('./images/icons/banana-color.png'),
	bananaLinear: require('./images/icons/banana-linear.png'),
	blackberryColor: require('./images/icons/blackberry-color.png'),
	blackberryLinear: require('./images/icons/blackberry-linear.png'),
	blueberriesColor: require('./images/icons/blueberries-color.png'),
	blueberriesLinear: require('./images/icons/blueberries-linear.png'),
	cherriesColor: require('./images/icons/cherries-color.png'),
	cherriesLinear: require('./images/icons/cherries-linear.png'),
	coconutColor: require('./images/icons/coconut-color.png'),
	coconutLinear: require('./images/icons/coconut-linear.png'),
	dragonFruitColor: require('./images/icons/dragon-fruit-color.png'),
	dragonFruitLinear: require('./images/icons/dragon-fruit-linear.png'),
	figColor: require('./images/icons/fig-color.png'),
	figLinear: require('./images/icons/fig-linear.png'),
	grapesColor: require('./images/icons/grapes-color.png'),
	grapesLinear: require('./images/icons/grapes-linear.png'),
	kiwiColor: require('./images/icons/kiwi-color.png'),
	kiwiLinear: require('./images/icons/kiwi-linear.png'),
	lemonColor: require('./images/icons/lemon-color.png'),
	lemonLinear: require('./images/icons/lemon-linear.png'),
	lycheeColor: require('./images/icons/lychee-color.png'),
	lycheeLinear: require('./images/icons/lychee-linear.png'),
	mangoColor: require('./images/icons/mango-color.png'),
	mangoLinear: require('./images/icons/mango-linear.png'),
	melonColor: require('./images/icons/melon-color.png'),
	melonLinear: require('./images/icons/melon-linear.png'),
	orangeColor: require('./images/icons/orange-color.png'),
	orangeLinear: require('./images/icons/orange-linear.png'),
	papayaColor: require('./images/icons/papaya-color.png'),
	papayaLinear: require('./images/icons/papaya-linear.png'),
	peachColor: require('./images/icons/peach-color.png'),
	peachLinear: require('./images/icons/peach-linear.png'),
	pearColor: require('./images/icons/pear-color.png'),
	pearLinear: require('./images/icons/pear-linear.png'),
	pineappleColor: require('./images/icons/pineapple-color.png'),
	pineappleLinear: require('./images/icons/pineapple-linear.png'),
	plumColor: require('./images/icons/plum-color.png'),
	plumLinear: require('./images/icons/plum-linear.png'),
	pomegranateColor: require('./images/icons/pomegranate-color.png'),
	pomegranateLinear: require('./images/icons/pomegranate-linear.png'),
	starFruitColor: require('./images/icons/star-fruit-color.png'),
	starFruitLinear: require('./images/icons/star-fruit-linear.png'),
	strawberryColor: require('./images/icons/strawberry-color.png'),
	strawberryLinear: require('./images/icons/strawberry-linear.png'),
	watermelonColor: require('./images/icons/watermelon-color.png'),
	watermelonLinear: require('./images/icons/watermelon-linear.png')
}

const logo = {
	basic128: require('./images/logo/logo128-basic.png'),
	outlined128: require('./images/logo/logo128-outlined.png'),
	basic256: require('./images/logo/logo256-basic.png'),
	outlined256: require('./images/logo/logo256-outlined.png'),
	basic512: require('./images/logo/logo512-basic.png'),
	outlined512: require('./images/logo/logo512-outlined.png')
}

export { icons, logo }

// ====================================================================================================
// 2. Second method
// ====================================================================================================

// const importAll = (r) => {
// 	const files = {}
// 	r.keys().forEach((key) => (files[key.replace('./', '')] = r(key)))

// 	return files
// }

// const icons = importAll(require.context('./images/icons', false, /\.(png|jpe?g|gif|svg|ico)$/))
// const logo = importAll(require.context('./images/logo', false, /\.(png|jpe?g|gif|svg|ico)$/))

// export { icons, logo }
