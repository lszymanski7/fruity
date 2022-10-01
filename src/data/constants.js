import { v4 as uuidv4 } from 'uuid'

// Fruits Data

const fruits = [
    {
        id: uuidv4(),
        name: 'Apple',
        img: require('../assets/images/icons/apple.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Banana',
        img: require('../assets/images/icons/banana.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Blackberry',
        img: require('../assets/images/icons/blackberry.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Blueberries',
        img: require('../assets/images/icons/blueberries.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Cherries',
        img: require('../assets/images/icons/cherries.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Coconut',
        img: require('../assets/images/icons/coconut.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Dragon Fruit',
        img: require('../assets/images/icons/dragon-fruit.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Fig',
        img: require('../assets/images/icons/fig.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Grapes',
        img: require('../assets/images/icons/grapes.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Kiwi',
        img: require('../assets/images/icons/kiwi.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Lemon',
        img: require('../assets/images/icons/lemon.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Lychee',
        img: require('../assets/images/icons/lychee.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Mango',
        img: require('../assets/images/icons/mango.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Melon',
        img: require('../assets/images/icons/melon.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Orange',
        img: require('../assets/images/icons/orange.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Papaya',
        img: require('../assets/images/icons/papaya.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Peach',
        img: require('../assets/images/icons/peach.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Pear',
        img: require('../assets/images/icons/pear.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Pineapple',
        img: require('../assets/images/icons/pineapple.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Plum',
        img: require('../assets/images/icons/plum.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Pomegranate',
        img: require('../assets/images/icons/pomegranate.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Star Fruit',
        img: require('../assets/images/icons/star-fruit.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Strawberry',
        img: require('../assets/images/icons/strawberry.webp'),
        checked: false
    },
    {
        id: uuidv4(),
        name: 'Watermelon',
        img: require('../assets/images/icons/watermelon.webp'),
        checked: false
    }
]

// Fruity Logo

const logo = {
    size_128x128: require('../assets/images/logos/fruity-128x128.webp'),
    size_256x256: require('../assets/images/logos/fruity-256x256.webp'),
    size_512x512: require('../assets/images/logos/fruity-512x512.webp')
}

// Reset Icon

const reset = require('../assets/images/icons/reset.webp')

export { fruits, logo, reset }
