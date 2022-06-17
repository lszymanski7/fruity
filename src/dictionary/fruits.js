import { v4 as uuidv4 } from 'uuid'
import { fruitsColor, fruitsLinear } from '../assets/icons/icons-import'

const fruits = [{
    id: uuidv4(),
    name: 'Apple',
    img: [
        fruitsColor['apple.png'].default,
        fruitsLinear['apple.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Banana',
    img: [
        fruitsColor['banana.png'].default,
        fruitsLinear['banana.png'].default
    ],
    checked: false
}, {
    id: uuidv4(),
    name: 'Blackberry',
    img: [
        fruitsColor['blackberry.png'].default,
        fruitsLinear['blackberry.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Blueberries',
    img: [
        fruitsColor['blueberries.png'].default,
        fruitsLinear['blueberries.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Cherries',
    img: [
        fruitsColor['cherries.png'].default,
        fruitsLinear['cherries.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Coconut',
    img: [
        fruitsColor['coconut.png'].default,
        fruitsLinear['coconut.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Dragon Fruit',
    img: [
        fruitsColor['dragon-fruit.png'].default,
        fruitsLinear['dragon-fruit.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Fig',
    img: [
        fruitsColor['fig.png'].default,
        fruitsLinear['fig.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Grapes',
    img: [
        fruitsColor['grapes.png'].default,
        fruitsLinear['grapes.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Kiwi',
    img: [
        fruitsColor['kiwi.png'].default,
        fruitsLinear['kiwi.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Lemon',
    img: [
        fruitsColor['lemon.png'].default,
        fruitsLinear['lemon.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Lychee',
    img: [
        fruitsColor['lychee.png'].default,
        fruitsLinear['lychee.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Mango',
    img: [
        fruitsColor['mango.png'].default,
        fruitsLinear['mango.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Melon',
    img: [
        fruitsColor['melon.png'].default,
        fruitsLinear['melon.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Orange',
    img: [
        fruitsColor['orange.png'].default,
        fruitsLinear['orange.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Papaya',
    img: [
        fruitsColor['papaya.png'].default,
        fruitsLinear['papaya.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Peach',
    img: [
        fruitsColor['peach.png'].default,
        fruitsLinear['peach.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Pear',
    img: [
        fruitsColor['pear.png'].default,
        fruitsLinear['pear.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Pineapple',
    img: [
        fruitsColor['pineapple.png'].default,
        fruitsLinear['pineapple.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Plum',
    img: [
        fruitsColor['plum.png'].default,
        fruitsLinear['plum.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Pomegranate',
    img: [
        fruitsColor['pomegranate.png'].default,
        fruitsLinear['pomegranate.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Star Fruit',
    img: [
        fruitsColor['star-fruit.png'].default,
        fruitsLinear['star-fruit.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Strawberry',
    img: [
        fruitsColor['strawberry.png'].default,
        fruitsLinear['strawberry.png'].default
    ],
    checked: true
}, {
    id: uuidv4(),
    name: 'Watermelon',
    img: [
        fruitsColor['watermelon.png'].default,
        fruitsLinear['watermelon.png'].default
    ],
    checked: true
}]

export { fruits as default }