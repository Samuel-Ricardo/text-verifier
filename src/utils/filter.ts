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