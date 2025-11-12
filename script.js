const email = document.getElementById('email');
const emailHelp = document.getElementById('emailHelp');
const password1 = document.getElementById('password');
const login = document.getElementById('login')

const validUsername = "makecodelit@gmail.com";
const validPassword = "ilovecoding123";

const username = "makecodelit@gmail.com";
const password = "ilovecoding123";
debugger
login.addEventListener('submit', () => {
      const username = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      if(username === validUsername && password === validPassword){
        login.style.display = 'none';
        dashboard.style.display = 'block';
    }else{
        errormsg.style.display = 'block';
    }
     
    });




debugger
// let username = "makecodelit@gmail.com";
// let password = "ilovecoding123";

// if(username === "makecodelit@gmail.com" && password==="ilovecoding123"){
//     alert("login successful!");
    // const login = document.getElementById("login");

    // login.addEventListener("click", () => alert("Login Successful! Welcome!"));
//     // window.location = ("dashboard.html");
// }else{
//     alert("invalid username");
//     // debugger
//     // const invaliduser = document.getElementById("login");
//     // invaliduser.addEventListener("click", () => textContent = "Invalid username or password");
// };

