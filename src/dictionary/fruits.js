import { v4 as uuidv4 } from 'uuid'
import { fruitsColor, fruitsLinear } from '../assets/icons/icons-import'

const fruits = [{
    id: uuidv4(),
    name: 'Apple',
    img: {
        color: fruitsColor['apple.png'].default,
        linear: fruitsLinear['apple.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Banana',
    img: {
        color: fruitsColor['banana.png'].default,
        linear: fruitsLinear['banana.png'].default
    },
    checked: false
}, {
    id: uuidv4(),
    name: 'Blackberry',
    img: {
        color: fruitsColor['blackberry.png'].default,
        linear: fruitsLinear['blackberry.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Blueberries',
    img: {
        color: fruitsColor['blueberries.png'].default,
        linear: fruitsLinear['blueberries.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Cherries',
    img: {
        color: fruitsColor['cherries.png'].default,
        linear: fruitsLinear['cherries.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Coconut',
    img: {
        color: fruitsColor['coconut.png'].default,
        linear: fruitsLinear['coconut.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Dragon Fruit',
    img: {
        color: fruitsColor['dragon-fruit.png'].default,
        linear: fruitsLinear['dragon-fruit.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Fig',
    img: {
        color: fruitsColor['fig.png'].default,
        linear: fruitsLinear['fig.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Grapes',
    img: {
        color: fruitsColor['grapes.png'].default,
        linear: fruitsLinear['grapes.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Kiwi',
    img: {
        color: fruitsColor['kiwi.png'].default,
        linear: fruitsLinear['kiwi.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Lemon',
    img: {
        color: fruitsColor['lemon.png'].default,
        linear: fruitsLinear['lemon.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Lychee',
    img: {
        color: fruitsColor['lychee.png'].default,
        linear: fruitsLinear['lychee.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Mango',
    img: {
        color: fruitsColor['mango.png'].default,
        linear: fruitsLinear['mango.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Melon',
    img: {
        color: fruitsColor['melon.png'].default,
        linear: fruitsLinear['melon.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Orange',
    img: {
        color: fruitsColor['orange.png'].default,
        linear: fruitsLinear['orange.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Papaya',
    img: {
        color: fruitsColor['papaya.png'].default,
        linear: fruitsLinear['papaya.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Peach',
    img: {
        color: fruitsColor['peach.png'].default,
        linear: fruitsLinear['peach.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Pear',
    img: {
        color: fruitsColor['pear.png'].default,
        linear: fruitsLinear['pear.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Pineapple',
    img: {
        color: fruitsColor['pineapple.png'].default,
        linear: fruitsLinear['pineapple.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Plum',
    img: {
        color: fruitsColor['plum.png'].default,
        linear: fruitsLinear['plum.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Pomegranate',
    img: {
        color: fruitsColor['pomegranate.png'].default,
        linear: fruitsLinear['pomegranate.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Star Fruit',
    img: {
        color: fruitsColor['star-fruit.png'].default,
        linear: fruitsLinear['star-fruit.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Strawberry',
    img: {
        color: fruitsColor['strawberry.png'].default,
        linear: fruitsLinear['strawberry.png'].default
    },
    checked: true
}, {
    id: uuidv4(),
    name: 'Watermelon',
    img: {
        color: fruitsColor['watermelon.png'].default,
        linear: fruitsLinear['watermelon.png'].default
    },
    checked: true
}]

export { fruits as default }