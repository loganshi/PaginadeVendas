var btnResponsavelFinanceiro = document.getElementById("flexCheckChecked");

btnResponsavelFinanceiro.addEventListener("click", function(){ 
    
    var divResponsavelFinanceiro = document.getElementById("responsavelFinanceiro");

    if(divResponsavelFinanceiro.style.display ==="none"){
        divResponsavelFinanceiro.style.display ="block";
    }else{
        divResponsavelFinanceiro.style.display = "none";
    }
})
const form = document.getElementById('DadosDoTitular');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function setError(index){
    campos[index].style.border ='2px solid #e63636';
    spans[index].style.display = 'block';
}
function removeError(index){
    campos[index].style.border ='';
    spans[index].style.display = 'none';
}
function validarCPF2(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}
function validarNome(){
    var nomeDigitado = campos[0].value
    // var resultado = nomeDigitado.trim().split(" ")
    nomeDigitado = nomeDigitado.trim();
    var resultado = nomeDigitado.split(" ");
    if(resultado.length <= 1){ 
        setError(0);
    }
    else{
        removeError(0);
    }
}
function validarCPF(){ debugger;
    var cpfDigitado = campos[1].value
    if(validarCPF2(cpfDigitado)){
        removeError(1);
    }
    else{
        setError(1);
    }
}
