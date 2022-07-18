const importAll = (r) => {
    const files = {}
    r.keys().forEach((key) => files[key.replace('./', '')] = r(key))

    return files
}

const icons = importAll(require.context('./images/icons', false, /\.(png|jpe?g|gif|svg)$/))
const logo = importAll(require.context('./images/logo', false, /\.(png|jpe?g|gif|svg)$/))

export { icons, logo }
