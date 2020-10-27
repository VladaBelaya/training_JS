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
      buttonOut = document.querySelector('.button-out')

let login = ''

      
function toggleModalAuth () {
  modalAuth.classList.toggle('is-open')
}


function autрorized () {
  function logOut() {
    login = ''
    checkAuth()

    buttonAuth.style.display = 'block'
    userName.style.display = 'none'
    buttonOut.style.display = 'none'
  }

  console.log('Авторизован')

  userName.textContent = login
  buttonAuth.style.display = ''
  userName.style.display = ''
  buttonOut.style.display = ''

  buttonOut.addEventListener('click', logOut)
}
function notAuthorized () {
  console.log('не авторизован')

  buttonAuth.addEventListener('click', toggleModalAuth)
  closeAuth.addEventListener('click', toggleModalAuth);
  loginForm.addEventListener('submit', logIn) //submit -отправка данных 

  function logIn (event) {
    event.preventDefault()
    login = loginInput.value 
    toggleModalAuth()
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
