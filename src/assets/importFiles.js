import logo from './icons/logo/fruity-logo.png'

const importAll = (r) => {
    const files = {}
    r.keys().forEach((key) => files[key.replace('./', '')] = r(key))

    return files
}

const fruitsColor = importAll(require.context('./icons/fruits-color', false, /\.(png|jpe?g|gif|svg)$/))
const fruitsLinear = importAll(require.context('./icons/fruits-linear', false, /\.(png|jpe?g|gif|svg)$/))

export { logo, fruitsColor, fruitsLinear }
