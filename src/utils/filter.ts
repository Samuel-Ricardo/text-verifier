export const filterSpecialCaracter = (caracter:string) => {
    if(
        caracter === "." ||
        caracter === "-" ||
        caracter === "+" ||
        caracter === "*" ||
        caracter === "?" ||
        caracter === "^" ||
        caracter === "$" ||
        caracter === "(" ||
        caracter === ")" ||
        caracter === "[" ||
        caracter === "]" ||
        caracter === "{" ||
        caracter === "}" ||
        caracter === "|" ||
        caracter === "\\"
      ) {return `\\${caracter}`} else {return caracter}
}

export const filterSpecialCaracterOrIgnore = (caracter: string, ignore: boolean) => ignore? caracter : filterSpecialCaracter(caracter) 

export const filterEspecialCaracters = (caracter:string[]) => caracter.map((caracter) => filterSpecialCaracter(caracter))

export const filterSpecialCaractersAndIgnore = (caracters:string, ignore: string) => {
 caracters.split('').map((caracter) => caracter === ignore ? caracter : filterSpecialCaracter(caracter))
}

export const filterSpecialCaractersOfStringOrIgnore = (caracters:string, ignore: string[]) => {
    return caracters.split('')
    .map(caracter => ignore.includes(caracter) ? caracter : filterSpecialCaracter(caracter))
    .reduce((previus, current) => previus.concat(current))
}