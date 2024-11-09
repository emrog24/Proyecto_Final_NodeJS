window.onload = init;
function init() {
    if(localStorage.getItem('token')){
        token = localStorage.getItem('token');
        document.querySelector('.btn-cancel').addEventListener('click', function(){
            window.location.href = 'Main.html';
        });

        document.querySelector('.btn-first-name').addEventListener('click', modifyFirstName);
        document.querySelector('.btn-last-name').addEventListener('click', modifyLastName);
        document.querySelector('.btn-phone').addEventListener('click', modifyPhone);
        document.querySelector('.btn-mail').addEventListener('click', modifyEmail);
        document.querySelector('.btn-address').addEventListener('click', modifyAddress);
        
        
    }
    else {
        window.location.href = 'index.html';
    }
}

function modifyFirstName() {
    var id = document.getElementById('input-id').value;
    var first_name = document.getElementById('input-first-name').value;
    axios.put(`http://localhost:3000/user/first_name/${id}`, {
        first_name: first_name
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(function(res) {
        if(res.data.code == 200){
            alert("Usuario modificado correctamente");
            window.location.href = 'modifyUser.html';
        }
    }).catch(function(err) {
        alert("Ocurrió un error");
    });
}

function modifyLastName() {
    var id = document.getElementById('input-id').value;
    var last_name = document.getElementById('input-last-name').value;
    axios.patch(`http://localhost:3000/user/last_name/${id}`, {
        last_name: last_name
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(function(res) {
        if(res.data.code == 200){
            alert("Usuario modificado correctamente");
            window.location.href = 'modifyUser.html';
        }
    }).catch(function(err) {
        alert("Ocurrió un error");
    });
}

function modifyPhone() {
    var id = document.getElementById('input-id').value;
    var phone = document.getElementById('input-phone').value;
    axios.patch(`http://localhost:3000/user/phone/${id}`, {
        phone: phone
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(function(res) {
        if(res.data.code == 200){
            alert("Usuario modificado correctamente");
            window.location.href = 'modifyUser.html';
        }
    }).catch(function(err) {
        alert("Ocurrió un error");
    });
}

function modifyEmail() {
    var id = document.getElementById('input-id').value;
    var email = document.getElementById('input-mail').value;
    axios.patch(`http://localhost:3000/user/email/${id}`, {
        email: email
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(function(res) {
        if(res.data.code == 200){
            alert("Usuario modificado correctamente");
            window.location.href = 'modifyUser.html';
        }
    }).catch(function(err) {
        alert("Ocurrió un error");
    });
}

function modifyAddress() {
    var id = document.getElementById('input-id').value;
    var address = document.getElementById('input-address').value;
    axios.patch(`http://localhost:3000/user/address/${id}`, {
        address: address
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(function(res) {
        if(res.data.code == 200){
            alert("Usuario modificado correctamente");
            window.location.href = 'modifyUser.html';
        }
    }).catch(function(err) {
        alert("Ocurrió un error");
    }
    );
}
