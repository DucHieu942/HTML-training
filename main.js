var btnOpenRegister = document.querySelector('.btnOpen-Register');
var btnOpenLogin = document.querySelector('.btnOpen-Login');
var modal = document.querySelector('.modal');
var modal__Register= document.querySelector('.modal__Register');
var modal__Login= document.querySelector('.modal__Login');
var modal__overlay = document.querySelector('.modal__overlay');
var btnClose = document.querySelectorAll('.auth-form__control-back');
var modaltoggle = function() {
    modal.classList.toggle('hide');
    modal.classList.toggle('display');
}
btnOpenRegister.addEventListener('click', function(){
    modal.classList.toggle('hide');
    modal.classList.toggle('display');
    modal__Register.classList.remove('hide');
    modal__Login.classList.add('hide');
    btnClose[0].addEventListener('click', modaltoggle)
})
btnOpenLogin.addEventListener('click', function(){
    modal.classList.toggle('hide');
    modal.classList.toggle('display');
    modal__Login.classList.remove('hide');
    modal__Register.classList.add('hide');
    btnClose[1].addEventListener('click', modaltoggle)
})
// btnClose.addEventListener('click', modaltoggle)
modal__overlay.addEventListener('click', modaltoggle)