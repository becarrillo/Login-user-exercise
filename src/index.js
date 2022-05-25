let filter;
function validate(user, psw) {
    function isNull(input) {
        return input === ''
    };

    if (isNull(user)) {
        document.getElementById('userErrorSpan').innerText = "Ningún valor usuario ingresado";
    };

    if (isNull(psw)) {
        document.getElementById('passwErrorSpan').innerText = "Ningún valor contraseña ingresado";
    };

    
    filter = data.filter(doc => {
        return doc.USUARIO === user && doc.CONTRASENA === psw
    });
    console.log(filter);
}



const data = [
    {
        USUARIO: 'brian_mack23',
        CONTRASENA: 'pdf67M88G3'
    },
    {
        USUARIO: 'esperanza_gomez05',
        CONTRASENA: '45A74_hs9'
    },
    {
        USUARIO: 'Nathaly-Barraza',
        CONTRASENA: '01234F'
    },
    {
        USUARIO: 'Carlos_Bacca-2',
        CONTRASENA: 'mBof53'
    },
    {
        USUARIO: 'Daniel Rudas',
        CONTRASENA: 'jMP099'
    },
    {
        USUARIO: 'Soro Bermudez',
        CONTRASENA: '12345t'
    },
    {
        USUARIO: 'teo_gutierrez',
        CONTRASENA: '24680G'
    },
    {
        USUARIO: 'Maritza_Ramirez',
        CONTRASENA: 'p1357$'
    },
    {
        USUARIO: 'Esteban93',
        CONTRASENA: 'r90123'
    },
    {
        USUARIO: 'penelope_cruz08',
        CONTRASENA: 'abcdef76'
    }
];

let user = window.prompt("Ingresa usuario registrado");
let password = window.prompt("Ingresa contraseña");
const inputs = {
    "user": user,
    "password": password
};

validate(inputs.user, inputs.password);