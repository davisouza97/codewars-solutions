var moveZeros = function (arr) {
    let numberOfZeros = 0;
    let result = [];
    arr.forEach(element => {
        if(element !== 0){
            result.push(element);
        }else{
            numberOfZeros++;
        }
    });
    return result.concat(...new Array(numberOfZeros).fill(0));
}

console.log(moveZeros([0,0,null,null,null,null,null,null,null,null]))