function check(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");

    return sortedS === sortedT;
}
console.log(check("listen", "silent"));
// true

console.log(check("hello", "world"));
// false