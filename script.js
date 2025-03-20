const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = `       
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>      
    `;
    console.log(email, password);
    document.getElementById("infoModal").style.display = "block";
  });
}
const signForm = document.getElementById("signup-form");
if (signForm) {
  signForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = `   
     <p><strong>Username:</strong> ${username}</p>          
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>   
        <p><strong>Confirm Password:</strong> ${confirmPassword}</p>   
       
    `;
    console.log(email, password);
    document.getElementById("infoModal").style.display = "block";
  });
}
const resetForm = document.getElementById("reset-form");
if (resetForm) {
  resetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const userInfoDiv = document.getElementById("userInfo");
    if (password !== confirmPassword) {
      userInfoDiv.innerHTML = `       
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Confirm Password:</strong> ${confirmPassword}</p>
        <p>Passwords do not match</p>
    `;
      document.getElementById("infoModal").style.display = "block";
      return;
    }
    if (password.length < 6 || confirmPassword.length < 6) {
      userInfoDiv.innerHTML = `       
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Confirm Password:</strong> ${confirmPassword}</p>
        <p>Password must be at least 6 characters</p>
    `;
      document.getElementById("infoModal").style.display = "block";
      return;
    }

    userInfoDiv.innerHTML = `       
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Confirm Password:</strong> ${confirmPassword}</p>
    `;
    console.log(email);
    document.getElementById("infoModal").style.display = "block";
  });
}
const closeBtn = document.getElementById("close");
if (closeBtn) {
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("infoModal").style.display = "none";
  });
}
