
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
});
let swiperBaner = new Swiper(".mySwiper-baner", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

const modalOverlay = document.querySelector('.modal__overlay')
modalOverlay.innerHTML='<i class="mark-x fa-solid fa-x"></i>'
const LoginForm = document.querySelector('.login')
const register = document.querySelector('.register')
LoginForm.addEventListener('click',()=>{
  document.querySelector('.modal').classList.toggle('hide')
  document.querySelector('.auth-forn-register').classList.add('hide')
  document.querySelector('.auth-forn-login').classList.remove('hide')
}
)
register.addEventListener('click',()=>{
  document.querySelector('.modal').classList.toggle('hide')
  document.querySelector('.auth-forn-login').classList.add('hide')
  document.querySelector('.auth-forn-register').classList.remove('hide')
}
)
const markX = document.querySelector('.mark-x').addEventListener('click', () =>{
  document.querySelector('.modal').classList.toggle('hide')
})
document.querySelector('.auth-forn-login__switch-btn').addEventListener('click',()=>{
  document.querySelector('.modal').classList.remove('hide')
  document.querySelector('.auth-forn-login').classList.add('hide')
  document.querySelector('.auth-forn-register').classList.remove('hide')
})
document.querySelector('.auth-forn-register__switch-btn').addEventListener('click',()=>{
  document.querySelector('.modal').classList.remove('hide')
  document.querySelector('.auth-forn-register').classList.add('hide')
  document.querySelector('.auth-forn-login').classList.remove('hide')
})
// login
const userLogin = document.querySelector('#userLogin')
const passwordLogin = document.querySelector('#passwordLogin')
const formLogin = document.querySelector('form.login')
function showError(input,message) {
  let parent=  input.parentElement
  let error = parent.querySelector('.error')
  error.innerText= message
}
function showSuccess(input) {
  let parent=  input.parentElement
  let error = parent.querySelector('.error')
  error.innerText= ''
}
function checkEmpty(list) {
  let isRequired = false
  list.forEach(input => {
    input.value= input.value.trim()
    if(input.value==''){
      showError(input,'Không Được Để Trống')
      isRequired=true
    }
    else(
      showSuccess(input)
    )
  })
  return isRequired
}
function login(user,password){
  if(user.value.trim()=='hello' && password.value.trim()==123){
    document.querySelector('.modal').classList.add('hide')
    document.querySelector('.first__header__container-user').classList.add('hide')
    document.querySelector('.header__navbar-user').classList.remove('hide')
  }
  else{
    showError(passwordLogin,'Tài khoản hoặc mật khẩu sai')
  }
}
formLogin.addEventListener('submit',(e)=>{
  e.preventDefault()
  if(!checkEmpty([userLogin,passwordLogin])){
    login(userLogin,passwordLogin)
  }
})




// register///////////////////////////////////
const userRegister = document.querySelector('#usernameRegister')
const emailRegister = document.querySelector('#emailRegister')
const passwordRegister = document.querySelector('#passwordRegister')
const confirmPassword = document.querySelector('#passwordRegisterConfirm')
const formRegister = document.querySelector('form.register')
function checkEmail(input){
  let check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(check.test(input.value.trim())){
    showSuccess(input)
  }
  else{
    showError(input,'Email Không hợp lệ')
  }
}
function checkLength(input,max,min){
  if(input.value.length > max){
    showError(input,`Length must be less than ${max}`)
  }
  else if(input.value.length < min){
    showError(input,`Length must be great than ${min}`)
  }
  else{
    showSuccess(input)
  }
}
function checkPassword(input1,input2){
  if(input1.value.length !== input2.value.length){
    showError(input2,'mật khẩu không trùng nhau')
  }
}
formRegister.addEventListener('submit',(e)=>{
  e.preventDefault()
  if(!checkEmpty([userRegister,emailRegister,passwordRegister,confirmPassword])){
    checkEmail(emailRegister)
    checkLength(userRegister,8,3)
    checkPassword(passwordRegister,confirmPassword)
  }
})

