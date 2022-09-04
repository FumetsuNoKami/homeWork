const lines = 5;
const columns = 11;
let result = '';

for (let i = 0; i <= lines+1; i++) {
    for (let j = 0; j < columns; j++) {
        if(j > 6 - i && j < 6 + i) result+='*';
        else result+=' ';
    }
    if (i===lines+1) result+='*';
    result+='\n';
}
console.log(result);