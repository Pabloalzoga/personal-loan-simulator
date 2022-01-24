
let startUserName = document.getElementById('userName');
let requestedUserEmail = document.getElementById('emailConfirm');
let userPassword = document.getElementById('userPassword');

let loanValue = document.getElementById('directValue');
let monthlyFee = document.getElementById('directMoth');


function clickForm() {
  startUserName = document.getElementById('userName').value;
  requestedUserEmail = document.getElementById('emailConfirm').value;
  userPassword = document.getElementById('userPassword').value;
  let stored = ('preparando datos');
  
  
  console.log(`Nombre: ${startUserName}`);
  console.log(`email: ${requestedUserEmail}`);
  console.log(`contraseña: ${userPassword}`);
  console.log(stored);  
   
  const userDirect = {startUserName, requestedUserEmail, userPassword}
    localStorage.setItem('userDirect', JSON.stringify(userDirect));
    console.log(typeof userDirect);
  
  if (startUserName == '') {
    let userNameMessage = ('Nombre incompleto!');
    alert(userNameMessage);

  }else{
    console.log('campo completo');

  }
  if (requestedUserEmail == ''){
    let emailMessage = ('Campo incompleto!');
    alert(emailMessage);

  }else{
    console.log('campo completo');

  }

}   
//solicitando un valor por defecto en el simulador
function incomeValue() {
  loanValue = document.getElementById('directValue').value;
  
  if (loanValue == '') {
    swal({title:'completa el campo correctamente'});

  }
  else if (loanValue > 500000) {
    swal({
      title:'Ouch!', 
      text:'monto no disponible', 
      icon:'error'
      });

  }
  else if (loanValue <= 500000) {
    console.log('monto disponible');

  }else{
    console.log('operacion denegada');

  }
  
}
//aplicando intereses e impuestos mediante cuotas mensuales
function interestCalc () {
  //se agrega el impuesto del 16% al valor solicitado
  monthlyFee = document.getElementById('directMoth').value;
  let aggregateTax = 16;
  let operaciones = loanValue * aggregateTax / 100;
  let totalImp = operaciones * monthlyFee; 
  
  
  if (monthlyFee == '') {
    console.log('no accedio al campo');
    
  } else {
    console.log('acceso al campo');
    
  }
  //acceso a un pago sin interes
  if (monthlyFee == 1) {
    let mothMessage = ('accediendo a un pago, sin interes'); 
    let valueMessage = (`accediste al prestamo!`);
    let interestMessage = ('pasemos al siguiente paso');

    console.log(mothMessage);
    
    swal({
      title: valueMessage,
      text: interestMessage    
    });
    
  } else {
    console.log('acceso al metodo de cuotas');

  }
  //desde el metodo de pago de 3, 6, y 12 cuotas se aplican intereses + el impuesto agregado
  if (monthlyFee == 3) {
    let mothMessage = ('acceso a prestamo de 3 cuotas mensuales');
    let amountInterest = 20;
    let opera = loanValue * amountInterest / 100;
    let total = opera * monthlyFee;
    let interesMessage = ('se aplica un interes del 20%');
    let directInterest = (`total de intereses: ${total} a ${monthlyFee} meses`)
    
    console.log(mothMessage);
    
    swal({
      title: interesMessage,
      text: directInterest
    });  
  } 
  else if (monthlyFee == 6) {
    mothMessage = ('acceso a prestamo de 6 cuotas mensuales');
    amountInterest = 20;
    opera = loanValue * amountInterest / 100;
    total = opera * monthlyFee;
    interesMessage = ('se aplica un interes del 20%');
    directInterest = (`total de intereses: ${total} a ${monthlyFee} meses`)
    
    console.log(mothMessage);

    swal({
      title: interesMessage,
      text: directInterest
    });  
  } 
  else if (monthlyFee == 12) {
    mothMessage = ('acceso a prestamo de 12 cuotas mensuales')
    amountInterest = 20;
    opera = loanValue * amountInterest / 100;
    total = opera * monthlyFee;
    interesMessage = ('se aplica un interes del 20%');
    directInterest = (`total de intereses: ${total} a ${monthlyFee} meses`)
    
    console.log(mothMessage);
    
    swal({
      title: interesMessage,
      text: directInterest
    });  
  } 
  
  console.log(`saldo: ${loanValue}`);
  console.log(`impuesto agregado: ${totalImp}`);
  
  const userContable = {loanValue, monthlyFee, amountInterest, aggregateTax}
  localStorage.setItem('userContable', JSON.stringify(userContable));
  console.log(typeof userContable);
}

function adheredAmount(){
  let modalMontoHabilitado = ('prestamo habilitado!');
  swal({
      title: modalMontoHabilitado,
      icon:'success'
    });
    
  }
