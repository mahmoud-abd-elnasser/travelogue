// export let search = email.value ;
let signUp = document.querySelector(".right");
async function signup(data) {
  let response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  let result = await response.json();
  console.log(result);
  if (result.message === "success") {
    Swal.fire({
      icon: "success",
      title: "Login Successful",
    }).then(() => {
      window.location.href = './../index.html';
      localStorage.setItem('email', email.value);
      localStorage.setItem('token', result.token);
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${result.message}`,
    });
  }
}
signUp.addEventListener("click", async function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (
    email === "" ||
    password === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "SignUp Failed",
      text: "Please  fill all fields and check your password and phone number",
    });
  } else {
    let info = {
      email: email,
      password: password, 
    };
    signup(info);
  }
});

let Eye = document.getElementById('eye');
        Eye.addEventListener('click', togglePassword);

        function togglePassword() {
            const passwordField = document.getElementById('password');
            if (passwordField.classList.contains('show')) { 
                passwordField.type = "password";
                passwordField.classList.remove('show');
                Eye.src='./assets/eye-password-hide-svgrepo-com.svg';
            } else {
                passwordField.type = "text";
                passwordField.classList.add('show');
                Eye.src='./assets/eye-password-hide-svgrepo-com (1).svg';
            }
        }

