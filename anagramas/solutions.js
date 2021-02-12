function anagrams(word, words) {
    let anagrams = []
    words.forEach(element => {
        if(element.split("").sort().join() === word.split("").sort().join()){
            anagrams.push(element);    
        }
    });
    return anagrams;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))