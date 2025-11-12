const container = document.querySelector('.container');
const registBtn =document.querySelector('.regist-btn');
const loginBtn =document.querySelector('.login-btn');
const btn=document.querySelector('btn')

registBtn.addEventListener('click', ()=>{
    container.classList.add('active');
})

loginBtn.addEventListener('click', ( )=>{
    container.classList.remove('active');
})

