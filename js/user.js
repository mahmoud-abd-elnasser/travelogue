
        let search = localStorage.getItem('email');
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('id')
        fetch(`https://ecommerce.routemisr.com/api/v1/users?email=${search}`)
        .then(Response => Response.json())
        .then(data => {
            // console.log(data.users[0])
            let id = data.users[0]._id;
            console.log(data.users[0]._id);
            localStorage.setItem('id',id)
        })
        fetch(`https://ecommerce.routemisr.com/api/v1/users/${id}`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data.data)
            let user = data.data.name;
            let email = data.data.email;
            let phone = data.data.phone;
            localStorage.setItem('user',user)
            localStorage.setItem('mail',email)
            localStorage.setItem('phone',phone) })
document.getElementById('one').value=localStorage.getItem('user')
document.getElementById('two').value=localStorage.getItem('email')
document.getElementById('three').value=localStorage.getItem('phone')
document.getElementById('greet').innerHTML=`WELCOME ${localStorage.getItem('user').toUpperCase()} !`
let change = document.getElementById('update')
change.addEventListener('click',  function () {
    document.getElementById('one').removeAttribute("disabled")
    document.getElementById('two').removeAttribute("disabled")
    document.getElementById('three').removeAttribute("disabled")
    document.getElementById('btn').removeAttribute("disabled")

})




async function update(data) {
    
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "token": token
        },
        body: JSON.stringify(data),
    });
    let result = await response.json();
    console.log(result)
    alert(`${result.message}`);
            }
            
            let btn = document.getElementById('btn');
            btn.addEventListener('click',async function (){
                let info = {
                    name: document.getElementById('one').value,
                    email: document.getElementById('two').value,
                    phone: document.getElementById('three').value,
                };
                update(info);

            })





// document.addEventListener('DOMContentLoaded', async function () {
//     let token = localStorage.getItem('token');
//     let cont = document.querySelector('.big-holder');
//     let mes = document.querySelector('.message');

//     // Check if the token is present
//     if (!token) {
//         mes.style.display = 'flex';
//     } else {
//         mes.style.display = 'none';
//         cont.classList.remove('d-none');

//         try {
//             let search = localStorage.getItem('email');
            
//             // Fetch user data by email and retrieve the user ID
//             let userId = await fetchUserId(search);
//             console.log(`User ID: ${userId}`);
//             localStorage.setItem('id', userId);

//             // Fetch and display detailed user information
//             let userData = await fetchUserDetails(userId);
//             populateUserInfo(userData);
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }

//         // Enable inputs on "Update" button click
//         let change = document.getElementById('update');
//         change.addEventListener('click', function () {
//             enableInputs();
//         });

//         // Handle form submission to update user information
//         let btn = document.getElementById('btn');
//         btn.addEventListener('click', async function () {
//             let info = {
//                 name: document.getElementById('one').value,
//                 email: document.getElementById('two').value,
//                 phone: document.getElementById('three').value,
//             };
//             await updateUserInfo(info);
//         });
//     }

//     // Helper functions

//     async function fetchUserId(email) {
//         let response = await fetch(`https://ecommerce.routemisr.com/api/v1/users?email=${email}`);
//         let data = await response.json();
//         if (data.users && data.users.length > 0) {
//             return data.users[0]._id;
//         } else {
//             throw new Error('User not found');
//         }
//     }

//     async function fetchUserDetails(id) {
//         let response = await fetch(`https://ecommerce.routemisr.com/api/v1/users/${id}`);
//         let data = await response.json();
//         return data.data;
//     }

//     function populateUserInfo(userData) {
//         localStorage.setItem('user', userData.name);
//         localStorage.setItem('mail', userData.email);
//         localStorage.setItem('phone', userData.phone);

//         document.getElementById('one').value = userData.name;
//         document.getElementById('two').value = userData.email;
//         document.getElementById('three').value = userData.phone;
//         document.getElementById('greet').innerHTML = `WELCOME ${userData.name.toUpperCase()}!`;
//     }

//     function enableInputs() {
//         document.getElementById('one').removeAttribute('disabled');
//         document.getElementById('two').removeAttribute('disabled');
//         document.getElementById('three').removeAttribute('disabled');
//         document.getElementById('btn').removeAttribute('disabled');
//     }

//     async function updateUserInfo(data) {
//         try {
//             let response = await fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     token: token,
//                 },
//                 body: JSON.stringify(data),
//             });
//             let result = await response.json();
//             console.log('Update Result:', result);
//             alert(`${result.message}`);
//         } catch (error) {
//             console.error('Error updating user info:', error);
//         }
//     }
// });













