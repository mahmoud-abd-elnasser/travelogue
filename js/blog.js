
'use strict'
// var pName = document.getElementById("pName");
// var pDate = document.getElementById("pDate");
// var pLocation = document.getElementById("pLocation");
// var pDesc = document.getElementById("pDesc");
// var btn = document.getElementById("btn");
// var tbody = document.getElementById("tbody");
// var bsearch = document.getElementById("bsearch");
// let source = document.getElementById('holder')
// var procontainer;
// var currentindex=0;

// if(JSON.parse(localStorage.getItem("products"))){
//     procontainer = JSON.parse(localStorage.getItem("products"));
//     dispro();
// }
// else{
//     procontainer=[];
// }
// function addblog() {
//     var travel = {
//         name: pName.value,
//         date: pDate.value,
//         location: pLocation.value,
//         desc: pDesc.value
//     };
//     procontainer.push(travel);
//     localStorage.setItem("products",JSON.stringify(procontainer))
   
// }


// btn.addEventListener("click",function() {
//     if(btn.innerHTML=="Add Blog Post"){
//         addblog();
//     }
//     else{
//         updateblog();
//     }
//     dispro();
//     clear();
// });
// function dispro() {
//     var travels = ``;
//     for (let i = 0; i < procontainer.length; i++) {
//         travels += `
//         <div class="card mb-3">
//             <div class="row g-0 p-0">
//                 <div class="col-md-4 img-holder" id="holder-${i}">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">Title: ${procontainer[i].name}</h5>
//                         <p class="card-date text-muted">Date: ${procontainer[i].date}</p>
//                         <p class="card-location text-muted">Location: ${procontainer[i].location}</p>
//                         <p class="card-discribtion text-muted">Discribtion: ${procontainer[i].desc}</p>
//                         <div class="d-flex mt-3 pt-2">
//                             <button class="btn delete" onclick="delpro(${i})">Delete</button>
//                             <button class="btn update" onclick="getdata(${i})">Update</button>
//                             <button class="btn see" onclick="window.location.href='./../page.html'">View</button>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//     }

//     tbody.innerHTML = travels;

//     // for (let i = 0; i < 6; i++) {
//     //     let holder = document.getElementById(`holder-${i}`);
//     //     holder.style.backgroundImage = `url('../assets/${i}.jpg')`;
//     // }
// }

// function delpro(id){
//     procontainer.splice(id,1);
//     localStorage.setItem("products",JSON.stringify(procontainer));
//     dispro();

// }
// function clear(){
//     pName.value='';
//      pDate.value='';
//      pLocation.value='';
//      pDesc.value='';

// }
// function getdata(id){
//     pName.value=procontainer[id].name;
//     pDate.value=procontainer[id].date;
//     pLocation.value=procontainer[id].location;
//     pDesc.value=procontainer[id].desc;
//     btn.innerHTML="update data";
//     currentindex=id;
// }
// function updateblog(){

//     var travel = {
//         name: pName.value,
//         date: pDate.value,
//         location: pLocation.value,
//         desc: pDesc.value
//     };
//     procontainer[currentindex]=travel;
//     localStorage.setItem("products",JSON.stringify(procontainer));
//     btn.innerText='Add Blog Post';
//     window.location.href='./../page.html'

// }
// function searchblog(term) {
//     var blogs = ``;
//     for (let i = 0; i < procontainer.length; i++) {
//         if (procontainer[i].name.toLowerCase().includes(term.toLowerCase())) {
//             blogs += `        <div class="card mb-3">
//             <div class="row g-0 p-0">
//                 <div class="col-md-4 img-holder" id="holder-${i}">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">Title: ${procontainer[i].name}</h5>
//                         <p class="card-date text-muted">Date: ${procontainer[i].date}</p>
//                         <p class="card-location text-muted">Location: ${procontainer[i].location}</p>
//                         <p class="card-discribtion text-muted">Discribtion: ${procontainer[i].desc}</p>
//                         <div class="d-flex mt-3 pt-2">
//                             <button class="btn delete" onclick="delpro(${i})">Delete</button>
//                             <button class="btn update" onclick="getdata(${i})">Update</button>
//                             <button class="btn see" onclick="window.location.href='./../page.html'">View</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//         }
//     }
//     tbody.innerHTML = blogs;
// }


