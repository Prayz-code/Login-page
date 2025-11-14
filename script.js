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
  
let isbgColor = false;
toggleBtn.addEventListener("click", () => {
  isbgColor = !isbgColor;
  document.body.style.backgroundcolor = isbgColor ? '#071739' : '#4b6382';
  sidebar.classList.toggle('bg-dark');
  sidebar.classList.toggle('text-light');
  mainContent.style.backgroundcolor = isbgColor ?  '#4b6382': '#000000';//this is not having any effect from the toggle, i don't know why
  mainContent.style.color = isbgColor ? '#fff' : '#000';
  toggleBtn.textContent = isbgColor ? 'Light Mode' : 'Dark Mode';
});




