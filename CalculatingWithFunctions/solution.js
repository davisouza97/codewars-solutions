function zero(param) {
    if(!param){
        return 0;
    }
    if (typeof param === "function") {
        return param(0);
    }
}
function one(param) {
    if(!param){
        return 1;
    }
    if (typeof param === "function") {
        return param(1);
    }
}
function two(param) {
    if(!param){
        return 2;
    }
    if (typeof param === "function") {
        return param(02);
    }
}
function three(param) {
    if(!param){
        return 3;
    }
    if (typeof param === "function") {
        return param(3);
    }
}
function four(param) {
    if(!param){
        return 4;
    }
    if (typeof param === "function") {
        return param(4);
    }
}
function five(param) {
    if(!param){
        return 5;
    }
    if (typeof param === "function") {
        return param(5);
    }
}
function six(param) {
    if(!param){
        return 6;
    }
    if (typeof param === "function") {
        return param(6);
    }
}
function seven(param) {
    if(!param){
        return 7;
    }
    if (typeof param === "function") {
        return param(7);
    }
}
function eight(param) {
    if(!param){
        return 8;
    }
    if (typeof param === "function") {
        return param(8);
    }
}
function nine(param) {
    if(!param){
        return 9;
    }
    if (typeof param === "function") {
        return param(9);
    }
}

function plus(param) {
    return (a) => {return a + param};
}
function minus(param) {
    return (a) => {return a - param};
}
function times(param) {
    return (a) => {return a * param};
}
function dividedBy(param) {
    return (a) => {return Math.floor(a / param)};
}

console.log(eight(minus(three())));
eight(minus(three())); // must return 5