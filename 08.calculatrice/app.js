 let screen =document.querySelector('#screen');
 const btn =document.querySelectorAll('.btn');
const span=document.getElementById('span')
 for(item of btn )  {
    item.addEventListener ('click',(e) => {
        btnText=e.target.innerText;
        if(btnText=='×'){
            btnText='*'
        }
        if(btnText=='÷'){
            btnText='/';
        } 
        if(btnText=='C'){
            screen.value='';
        }
        if(btnText=='+/-'){
            screen.value='error';    
        }
        if(btnText=='0'){
            screen.value='';
        }
        screen.value+=btnText;
        
    })
 }