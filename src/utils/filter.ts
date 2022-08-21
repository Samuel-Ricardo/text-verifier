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