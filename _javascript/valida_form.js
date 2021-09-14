//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function validaFormulario(){
    var user = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var valida = '{"user": "Usuario", "pass": "Abc$123"}';

    var obj = JSON.parse(valida);

    if(user == obj.user && senha == obj.pass){
        return true;
    }else{
        alert('Senha inválida: Usuario / Abc$123');
        return false;
    }
}

function validar_tudo(){
    
    if(validaFormulario()){
        if(document.getElementById('butassin').disabled){
            document.getElementById('butassin').disabled = false;
            return false;
        }else{
            return true;
        }
        
    }else{
        return false; 
    }
}

function contador(){
    var data = new Date();
    var contP = document.getElementById("cont");
    var vCont = 0;

    setInterval(function(){contP.innerHTML = data + ' ' + vCont++;}, 1000);

}



