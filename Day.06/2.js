// Non repating character

function firstNonRepeatingBruteForce(s) {

    for (let i = 0; i < s.length; i++) {

        let count = 0;

        for (let j = 0; j < s.length; j++) {

            if (s[i] === s[j]) {
                count++;
            }
        }

        if (count === 1) {
            return s[i];
        }
    }

    return -1;
}
console.log(firstNonRepeatingBruteForce("swiss"))