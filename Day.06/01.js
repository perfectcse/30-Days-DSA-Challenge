function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const frequency = new Map();

    
    for (let char of s) {
        frequency.set(char, (frequency.get(char) || 0) + 1);
    }

    
    for (let char of t) {
        if (!frequency.has(char)) {
            return false;
        }

        frequency.set(char, frequency.get(char) - 1);

        if (frequency.get(char) < 0) {
            return false;
        }
    }

    return true;
}
console.log(isAnagram("listen", "silent"));
// true

console.log(isAnagram("hello", "world"));
// false
