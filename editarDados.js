    // Dados do item selecionado para edição
    var itemSelecionado = { id: 1, nome: "Nome do Item", tipo: "Tipo do Item" };

    // Função para preencher os campos do formulário com os dados do item selecionado
    function preencherCampos() {
      document.getElementById("nome").value = itemSelecionado.nome;
      document.getElementById("tipo").value = itemSelecionado.tipo;
    }

    // Função para atualizar os dados do item com os valores do formulário
    function atualizarDados(event) {
      event.preventDefault(); // Evitar que o formulário seja enviado

      // Obter os valores dos campos do formulário
      var novoNome = document.getElementById("nome").value;
      var novoTipo = document.getElementById("tipo").value;

      // Atualizar os dados do item selecionado
      itemSelecionado.nome = novoNome;
      itemSelecionado.tipo = novoTipo;

      // Exibir os dados atualizados
      console.log("Novo Nome: " + itemSelecionado.nome);
      console.log("Novo Tipo: " + itemSelecionado.tipo);
    }

    // Chamar a função de preenchimento dos campos
    preencherCampos();

    // Adicionar o evento de submit ao formulário
    document.getElementById("edit-form").addEventListener("submit", atualizarDados);