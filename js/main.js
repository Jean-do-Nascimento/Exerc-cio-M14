$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
rules: {
    telefone: {
        required: true,
        tel: true
    }
}
})
})
