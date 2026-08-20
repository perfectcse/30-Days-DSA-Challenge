function demo (s){
const frequency  = {};

for (let i = 0; i< s.length; i++)
{
    let count = 0;

for (let j = 0; j< s.length; j++){

    if (s[i] === s[j]){
        count++;
    }
}    
frequency[s[i]] = count;
}
return frequency;

}
console.log(demo("hello"));