let numbers = [];
for(let i=0;i<100;i++){
    let num = Math.floor(Math.random()*100);
    if(!numbers.includes(num)){
        numbers.push(num);
    }
}
return numbers;