// document.addEventListener('DOMContentLoaded', async function () {
//     let token = localStorage.getItem('token');
//     let cont = document.querySelector('.big-holder');
//     let mes = document.querySelector('.message');

//     // Check if the token is present
//     if (!token) {
//         mes.style.display = 'flex';
//     } else {
//         mes.style.display = 'none';
//         cont.classList.remove('d-none');

//         let search = localStorage.getItem('email');
//         let token = localStorage.getItem('token');
//         let id = localStorage.getItem('id')
//         fetch(`https://ecommerce.routemisr.com/api/v1/users?email=${search}`)
//         .then(Response => Response.json())
//         .then(data => {
//             // console.log(data.users[0])
//             let id = data.users[0]._id;
//             console.log(data.users[0]._id);
//             localStorage.setItem('id',id)
//         })
//         fetch(`https://ecommerce.routemisr.com/api/v1/users/${id}`)
//         .then(Response => Response.json())
//         .then(data => {
//             console.log(data.data)
//             let user = data.data.name;
//             let email = data.data.email;
//             let phone = data.data.phone;
//             localStorage.setItem('user',user)
//             localStorage.setItem('mail',email)
//             localStorage.setItem('phone',phone) })
// document.getElementById('one').value=localStorage.getItem('user')
// document.getElementById('two').value=localStorage.getItem('email')
// document.getElementById('three').value=localStorage.getItem('phone')
// document.getElementById('greet').innerHTML=`WELCOME ${localStorage.getItem('user').toUpperCase()} !`
// let change = document.getElementById('update')
// change.addEventListener('click',  function () {
//     document.getElementById('one').removeAttribute("disabled")
//     document.getElementById('two').removeAttribute("disabled")
//     document.getElementById('three').removeAttribute("disabled")
//     document.getElementById('btn').removeAttribute("disabled")

// })




// async function update(data) {
    
//     let response = await fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             "token": token
//         },
//         body: JSON.stringify(data),
//     });
//     let result = await response.json();
//     console.log(result)
//             }
            
//             let btn = document.getElementById('btn');
//             btn.addEventListener('click',async function (){
//                 let info = {
//                     name: document.getElementById('one').value,
//                     email: document.getElementById('two').value,
//                     phone: document.getElementById('three').value,
//                 };
//                 update(info);

//             })
// }});





































// let search = localStorage.getItem('email');
// let token = localStorage.getItem('token');
// let id = localStorage.getItem('id');
// // let Uuser = document.getElementById('one');
// // let Uemail = document.getElementById('two');
// // let Uphone = document.getElementById('three');

// let inputBoxes = document.querySelectorAll('.input');

// inputBoxes.forEach((inputBox) => {
//   inputBox.addEventListener('blur', () => {
//     console.log('done')
//     // const Nuser = Uuser.value;
//     // const Nmail = Uemail.value;
//     // const Nphone = Uphone.value;
//     // let Cuser = Nuser;
//     // let Cmail = Nmail;
//     // let Cphone = Nphone;
//     let btn = document.getElementById('btn');
    
//     btn.addEventListener('click', () => {
//         let info = {
//             name: document.getElementById('one').value,
//             email: document.getElementById('two').value,
//             phone: document.getElementById('three').value,
//         };
//         update(info);
//     });

//   });
// });

// fetch(`https://ecommerce.routemisr.com/api/v1/users?email=${search}`)
//     .then(response => response.json())
//     .then(data => {
//         let userId = data.users[0]._id;
//         console.log(userId);
//         localStorage.setItem('id', userId);
//         return fetch(`https://ecommerce.routemisr.com/api/v1/users/${userId}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.data);
//         let user = data.data.name;
//         let email = data.data.email;
//         let phone = data.data.phone;
//         localStorage.setItem('user', user);
//         localStorage.setItem('mail', email);
//         localStorage.setItem('phone', phone);
        
//         document.getElementById('one').value = user;
//         document.getElementById('two').value = email;
//         document.getElementById('three').value = phone;
//     })
//     .catch(error => console.error('Error:', error));


// async function update(data) {
//     fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe/6701fd87f9d4967782a23bb0`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             "token": token
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.message === 'fail') {
//             console.error('Error:', data.errors);
//         } else {
//             console.log('User updated successfully!');
//         }
//     })
//     .catch(error => console.error('Error:', error));


