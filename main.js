function validar(){
    let enviar= true;
    let forma = document.getElementById("formulario");
    

    if(!forma.card.value.trim().length >0){
        enviar= false;
        forma.card.focus();
        forma.card.classList.add('is-invalid');
    } else{
        forma.card.classList.remove('is-invalid');
        forma.card.classList.add('is-valid');

    }
    if(!forma.CVC.value.trim().length >0){
        enviar= false;
        forma.CVC.focus();
        forma.CVC.classList.add('is-invalid');
    } else{
        forma.CVC.classList.remove('is-invalid');
        forma.CVC.classList.add('is-valid');

    }
    if(!forma.amount.value.trim().length >0){
        enviar= false;
        forma.amount.focus();
        forma.amount.classList.add('is-invalid');
    } else{
        forma.amount.classList.remove('is-invalid');
        forma.amount.classList.add('is-valid');

    }if(!forma.inputName.value.trim().length >0){
        enviar= false;
        forma.inputName.focus();
        forma.inputName.classList.add('is-invalid');
    } else{
        forma.inputName.classList.remove('is-invalid');
        forma.inputName.classList.add('is-valid');

    }
    if(!forma.inputName2.value.trim().length >0){
        enviar= false;
        forma.inputName2.focus();
        forma.inputName2.classList.add('is-invalid');
    } else{
        forma.inputName2.classList.remove('is-invalid');
        forma.inputName2.classList.add('is-valid');

    }
    if(!forma.inputCity.value.trim().length >0){
        enviar= false;
        forma.inputCity.focus();
        forma.inputCity.classList.add('is-invalid');
    } else{
        forma.inputCity.classList.remove('is-invalid');
        forma.inputCity.classList.add('is-valid');

    }
    if(!forma.inputState.value.trim().length >0){
        enviar= false;
        forma.inputState.focus();
        forma.inputState.classList.add('is-invalid');
    } else{
        forma.inputState.classList.remove('is-invalid');
        forma.inputState.classList.add('is-valid');

    }
    if(!forma.inputcod.value.trim().length >0){
        enviar= false;
        forma.inputcod.focus();
        forma.inputcod.classList.add('is-invalid');
    } else{
        forma.inputcod.classList.remove('is-invalid');
        forma.inputcod.classList.add('is-valid');

    }
    if(!forma.opinion.value.trim().length >0){
        enviar= false;
        forma.opinion.focus();
        forma.opinion.classList.add('is-invalid');
    } else{
        forma.opinion.classList.remove('is-invalid');
        forma.opinion.classList.add('is-valid');

    }
return enviar;

}
