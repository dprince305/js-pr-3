let no=152;
let sum=0;
let temp=no;

while(temp > 0){
    let reminder=temp%10;

    sum+=reminder ** 3;
    
    temp=parseInt(temp/10);
}
if(sum == no){
    console.log(`${no} is an Armstrong number`);
}
else{
    console.log(`${no} is not an Armstrong number`);
}