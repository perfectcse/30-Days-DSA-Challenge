function firstNonRepeating(s) {

    const frequency = new Map();

    // Step 1: Count every character
    for (const char of s) {
        frequency.set(
            char,
            (frequency.get(char) || 0) + 1
        );
    }

    // Step 2: Find the first character with count 1
    for (const char of s) {

        if (frequency.get(char) === 1) {
            return char;
        }
    }

    return -1;
}

console.log(firstNonRepeating("swiss"));