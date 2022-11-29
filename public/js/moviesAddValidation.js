window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    
}

console.log('succes add');

const msgError = (element, msg, { target }) => {
    $(element).style.color = 'red'
    $(element).innerText = msg
    target.classList.add('is-invalid')
}

const cleanField = (element, target) => {
    $(element).innerText = null
    target.classList.remove('is-invalid', 'is-valid')
}

const validField = (element, { target }) => {
    cleanField(element, target)
    target.classList.add('is-valid')
}

$('title').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('errorTitle', 'Se requiere el titulo', e)
            break;
        case this.value.trim().length < 2:
            msgError('errorTitle', 'El nombre debe tener como minimo 2 caracteres', e)
            break;
        default:
            validField('errorTitle', e)
            break;
    }
})

$('title').addEventListener('focus', function ({ target }) {
    cleanField('errorTitle', target)
})

$('rating').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('errorRating', 'Se requiere calificaion', e)
            break;
        case this.value > 10:
            msgError('errorRating', 'La calificacion como max 10 caracteres', e)
            break;
        case this.value < 0:
            msgError('errorRating', 'No puede ser numero negativo', e)
            break;
        default:
            validField('errorRating', e)
            break;
    }
})

$('rating').addEventListener('focus', function ({ target }) {
    cleanField('errorRating', target)
})

$('awards').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('errorAwards', 'Se requiere el titulo', e)
            break;
        case this.value > 10:
            msgError('errorAwards', 'La calificacion como max 10 caracteres', e)
            break;
        case this.value < 0:
            msgError('errorAwards', 'No puede ser numero negativo', e)
            break;
        default:
            validField('errorAwards', e)
            break;
    }
})

$('awards').addEventListener('focus', function ({ target }) {
    cleanField('errorAwards', target)
})

$('release_date').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('errorDate', 'Se requiere una fecha', e)
            break;
        default:
            validField('errorDate', e)
            break;
    }
})

$('release_date').addEventListener('focus', function ({ target }) {
    cleanField('errorDate', target)
})

$('length').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('errorLength', 'Se requiere una duracion', e)
            break;
        case this.value < 60:
            msgError('errorLength', 'La duracion debe tener como minimo 60 minutos', e)
            break;
        case this.value >= 360:
            msgError('errorLength', 'La duracion no puedo superar los 360 minutos', e)
            break;
        default:
            validField('errorLength', e)
            break;
    }
})

$('length').addEventListener('focus', function ({ target }) {
    cleanField('errorLength', target)
})

$('genre_id').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('errorGenre', 'Se requiere un genero', e)
            break;
        default:
            validField('errorGenre', e)
            break;
    }
})

$('genre_id').addEventListener('focus', function ({ target }) {
    cleanField('errorGenre', target)
})


