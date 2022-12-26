import { v4 as uuidv4 } from 'uuid'

// Icons images
const icons = {
    apple: require('../assets/images/icons/apple.webp'),
    banana: require('../assets/images/icons/banana.webp'),
    blackberry: require('../assets/images/icons/blackberry.webp'),
    blueberries: require('../assets/images/icons/blueberries.webp'),
    cherries: require('../assets/images/icons/cherries.webp'),
    coconut: require('../assets/images/icons/coconut.webp'),
    dragon_fruit: require('../assets/images/icons/dragon-fruit.webp'),
    fig: require('../assets/images/icons/fig.webp'),
    grapes: require('../assets/images/icons/grapes.webp'),
    kiwi: require('../assets/images/icons/kiwi.webp'),
    lemon: require('../assets/images/icons/lemon.webp'),
    lychee: require('../assets/images/icons/lychee.webp'),
    mango: require('../assets/images/icons/mango.webp'),
    melon: require('../assets/images/icons/melon.webp'),
    orange: require('../assets/images/icons/orange.webp'),
    papaya: require('../assets/images/icons/papaya.webp'),
    peach: require('../assets/images/icons/peach.webp'),
    pear: require('../assets/images/icons/pear.webp'),
    pineapple: require('../assets/images/icons/pineapple.webp'),
    plum: require('../assets/images/icons/plum.webp'),
    pomegranate: require('../assets/images/icons/pomegranate.webp'),
    star_fruit: require('../assets/images/icons/star-fruit.webp'),
    strawberry: require('../assets/images/icons/strawberry.webp'),
    watermelon: require('../assets/images/icons/watermelon.webp')
}

// Logos images
const logos = {
    fruity: {
        size_128x128: require('../assets/images/logos/fruity-128x128.webp'),
        size_256x256: require('../assets/images/logos/fruity-256x256.webp'),
        size_512x512: require('../assets/images/logos/fruity-512x512.webp')
    },
    github: require('../assets/images/logos/github.svg')
}

// Shapes images
const shapes = {
    moon: require('../assets/images/shapes/moon.svg'),
    reset: require('../assets/images/shapes/reset.svg'),
    sun: require('../assets/images/shapes/sun.svg')
}

// Fruits data
const fruits = [
    {
        id: uuidv4(),
        name: 'Apple',
        img: icons.apple,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Banana',
        img: icons.banana,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Blackberry',
        img: icons.blackberry,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Blueberries',
        img: icons.blueberries,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Cherries',
        img: icons.cherries,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Coconut',
        img: icons.coconut,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Dragon Fruit',
        img: icons.dragon_fruit,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Fig',
        img: icons.fig,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Grapes',
        img: icons.grapes,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Kiwi',
        img: icons.kiwi,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Lemon',
        img: icons.lemon,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Lychee',
        img: icons.lychee,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Mango',
        img: icons.mango,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Melon',
        img: icons.melon,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Orange',
        img: icons.orange,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Papaya',
        img: icons.papaya,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Peach',
        img: icons.peach,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Pear',
        img: icons.pear,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Pineapple',
        img: icons.pineapple,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Plum',
        img: icons.plum,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Pomegranate',
        img: icons.pomegranate,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Star Fruit',
        img: icons.star_fruit,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Strawberry',
        img: icons.strawberry,
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Watermelon',
        img: icons.watermelon,
        checked: false
    }
]

export { fruits, icons, logos, shapes }
