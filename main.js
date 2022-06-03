function cadastrar() {

  let name = document.getElementsByName('name')[0]
  let cpf = document.getElementsByName('cpf')[0]
  let phone = document.getElementsByName('tel')[0]
  let email = document.getElementsByName('email')[0]
  let pass = document.getElementsByName('senha')[0]

  //Validar campo obrigatorio
  if (name.value == "") {
    alert('campo nome é obrigatório')
    name.focus()
    return false
  }

  if (cpf.value == "") {
    alert('campo cpf é obrigatório')
    cpf.focus()
    return false
  }

  if (phone.value == "") {
    alert('campo telefone é obrigatório')
    phone.focus()
    return false
  }

  if (email.value == "") {
    alert('campo telefone é obrigatório')
    email.focus()
    return false
  }

  if (pass.value == "") {
    alert('campo senha é obrigatório')
    pass.focus()
    return false
  }
}
