function spinWords(phrase) {
    phrase = phrase.split(" ");
    let result = []
    phrase.forEach(element => {
        if (element.length >= 5) {
            result.push(element.split("").reverse().join(""));
        }else{
            result.push(element);
        }
    });
    return result.join(" ");
}

//otimo
function spinWords2(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

console.log(spinWords("eita aaaaaaaaaaaaabbbbbbbb"))