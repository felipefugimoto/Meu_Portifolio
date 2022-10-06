
const skills = document.querySelectorAll(".skill-box");
const descricao = document.querySelector(".text-descricao");
const sobreSkill = [
        //HTML
        "<p><p>HTML</p> <p>É uma linguaguem de marcação utilizada na construção de páginas web</p> </p>",
        //CSS
        "<p> <p>CSS</p> <p>É um mecanismo para adicionar estilo a um documento web.</p> </p>",
        //JS
        "<p> <p>JavaScript</p> <p>É uma linguaguem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p> </p>",
        //React Native
        "<p> <p>React Native</p> <p>É uma  biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.</p> </p>",
        //PHP
        "<p> <p>PHP</p> <p>É uma linguaguem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web</p> </p>",
        //MySql
        "<p> <p>MySQL</p> <p>É um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo. </p> </p>",
        //WordPress
        "<p> <p>WordPress</p> <p>É um sistema livre e aberto de gestão de conteúdo para internet, baseado em PHP com banco de dados MySQL, executado em um servidor interpretador, voltado principalmente para a criação de páginas eletrônicas e blogs online.</p> </p>",
        //GitHub
        "<p> <p>GitHub</p> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.</p> </p>",
        //Git
        "<p> <p>Git</p> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p> </p>",
];
const dataInicio = [
    (new Date(2021, 10, 1)).getTime(),  //0
    (new Date(2021, 10, 1)).getTime(),  //1
    (new Date(2021, 0, 1)).getTime(),   //2
    (new Date(2022, 3, 1)).getTime(),   //3
    (new Date(2022, 3, 1)).getTime(),   //4
    (new Date(2022, 1, 1)).getTime(),   //5
    (new Date(2022, 1, 1)).getTime(),   //6
    (new Date(2021, 11, 1)).getTime(),  //7
    (new Date(2021, 11, 1)).getTime(),  //8
];
const dataHoje = new Date().getTime();

skills.forEach((elemento, index) => {
  let index1 = index;
  let elemento1 = elemento;
  elemento.addEventListener("mouseover", (evento) => {
    let tempo = "mês";
    let tempoDeExperiencia = Math.round(
      (dataHoje - dataInicio[index1]) / (1000 * 60 * 60 * 24 * 30)
    );
    if (tempoDeExperiencia > 1) tempo = "meses";
    descricao.innerHTML = `<p>${sobreSkill[index1]} </p>`;
  });
  elemento.addEventListener("mouseout", (evento, elemento) => {
    descricao.innerHTML =
      "/* Passe o mouse por cima de alguma habilidade para ler a descrição */";
  });
});
