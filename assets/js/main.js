let headerNavbarAccount = document.querySelector('.js-header__navbar-account');
let modal = document.querySelector('.js-modal');
let registerToLogin = document.querySelector('.js-modal__register-toggle-login');
let loginToRegister = document.querySelector('.js-modal__login-toggle-register');
let modalLogin = document.querySelector('.js-modal__login');
let modalRegister = document.querySelector('.js-modal__register');
let modalBtnReturn = document.querySelectorAll('.js-modal__btn-return');
let modalOverlay = document.querySelector('.js-modal__overlay');
// event-listener
headerNavbarAccount.addEventListener('click',showModal);
registerToLogin.addEventListener('click',showModalLogin);
loginToRegister.addEventListener('click',showModalRegister);
for(let i = 0; i < modalBtnReturn.length; i++){
    modalBtnReturn[i].addEventListener('click',hideModal)
}
// modalOverlay.addEventListener('click',hideModal);
modalLogin.addEventListener('click',stopBudding);
modalRegister.addEventListener('click',stopBudding);
modal.addEventListener('click',hideModal)

// function
function showModal(){
    modal.style.display = 'flex';
}
function hideModal() {
    modal.style.display = 'none';
}
function stopBudding(e){
    e.stopPropagation();
}
function showModalLogin(e){
    modalRegister.style.display = 'none';
    modalLogin.style.display = 'flex';
   
}
function showModalRegister(e){
    modalRegister.style.display = 'flex';
    modalLogin.style.display = 'none'

}