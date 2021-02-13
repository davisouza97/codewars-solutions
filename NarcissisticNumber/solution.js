function narcissistic(value) {
    const tamanho = (""+value).length;
    return value === (""+value).split("").reduce((acc, cur) =>
        acc += Math.pow(+cur, tamanho), 0);
}

console.log(narcissistic(153))