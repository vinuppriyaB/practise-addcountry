document.querySelector("#add").addEventListener("click",function(){
    let newcountry=document.querySelector("#inputcountry").value
    addcountry(newcountry);
})

function addcountry(newcountry)
{
    let option=document.createElement("option");
    option.innerHTML=newcountry;
    let select=document.querySelector("select");
    select.append(option);
    

}