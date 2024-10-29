const password=document.getElementById('password')

const lenght= 12;

const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const special='@#$%^&*()_+~|{}[]<>/-=';
    
const genPass =() => {
       let passwordIn = '';
       passwordIn +=upperCase[Math.floor(Math.random()*upperCase.length)]
       passwordIn +=lowerCase[Math.floor(Math.random()*lowerCase.length)]
       passwordIn +=number[Math.floor(Math.random()*number.length)]
       passwordIn +=special[Math.floor(Math.random()*special.length)]

       
       let allChar=upperCase+lowerCase+number+special
       while(lenght > passwordIn.length){
           passwordIn +=allChar[Math.floor(Math.random()*allChar.length)]
            // console.log(passwordIn)
        }
        password.value=passwordIn    
}

gen.addEventListener('click',() => {
    genPass();
})

const copyDoc = () => {
    password.select();
    document.execCommand('copy');
}


copy.addEventListener('click', () => {
    copyDoc();
})
