let n=1;
let no=0;
let next;

next=no+n;

while(next<=Number){
    console.log(next);
    no=n;
    n=next;
    next=no+n;
}
document