const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const Close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
Close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


// day 1
const buttonAuth = document.querySelector('.button-auth'),
      modalAuth =  document.querySelector('.modal-auth'),
      closeAuth = document.querySelector('.close-auth'),
      loginForm = document.querySelector('#logInForm'),
      loginInput = document.querySelector('#login'),
      userName = document.querySelector('.user-name'),
      buttonOut = document.querySelector('.button-out'),
      buttonLogin = document.querySelector('.button-login')

let login = localStorage.getItem('DeliveryFood')

      
function toggleModalAuth () {
  modalAuth.classList.toggle('is-open')
  if (modalAuth.classList.contains('is-open')) {
    disableScroll()
  } else {
    enableScroll()
  }
}



function autрorized () {
  function logOut() {
    login = ''
    localStorage.removeItem('DeliveryFood')
    buttonAuth.style.display = ''
    userName.style.display = ''
    buttonOut.style.display = ''
    buttonOut.removeEventListener('click', logOut)


    checkAuth()
  }

  console.log('Авторизован')

  userName.textContent = login

  buttonAuth.style.display = 'none'
  userName.style.display = 'inline'
  buttonOut.style.display = 'block'

  buttonOut.addEventListener('click', logOut)
}
function notAuthorized () {
  console.log('не авторизован')

  buttonAuth.addEventListener('click', toggleModalAuth)
  closeAuth.addEventListener('click', toggleModalAuth);
  loginForm.addEventListener('submit', logIn) //submit -отправка данных 
  modalAuth.addEventListener('click', function (event){
    if (event.target.classList.contains('is-open')){
      toggleModalAuth()
    }
  })
  function notCloseModal(event) {
    if(loginInput.value.trim() === '') {
      alert('введите логин')
     event.preventDefault('')
      modalAuth.classList.add('madal-auth')
    } 
   }
   buttonLogin.addEventListener('click', notCloseModal) 

 
  function logIn (event) {
    event.preventDefault()
    login = loginInput.value 
   
    localStorage.setItem('DeliveryFood', login)
    toggleModalAuth()
    buttonAuth.removeEventListener('click', toggleModalAuth)
    closeAuth.removeEventListener('click', toggleModalAuth);
    loginForm.removeEventListener('submit', logIn)
    loginForm.reset()
    checkAuth()
  }
}

function checkAuth() {
  if (login) {
    autрorized()
  } else {
    notAuthorized()
  }  
}

checkAuth()

