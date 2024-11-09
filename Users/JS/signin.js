
window.onload = init;
function init() {
    if(localStorage.getItem('token')){
        token = localStorage.getItem('token');
        document.querySelector('.btn-cancel').addEventListener('click', function(){
            window.location.href = 'Main.html';
        });
        document.querySelector('.btn-add').addEventListener('click', signin);
        
    }
    else {
        window.location.href = 'index.html';
    }
}

function signin() {
    axios.post('http://localhost:3000/user/signin', {
        first_name: document.getElementById('input-first-name').value,
        last_name: document.getElementById('input-last-name').value,
        phone: document.getElementById('input-phone').value,
        email: document.getElementById('input-mail').value,
        address: document.getElementById('input-address').value
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(function(res) {
        if(res.data.code == 201){
            alert("Usuario registrado correctamente");
            window.location.href = 'signin.html';
        }
    }).catch(function(err) {
        console.log(err);
        alert("Ocurrió un error");
    });
    
}