// bsearch.addEventListener("keyup", function () {
//     searchblog(this.value);
// });

// let token = localStorage.getItem('token');
// let cont = document.querySelector('.pInputs');
// let mes = document.querySelector('.message');

// if (!token) {
//     mes.style.display='flex'
    
// } else {
//     mes.style.display='none'
    


// var pName = document.getElementById("pName");
// var pDate = document.getElementById("pDate");
// var pLocation = document.getElementById("pLocation");
// var pDesc = document.getElementById("pDesc");
// var btn = document.getElementById("btn");
// var tbody = document.getElementById("tbody");
// var bsearch = document.getElementById("bsearch");
// let source = document.getElementById('holder')
// var procontainer;
// var currentindex=0;

// if(JSON.parse(localStorage.getItem("products"))){
//     procontainer = JSON.parse(localStorage.getItem("products"));
//     dispro();
// }
// else{
//     procontainer=[];
// }
// function addblog() {
//     var travel = {
//         name: pName.value,
//         date: pDate.value,
//         location: pLocation.value,
//         desc: pDesc.value
//     };
//     procontainer.push(travel);
//     localStorage.setItem("products",JSON.stringify(procontainer))
   
// }


// btn.addEventListener("click",function() {
//     if(btn.innerHTML=="Add Blog Post"){
//         addblog();
//     }
//     else{
//         updateblog();
//     }
//     dispro();
//     clear();
// });
// function dispro() {
//     var travels = ``;
//     for (let i = 0; i < procontainer.length; i++) {
//         travels += `
//         <div class="card mb-3">
//             <div class="row g-0 p-0">
//                 <div class="col-md-4 img-holder" id="holder-${i}">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">Title: ${procontainer[i].name}</h5>
//                         <p class="card-date text-muted">Date: ${procontainer[i].date}</p>
//                         <p class="card-location text-muted">Location: ${procontainer[i].location}</p>
//                         <p class="card-discribtion text-muted">Discribtion: ${procontainer[i].desc}</p>
//                         <div class="d-flex mt-3 pt-2">
//                             <button class="btn delete" onclick="delpro(${i})">Delete</button>
//                             <button class="btn update" onclick="getdata(${i})">Update</button>
//                             <button class="btn see" onclick="window.location.href='./../page.html'">View</button>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//     }

//     tbody.innerHTML = travels;

//     // for (let i = 0; i < 6; i++) {
//     //     let holder = document.getElementById(`holder-${i}`);
//     //     holder.style.backgroundImage = `url('../assets/${i}.jpg')`;
//     // }
// }

// function delpro(id){
//     procontainer.splice(id,1);
//     localStorage.setItem("products",JSON.stringify(procontainer));
//     dispro();

// }
// function clear(){
//     pName.value='';
//      pDate.value='';
//      pLocation.value='';
//      pDesc.value='';

// }
// function getdata(id){
//     pName.value=procontainer[id].name;
//     pDate.value=procontainer[id].date;
//     pLocation.value=procontainer[id].location;
//     pDesc.value=procontainer[id].desc;
//     btn.innerHTML="update data";
//     currentindex=id;
// }
// function updateblog(){

//     var travel = {
//         name: pName.value,
//         date: pDate.value,
//         location: pLocation.value,
//         desc: pDesc.value
//     };
//     procontainer[currentindex]=travel;
//     localStorage.setItem("products",JSON.stringify(procontainer));
//     btn.innerText='Add Blog Post';
//     window.location.href='./../page.html'

