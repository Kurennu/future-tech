function multyply(a, b, ...rest) {
    return a*b* (rest.length > 0 ? rest.reduce((acc, num) => acc *num,1) : 1);


}
console.log(multyply(2,3,4,5));