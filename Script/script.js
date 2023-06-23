var btnResponsavelFinanceiro = document.getElementById("flexCheckChecked");debugger;

btnResponsavelFinanceiro.addEventListener("click", function(){ 
    
    var divResponsavelFinanceiro = document.getElementById("responsavelFinanceiro");

    if(divResponsavelFinanceiro.style.display ==="none"){
        divResponsavelFinanceiro.style.display ="block";
    }else{
        divResponsavelFinanceiro.style.display = "none";
    }
})