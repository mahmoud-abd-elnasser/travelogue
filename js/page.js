const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const area1 = document.getElementById('t-area-1');
const area2 = document.getElementById('t-area-2');
const area3 = document.getElementById('t-area-3');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const finalMessage = document.getElementById('finalMessage');
const alert = document.getElementById('alert');

btn1.addEventListener('click', function() {
    if (text1.value=='') {
        alert.style.display = 'block';
    } else {
        area1.style.display='none'
        area2.style.display='block'
        alert.style.display = 'none';
    }
});
btn2.addEventListener('click', function() {
    if (text2.value=='') {
        alert.style.display = 'block';
    } else {
        area2.style.display='none'
        area3.style.display='block'
        alert.style.display = 'none';
    }
    });
btn3.addEventListener('click', function() {
    if (text3.value=='') {
        alert.style.display = 'block';
    } else {
        area3.style.display='none'
        alert.style.display = 'none';
        finalMessage.style.display = 'flex';
        area1.style.display='block'
        let t_hold = JSON.parse(localStorage.getItem("comments")) || [];
        let comment = {
            name: text2.value,
            email: text3.value,
            com: text1.value
        };
        t_hold.push(comment);
        localStorage.setItem("comments", JSON.stringify(t_hold));
        let comments = '';
        for (let i = 0; i < t_hold.length; i++) {
            comments += `
            <span style="color: #424242c5;" class="mt-2">From : ${t_hold[i].name} , ${t_hold[i].email}</span>
            <span class="ms-2 fw-medium">Comment : ${t_hold[i].com}</span>`;
        }
        text1.value='';
        text2.value='';
        text3.value='';
            finalMessage.innerHTML = comments;
    }
    });
