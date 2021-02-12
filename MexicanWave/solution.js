function wave(str){
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let strSplit = str.split("");
        if(strSplit[i] === " "){
            continue;
        }
        strSplit[i] = strSplit[i].toUpperCase();
        result.push(strSplit.join(""));
    }
    return result;
}

console.log(wave("eita"));