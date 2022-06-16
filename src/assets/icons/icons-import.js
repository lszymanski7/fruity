import logo from './logo/fruity.png'

const importAll = (r) => {
    let icons = {}
    r.keys().forEach(
        (item) => icons[item.replace('./', '')] = r(item)
    )

    return icons
}

const fruitsColor = importAll(require.context('./fruits-color', false, /\.(png|jpe?g|gif|svg)$/))
const fruitsLinear = importAll(require.context('./fruits-linear', false, /\.(png|jpe?g|gif|svg)$/))

export { logo, fruitsColor, fruitsLinear }