// }
// function searchblog(term) {
//     var blogs = ``;
//     for (let i = 0; i < procontainer.length; i++) {
//         if (procontainer[i].name.toLowerCase().includes(term.toLowerCase())) {
//             blogs += `        <div class="card mb-3">
//             <div class="row g-0 p-0">
//                 <div class="col-md-4 img-holder" id="holder-${i}">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">Title: ${procontainer[i].name}</h5>
//                         <p class="card-date text-muted">Date: ${procontainer[i].date}</p>
//                         <p class="card-location text-muted">Location: ${procontainer[i].location}</p>
//                         <p class="card-discribtion text-muted">Discribtion: ${procontainer[i].desc}</p>
//                         <div class="d-flex mt-3 pt-2">
//                             <button class="btn delete" onclick="delpro(${i})">Delete</button>
//                             <button class="btn update" onclick="getdata(${i})">Update</button>
//                             <button class="btn see" onclick="window.location.href='./../page.html'">View</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//         }
//     }
//     tbody.innerHTML = blogs;
// }


// bsearch.addEventListener("keyup", function () {
//     searchblog(this.value);
// });

// }





// document.addEventListener('DOMContentLoaded', function () {
//     let token = localStorage.getItem('token');
//     let cont = document.querySelector('.pInputs');
//     let mes = document.querySelector('.message');

//     if (!token) {
//         mes.style.display = 'flex';
//     } else {
//         mes.style.display = 'none';
//         cont.classList.remove('d-none');
        

//         let pName = document.getElementById("pName");
//         let epDate = document.getElementById("epDate");
//         let pDate = document.getElementById("pDate");
//         let pLocation = document.getElementById("pLocation");
//         let pDesc = document.getElementById("pDesc");
//         let rate = document.getElementById("rate");
//         let btn = document.getElementById("btn");
//         let tbody = document.getElementById("tbody");
//         let bsearch = document.getElementById("bsearch");
//         let procontainer = JSON.parse(localStorage.getItem("products")) || [];
//         let currentindex = 0;

//         function addblog() {
//             if (!pName.value || !pDate.value || !epDate.value || !pLocation.value || !pDesc.value) {
//                 alert("All fields are required!");
//                 return;
//             }
//             let travel = {
//                 name: pName.value,
//                 date: pDate.value,
//                 edate: epDate.value,
//                 location: pLocation.value,
//                 desc: pDesc.value,
//                 rate: rate.value
//             };
//             procontainer.push(travel);
//             localStorage.setItem("products", JSON.stringify(procontainer));
//         }

//         function dispro() {
//             let travels = '';
//             for (let i = 0; i < procontainer.length; i++) {
//                 travels += `
//                     <div class="card mb-3">
//                         <div class="row g-0 p-0">
//                             <div class="col-md-4 img-holder" id="holder-${i}"></div>
//                             <div class="col-md-8">
//                                 <div class="card-body">
//                                     <h5 class="card-title">Title: ${procontainer[i].name}</h5>
//                                     <p class="card-date text-muted">Start Date: ${procontainer[i].date}</p>
//                                     <p class="card-date text-muted">End Date: ${procontainer[i].edate}</p>
//                                     <p class="card-location text-muted">Location: ${procontainer[i].location}</p>
//                                     <p class="card-description text-muted">Description: ${procontainer[i].desc}</p>
//                                     <p class="card-description text-muted">Rate: ${procontainer[i].rate}/10</p>
//                                     <div class="d-flex mt-3 pt-2">
//                                         <button class="btn delete" onclick="delpro(${i})">Delete</button>
//                                         <button class="btn update" onclick="getdata(${i})">Update</button>
//                                         <button class="btn see" onclick="window.location.href='./../page.html'">View</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;
//             }
//             tbody.innerHTML = travels;
//         }

//         function delpro(id) {
//             procontainer.splice(id, 1);
//             localStorage.setItem("products", JSON.stringify(procontainer));
//             dispro();
//         }

