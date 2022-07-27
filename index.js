const btnSm = document.querySelector('.btn-sm');
const text = document.querySelector('.text');

btnSm.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
})