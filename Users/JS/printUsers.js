window.onload = init;
function init() {
    if(localStorage.getItem('token')){
        token = localStorage.getItem('token');
        document.querySelector('.btn-cancel').addEventListener('click', function(){
            window.location.href = 'Main.html';
        });
        document.querySelector('.btn-search').addEventListener('click', searchUser);
        document.querySelector('.btn-print').addEventListener('click', printAll);
        
    }
    else {
        window.location.href = 'index.html';
    }
}

function printAll() {
    axios.get('http://localhost:3000/user/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(function(res) {
        if(res.data.code == 200){
            DisplayUsers(res.data.message);
        }
    }).catch(function(err) {
        console.log(err);
        alert("Ocurrió un error");
    });
    
}

function searchUser(){
    var first_name = document.getElementById('input-first-name').value;
    axios.get(`http://localhost:3000/user/${first_name}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(function(res) {
        if(res.data.code == 200){
            DisplayUsers(res.data.message);
        }
    }).catch(function(err) {
        console.log(err);
        alert("Ocurrió un error");
    });
}

function DisplayUsers(user){
    var body = document.querySelector('#Tbody');
    body.innerHTML = '';
    var html = `<center><h1>Empleados</h1></center>`;
    html += `<table border="1" cellpadding="5" cellspacing="0" style="width: 100%; text-align: left;">`;
    html += `<tr>`;
    html += `<th>ID</th>`;
    html += `<th>Nombres</th>`;
    html += `<th>Apellidos</th>`;
    html += `<th>Email</th>`;
    html += `<th>Teléfono</th>`;
    html += `<th>Dirección</th>`;
    html += `</tr>`;
    for (var i = 0; i < user.length; i++) {
        html += `<tr>`;
        html += `<td>${user[i].ID}</td>`;
        html += `<td>${user[i].first_name}</td>`;
        html += `<td>${user[i].last_name}</td>`;
        html += `<td>${user[i].email}</td>`;
        html += `<td>${user[i].phone}</td>`;
        html += `<td>${user[i].address}</td>`;
        html += `</tr>`;
    }
    html += `</table>`;
    body.innerHTML = html;
}
