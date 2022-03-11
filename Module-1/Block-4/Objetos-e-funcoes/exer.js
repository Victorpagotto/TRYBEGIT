let info= []
    info[0]={
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };


  console.log('----------1----------');
  console.log('Bem-vinda, '+info[0].personagem+'.');
  console.log('----------2----------');
  info[0].recorrente='Sim.';
  console.log(info[0]);
  console.log('----------3----------');
  for (key in info[0]){
      console.log(key);
  };
  console.log('----------4----------');
  info[1]={
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'sim',
  }
  console.log(info[0].personagem+' e '+info[1].personagem);
  console.log(info[0].origem+' e '+info[1].origem);
  console.log(info[0].nota+' e '+info[1].nota);
  console.log('Ambos são recorrentes.');
  console.log('----------5----------');
  console.log('O livro favorito de '+leitor.nome,leitor.sobrenome+' se chama '+leitor.livrosFavoritos[0].titulo+'.');
  console.log('----------6----------');
  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });
  console.log('----------7----------');
  console.log('Julia tem '+leitor.livrosFavoritos.length+' livros favoritos.');