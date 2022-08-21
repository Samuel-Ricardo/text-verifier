export const mergeMaps = (add: Map<any, any>, to: Map<any, any>) => {
    add.forEach((value, key) => to.set(key, value))
    return to;
}