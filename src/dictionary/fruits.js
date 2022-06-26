import { v4 as uuidv4 } from 'uuid'
import { fruitsColor, fruitsLinear } from '../assets/icons/icons-import'

const fruits = [{
    id: uuidv4(),
    key: 'apple',
    name: 'Apple',
    img: {
        color: fruitsColor['apple.png'].default,
        linear: fruitsLinear['apple.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'banana',
    name: 'Banana',
    img: {
        color: fruitsColor['banana.png'].default,
        linear: fruitsLinear['banana.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'blackberry',
    name: 'Blackberry',
    img: {
        color: fruitsColor['blackberry.png'].default,
        linear: fruitsLinear['blackberry.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'blueberries',
    name: 'Blueberries',
    img: {
        color: fruitsColor['blueberries.png'].default,
        linear: fruitsLinear['blueberries.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'cherries',
    name: 'Cherries',
    img: {
        color: fruitsColor['cherries.png'].default,
        linear: fruitsLinear['cherries.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'coconut',
    name: 'Coconut',
    img: {
        color: fruitsColor['coconut.png'].default,
        linear: fruitsLinear['coconut.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'dragon_fruit',
    name: 'Dragon Fruit',
    img: {
        color: fruitsColor['dragon-fruit.png'].default,
        linear: fruitsLinear['dragon-fruit.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'fig',
    name: 'Fig',
    img: {
        color: fruitsColor['fig.png'].default,
        linear: fruitsLinear['fig.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'grapes',
    name: 'Grapes',
    img: {
        color: fruitsColor['grapes.png'].default,
        linear: fruitsLinear['grapes.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'kiwi',
    name: 'Kiwi',
    img: {
        color: fruitsColor['kiwi.png'].default,
        linear: fruitsLinear['kiwi.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'lemon',
    name: 'Lemon',
    img: {
        color: fruitsColor['lemon.png'].default,
        linear: fruitsLinear['lemon.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'lychee',
    name: 'Lychee',
    img: {
        color: fruitsColor['lychee.png'].default,
        linear: fruitsLinear['lychee.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'mango',
    name: 'Mango',
    img: {
        color: fruitsColor['mango.png'].default,
        linear: fruitsLinear['mango.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'melon',
    name: 'Melon',
    img: {
        color: fruitsColor['melon.png'].default,
        linear: fruitsLinear['melon.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'orange',
    name: 'Orange',
    img: {
        color: fruitsColor['orange.png'].default,
        linear: fruitsLinear['orange.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'papaya',
    name: 'Papaya',
    img: {
        color: fruitsColor['papaya.png'].default,
        linear: fruitsLinear['papaya.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'peach',
    name: 'Peach',
    img: {
        color: fruitsColor['peach.png'].default,
        linear: fruitsLinear['peach.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'pear',
    name: 'Pear',
    img: {
        color: fruitsColor['pear.png'].default,
        linear: fruitsLinear['pear.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'pineapple',
    name: 'Pineapple',
    img: {
        color: fruitsColor['pineapple.png'].default,
        linear: fruitsLinear['pineapple.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'plum',
    name: 'Plum',
    img: {
        color: fruitsColor['plum.png'].default,
        linear: fruitsLinear['plum.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'pomegranate',
    name: 'Pomegranate',
    img: {
        color: fruitsColor['pomegranate.png'].default,
        linear: fruitsLinear['pomegranate.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'star_fruit',
    name: 'Star Fruit',
    img: {
        color: fruitsColor['star-fruit.png'].default,
        linear: fruitsLinear['star-fruit.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'strawberry',
    name: 'Strawberry',
    img: {
        color: fruitsColor['strawberry.png'].default,
        linear: fruitsLinear['strawberry.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    key: 'watermelon',
    name: 'Watermelon',
    img: {
        color: fruitsColor['watermelon.png'].default,
        linear: fruitsLinear['watermelon.png'].default
    },
    checked: true
}]

export { fruits as default }