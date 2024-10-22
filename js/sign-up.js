let signUp = document.querySelector(".right");
async function signup(data) {
  let response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
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
      icon: "success", title: "Signed up Successfully", text: `Please Login!`,
    }).then(() => {
      window.location.href = "https://mahmoud-abd-elnasser.github.io/travelogue/log-in.html";
    });
  } else {
    Swal.fire({
      icon: "error", title: "Oops...", text: `${result.message}`,
    });
  }
}
signUp.addEventListener("click", async function () {
  let name = document.getElementById("Name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let rePassword = document.getElementById("repassword").value;
  let phone = document.getElementById("phone").value;
  if ( name === "" || email === "" || password === "" || rePassword === "" ||
     phone === "" || password !== rePassword || phone.length !== 11 ) {
    Swal.fire({
      icon: "error",
      title: "SignUp Failed",
      text: "Please  fill all fields and check your password and phone number",
    });
  } else {
    let info = {
      name: name, email: email, password: password, rePassword: rePassword, phone: phone,
    };
    signup(info);
  }
});
