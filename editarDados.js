    // Dados do item selecionado para edição
    var itemSelecionado = { id: 1, nomelista: "Nome da Lista", descricao: "Descrição da Lista" };

    // Função para preencher os campos do formulário com os dados do item selecionado
    function preencherCampos() {
      document.getElementById("nomelista").value = itemSelecionado.nomelista;
      document.getElementById("descricao").value = itemSelecionado.descricao;
    }

    // Função para atualizar os dados do item com os valores do formulário
    function atualizarDados(event) {
      event.preventDefault(); // Evitar que o formulário seja enviado

      // Obter os valores dos campos do formulário
      var novoNome = document.getElementById("nomelista").value;
      var novoTipo = document.getElementById("descricao").value;

      // Atualizar os dados do item selecionado
      itemSelecionado.nomelista = novoNome;
      itemSelecionado.descricao = novaDescricao;

      // Exibir os dados atualizados
      console.log("Novo Nome: " + itemSelecionado.nomelista);
      console.log("Nova Descrição: " + itemSelecionado.descricao);
    }

    // Chamar a função de preenchimento dos campos
    preencherCampos();

    // Adicionar o evento de submit ao formulário
    document.getElementById("edit-form").addEventListener("submit", atualizarDados);