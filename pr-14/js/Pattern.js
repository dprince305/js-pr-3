let string="";
let no=1;
let patt=document.getElementById("pattern");

for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        string+=(`${no} `);
        no++;
        
    }
    string+="</br>";
}
patt.innerHTML=(string);
