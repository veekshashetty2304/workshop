let text1 = document.getElementById("txt");
let communnum = document.getElementsByClassName("commonnum");
num2 =document.getElementsByClassName("num2");
answer = document.getElementsByClassName("answer");
var x="";
function ans()
{
for(i=0;i<=9;i++)
{
communnum[i].value=text1.value;
answer[i].value = num2[i].value*communnum[i].value;
console.log(answer[i].value);
}

}
text1.addEventListener('keyup',(e)=>{
    if(e.key === "Enter")
    {
      ans();
    }
  })