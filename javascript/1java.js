//COMENTEI AQUI PQ NÃO TAVA SENDO USADO
/* if (Quantidade == 1) {
    
} */

function guardarQuantidadeNavegarParaNomeDasMaterias() {
  // GUARDA O VALOR DO INPUT 'QUANTIDADE' EM UMA VARIAVEL
  const quantidadeMateriasInput = document.getElementById('quantidade').value
  // GUARDA O VALOR DA VARIAVEL NO LOCALSTORAGE, ESSA É UMA POSSIBILIDADE
  localStorage.setItem('quantidadeMaterias', quantidadeMateriasInput)
  // NAVEGA PARA A PAGINA QUE POSSUI OS INPUS PARA O NOME DAS METERIAS  
  window.location.href = "index3.html"
}

function criarInputsNomeDasMaterias() {  
  // BUSCA A QUANTIDADE DE MATERIAS DO LOCALSTORAGE E COLOCA EM UMA VARIAVEL
  const quantidadeMaterias = +localStorage.getItem('quantidadeMaterias')  
  //CRIANDO REFERENCIA PARA A DIV Q IRÁ RECEBER OS INPUTS CRIADOS
  const divNomeMaterias = document.getElementById('nomeMaterias')  
  // CRIA OS INPUTS DE ACORDO COM A QUANTIDADE, ATRAVES DE UM LAÇO DE REPETIÇÃO
  // SEGUI O PADRAO Q VC TAVA SEGUINDO NO HTML: <DIV> <INPUT> </DIV> <BR>  
  for(let i = 0; i < quantidadeMaterias; i++){
    //CRIA DIV
    const div = document.createElement("DIV")
    // SETA ATRIBUTO id, VC PODE COLOCAR MAIS
    div.setAttribute("id", `pai${i+1}`)
    //CRIA INPUT
    const input = document.createElement("INPUT")
    // ADICIONA A DIV CRIADA AQUI NO LOOP A DIV nomeMaterias
    divNomeMaterias.append(div)
    // ADICIONA INPUT A DIV
    div.append(input)
    // SETA ALGUNS ATRIBUTOS, VC PODE COLOCAR MAIS
    input.setAttribute("placeholder", `Insira a ${i+1}ª aqui`)
    input.setAttribute("maxlength", "30")
    input.setAttribute("id", `nome${i+1}`)
    input.style.fontSize = "23px";
    input.style.textAlign = "center";
    input.style.padding = "0.5px";
    //CRIA UM BREAK
    const br = document.createElement("BR")
    // ADICIONA O BR NA DIV nomeMaterias
    divNomeMaterias.append(br)
    // ISSO SE REPETIRÁ DE ACORDO COM A QUANTIDADE COLOCADA NO INPUT DO INDEX2
  }
}

function guardarNomeDasMateriasNavegarGrauDificuldades() {
  const quantidadeMaterias = +localStorage.getItem('quantidadeMaterias')
  const nomeDasMaterias = []  
  for(let i = 0; i < quantidadeMaterias; i++){
    const nomeMateria = document.getElementById(`nome${i+1}`).value
    nomeDasMaterias.push(nomeMateria)
  }
  console.log(nomeDasMaterias)
  localStorage.setItem('nomeDasMaterias', nomeDasMaterias)
  window.location.href = "index4.html"
}

function guardarniveis() {
  const quantidadeMaterias = +localStorage.getItem('quantidadeMaterias')
  const niveisDasMaterias = []  
  for(let i = 0; i < quantidadeMaterias; i++){
    const nivel = document.getElementById(`${i+1}º`).value
    niveisDasMaterias.push(nivel)
  }
  console.log(niveisDasMaterias)
  localStorage.setItem('niveisDeDificuldade', niveisDasMaterias)
  window.location.href = "index5.html"  
}

function guardarHorarios(){
  const horarioinicio = document.getElementById('horarioinicio').value  
  const horariofinal = document.getElementById('horariofinal').value  
  localStorage.setItem('horarioinicio', horarioinicio)
  localStorage.setItem('horariofinal', horariofinal)
  var a = horarioinicio.split(':');
  var secondsinicio = (+a[0]) * 60 * 60 + (+a[1]) * 60; 
  var a = horariofinal.split(':');
  var secondsfinal = (+a[0]) * 60 * 60 + (+a[1]) * 60; 
  console.log(secondsinicio);
  localStorage.setItem('secondsinicio', secondsinicio)
  localStorage.setItem('secondsfinal', secondsfinal)
  window.location.href = "index6.html"
}

function criarSelectsNiveisDificuldade() {  
  const quantidadeMaterias = +localStorage.getItem('quantidadeMaterias')
  const divConteudo = document.getElementById('conteudo')
  const select = document.getElementById('1º')
  for(let i = 0; i < quantidadeMaterias - 1; i++){
    const p = document.createElement("P")
    // Acrescentei um id para os <p> para assim saber qual modificar o nome
    p.setAttribute("id", `${i+2}`)
    p.innerHTML = `${i+2}ª Materia`    
    const novoSelect = select.cloneNode(true)
    novoSelect.setAttribute("id", `${i+2}º`)
    divConteudo.append(p)
    divConteudo.append(novoSelect)   
    select.style.backgroundColor = "white";
    select.style.outline = "0px";
    novoSelect.style.backgroundColor = "white";
    novoSelect.style.outline = "0px";
  }  
  
  // Aqui acrescentei essa parte para colocar os nomes das materias, 
  //como nesse momento os ids estão na sequencia 1º, 2º, 3º... 
  //fica mais facil usar um laço for e ir substituindo pelos nomes que foram 
  //colocados no localstorage  
  const nomeDasMaterias = localStorage.getItem('nomeDasMaterias').split(',') // Usei split pq estava vindo uma string só separando os nomes por ',' 
  //depois veja o que o split() faz,é um método para string existe vários métodos que modificam strings cada um com uma função
  //Este for vai renomeando os <p> para os nomes do array nomeDasMaterias
  for(let i = 0; i < quantidadeMaterias; i++){
    const p = document.getElementById(i+1)
    p.innerHTML = nomeDasMaterias[i] 
    p.style.color = "white";   
  }
}
function planodeestudos() {
  const nomeDasMaterias = +localStorage.getItem('nomeDasMaterias')
  const quantidadedasmaterias = +localStorage.getItem('quantidadeMaterias')
  const dificuldades = +localStorage.getItem('niveisDeDificuldade')
  const começo = +localStorage.getItem('secondsinicio')
  const fim = +localStorage.getItem('secondsfinal')
  const range = fim - começo 
  localStorage.setItem('tempototal', range)
  for(let i = 0; i < quantidadeMaterias -1; i++) {
 }
}