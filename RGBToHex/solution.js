function rgb(r, g, b){
    const toHex = (x) =>{
        x = (x < 0)? 0 : (x > 255)? 255: x;
        return ((x <= 15)? '0' + x.toString(16): x.toString(16)).toUpperCase();
    }
    return toHex(r)+toHex(g)+toHex(b);
}

console.log(rgb(173, 255, 47));