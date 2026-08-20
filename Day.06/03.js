function demo (s) {
    const frequency = new Map();

    for (const char of s){
        if(frequency.has(char)){

            const count = frequency.get(char);
            frequency.set(char, count + 1);
        }
        else {
            frequency.set(char,1);
        }
    }
    return frequency;
}
console.log(demo("hello"));