//         function clear() {
//             pName.value = '';
//             pDate.value = '';
//             epDate.value = '';
//             pLocation.value = '';
//             pDesc.value = '';
//         }

//         function getdata(id) {
//             pName.value = procontainer[id].name;
//             pDate.value = procontainer[id].date;
//             epDate.value = procontainer[id].edate;
//             pLocation.value = procontainer[id].location;
//             pDesc.value = procontainer[id].desc;
//             rate.value = procontainer[id].rate;
//             btn.innerHTML = "Update Blog Post";
//             currentindex = id;
//         }

//         function updateblog() {
//             let travel = {
//                 name: pName.value,
//                 date: pDate.value,
//                 edate: epDate.value,
//                 location: pLocation.value,
//                 desc: pDesc.value,
//                 rate: rate.value
//             };
//             procontainer[currentindex] = travel;
//             localStorage.setItem("products", JSON.stringify(procontainer));
//             btn.innerHTML = 'Add Blog Post';
//             dispro();
//             clear();
//         }

//         btn.addEventListener("click", function () {
//             if (btn.innerHTML === "Add Blog Post") {
//                 addblog();
//             } else {
//                 updateblog();
//             }
//             dispro();
//         });

//         bsearch.addEventListener("keyup", function () {
//             searchblog(this.value);
//         });

//         function searchblog(term) {
//             let blogs = '';
//             for (let i = 0; i < procontainer.length; i++) {
//                 if (procontainer[i].name.toLowerCase().includes(term.toLowerCase())) {
//                     blogs += `
//                         <div class="card mb-3">
//                             <div class="row g-0 p-0">
//                                 <div class="col-md-4 img-holder" id="holder-${i}"></div>
//                                 <div class="col-md-8">
//                                     <div class="card-body">
//                                         <h5 class="card-title">Title: ${procontainer[i].name}</h5>
//                                         <p class="card-date text-muted">Start Date: ${procontainer[i].date}</p>
//                                         <p class="card-date text-muted">End Date: ${procontainer[i].edate}</p>
//                                         <p class="card-location text-muted">Location: ${procontainer[i].location}</p>
//                                         <p class="card-description text-muted">Description: ${procontainer[i].desc}</p>
//                                         <p class="card-description text-muted">Description: ${procontainer[i].rate}/10</p>
//                                         <div class="d-flex mt-3 pt-2">
//                                             <button class="btn delete" onclick="delpro(${i})">Delete</button>
//                                             <button class="btn update" onclick="getdata(${i})">Update</button>
//                                             <button class="btn see" onclick="window.location.href='./../page.html'">View</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>`;
//                 }
//             }
//             tbody.innerHTML = blogs;
//         }

//         dispro();
//     }
// });



