$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
rules: {
    nome: {
        required: true
    },
    email: {
        required: true,
        email: true
    },
    telefone: {
        required: true,
        tel: true
    }
},

messages: {
    nome: 'este campo é obrigatório',
    telefone: 'este campo é obrigatório',
    email: 'este campo é obrigatório',
    mensagem: 'este campo é obrigatório',
},

invalidHandler: function (evento, validador) {
    let camposIncorretos = validador.numberOfInvalids();
    if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
    }
}
})
})
