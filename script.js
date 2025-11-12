const email = document.getElementById('email');
const emailHelp = document.getElementById('emailHelp');
const password = document.getElementById('password');
const loginPage = document.getElementById('loginPage');
const errorMsg = document.getElementById('errorMsg');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const validUsername = "makecodelit@gmail.com";
const validPassword = "ilovecoding123";



loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    debugger
      const username = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if(password === validPassword && username === validUsername){
        debugger
        loginPage.style.display = "none";
        dashboard.style.setProperty('display', 'block', 'important');
    }else{
        errorMsg.style.display = 'block';
    }
     
    });