document.addEventListener('DOMContentLoaded', function () {
    let token = localStorage.getItem('token');
    let cont = document.querySelector('.pInputs');
    let mes = document.querySelector('.message');

    if (!token) {
        mes.style.display = 'flex';
    } else {
        mes.style.display = 'none';
        cont.classList.remove('d-none');

        let pName = document.getElementById("pName");
        let epDate = document.getElementById("epDate");
        let pDate = document.getElementById("pDate");
        let pLocation = document.getElementById("pLocation");
        let pDesc = document.getElementById("pDesc");
        let rate = document.getElementById("rate");
        let btn = document.getElementById("btn");
        let tbody = document.getElementById("tbody");
        let bsearch = document.getElementById("bsearch");
        let procontainer = JSON.parse(localStorage.getItem("products")) || [];
        let currentindex = -1; // Start with -1 indicating no current index

        function addblog() {
            if (!pName.value || !pDate.value || !epDate.value || !pLocation.value || !pDesc.value) {
                alert("All fields are required!");
                return;
            }
            let travel = {
                name: pName.value,
                date: pDate.value,
                edate: epDate.value,
                location: pLocation.value,
                desc: pDesc.value,
                rate: rate.value
            };
            procontainer.push(travel);
            localStorage.setItem("products", JSON.stringify(procontainer));
            clear();
            dispro();
        }

        function dispro() {
            let travels = '';
            for (let i = 0; i < procontainer.length; i++) {
                travels += `
                    <div class="card mb-3">
                        <div class="row g-0 p-0">
                            <div class="col-md-4 img-holder" id="holder-${i}"></div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Title: ${procontainer[i].name}</h5>
                                    <p class="card-date text-muted">Start Date: ${procontainer[i].date}</p>
                                    <p class="card-date text-muted">End Date: ${procontainer[i].edate}</p>
                                    <p class="card-location text-muted">Location: ${procontainer[i].location}</p>
                                    <p class="card-description text-muted">Description: ${procontainer[i].desc}</p>
                                    <p class="card-description text-muted">Rate: ${procontainer[i].rate}/10</p>
                                    <div class="d-flex mt-3 pt-2">
                                        <button class="btn delete" onclick="delpro(${i})">Delete</button>
                                        <button class="btn update" onclick="getdata(${i})">Update</button>
                                        <button class="btn see" onclick="window.location.href='./../page.html'">View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
            tbody.innerHTML = travels;
        }

        window.delpro = function (id) { // Expose delpro globally
            procontainer.splice(id, 1);
            localStorage.setItem("products", JSON.stringify(procontainer));
            dispro();
        };

        window.getdata = function (id) { // Expose getdata globally
            pName.value = procontainer[id].name;
            pDate.value = procontainer[id].date;
            epDate.value = procontainer[id].edate;
            pLocation.value = procontainer[id].location;
            pDesc.value = procontainer[id].desc;
            rate.value = procontainer[id].rate;
            btn.innerHTML = "Update Blog Post";
            currentindex = id;
        };

        function clear() {
            pName.value = '';
            pDate.value = '';
            epDate.value = '';
            pLocation.value = '';
            pDesc.value = '';
            rate.value = '';
        }

        function updateblog() {
            let travel = {
                name: pName.value,
                date: pDate.value,
                edate: epDate.value,
                location: pLocation.value,
                desc: pDesc.value,
                rate: rate.value
            };
            procontainer[currentindex] = travel;
            localStorage.setItem("products", JSON.stringify(procontainer));
            btn.innerHTML = 'Add Blog Post';
            currentindex = -1; // Reset current index
            clear();
            dispro();
        }

        btn.addEventListener("click", function () {
            if (btn.innerHTML === "Add Blog Post") {
                addblog();
            } else {
                updateblog();
            }
        });

        bsearch.addEventListener("keyup", function () {
            searchblog(this.value);
        });

        function searchblog(term) {
            let blogs = '';
            for (let i = 0; i < procontainer.length; i++) {
                if (procontainer[i].name.toLowerCase().includes(term.toLowerCase())) {
                    blogs += `
                        <div class="card mb-3">
                            <div class="row g-0 p-0">
                                <div class="col-md-4 img-holder" id="holder-${i}"></div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Title: ${procontainer[i].name}</h5>
                                        <p class="card-date text-muted">Start Date: ${procontainer[i].date}</p>
                                        <p class="card-date text-muted">End Date: ${procontainer[i].edate}</p>
                                        <p class="card-location text-muted">Location: ${procontainer[i].location}</p>
                                        <p class="card-description text-muted">Description: ${procontainer[i].desc}</p>
                                        <p class="card-description text-muted">Rate: ${procontainer[i].rate}/10</p>
                                        <div class="d-flex mt-3 pt-2">
                                            <button class="btn delete" onclick="delpro(${i})">Delete</button>
                                            <button class="btn update" onclick="getdata(${i})">Update</button>
                                            <button class="btn see" onclick="window.location.href='./../page.html'">View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                }
            }
            tbody.innerHTML = blogs;
        }

        dispro();
    }
});
