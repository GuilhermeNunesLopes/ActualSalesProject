
function validar() {
var nome = step1.nome.value;
var data_nascimento = step1.sobrenome.value;
var  email= step1.sobrenome.value;
var telefone = step1.sobrenome.value;


if (nome == "") {
alert('Preencha o campo com seu nome');
form1.nome.focus();
return false;
}

if (data_nascimento == "") {
alert('Preencha o campo com sua data de nascimento');
step1.data_nascimento.focus();
return false;
}
if (email == "") {
alert('Preencha o campo com seu e-mail');
step1.email.focus();
return false;
}
if (telefone == "") {
alert('Preencha o campo com seu telefone');
step1.telefone.focus();
return false;
}
if(preg_match("/\(?\d{2}\)?\s?\d{5}\-?\d{4}/", telefone)) {
  alert('Telefone valido');
}else{
alert('Telefone invalido');
step1.telefone.focus();
return false;
}
}