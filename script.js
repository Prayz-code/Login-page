const email = document.getElementById('email');
const emailHelp = document.getElementById('emailHelp');
const password = document.getElementById('password');
const loginPage = document.getElementById('loginPage');
const errorMsg = document.getElementById('errorMsg');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const bodyEl = document.querySelector("body");
const validUsername = "makecodelit@gmail.com";
const validPassword = "ilovecoding123";


//loginPage
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

    // toggle button
    debugger
let bgColor = true;

function toggle(){
  bodyEl.style.backgroundcolor = bgColor ? "blue" : "grey";
  bgColor =! bgColor;
}

toggleBtn.addEventListener("click", toggle);




b