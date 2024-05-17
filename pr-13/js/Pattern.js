let string="";
let patt=document.getElementById("pattern");

for(let i=5;i>=1;i--)
{
    for(let j=5;j>=i;j--)
    {
        string+=(`${j}`);
    }
    string+="</br>";
}
patt.innerHTML=(string);
