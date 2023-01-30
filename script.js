const btn=document.querySelector('.btn');
const btn2=document.getElementById('btn2');
//const notess=document.getElementsByClassName('container');



btn.addEventListener('click',sometext);
btn2.addEventListener('click',function(){
document.getElementById("text-area").value='';
});


function sometext(){

let text=document.getElementById('text-area').value;

if(text.length===0)return

// we does not return anything.

else  
{   
    let anotherbody=document.createElement("div");
    let insidebtn=document.createElement('button');
    let node=document.createTextNode(text);
    insidebtn.innerHTML='show detail';
    
    anotherbody.appendChild(node);
    anotherbody.appendChild(insidebtn);
    insidebtn.style.margin='0px 10px 20px 30px ';
    anotherbody.classList.add('container');
    
    anotherbody.style.display='block'; 
     document.body.appendChild(anotherbody);
    
     document.getElementById("text-area").value='';  
            
}

}









