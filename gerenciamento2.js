    // Dados de exemplo
    var dados = [
        { id: 1, tipo: "Tipo 1", nomeLista: "Lista A", quantidadeContatos: 100, quantidadeEnviados: 70 },
        // Outros dados...
      ];
  
      // Função para preencher a tabela com os dados
      function preencherTabela() {
        const tabela = document.getElementById("data-rows");
        tabela.innerHTML = "";
  
        dados.forEach((item) => {
          const row = tabela.insertRow();
  
          const idCell = row.insertCell();
          idCell.textContent = item.id;
          idCell.classList.add("align-middle");
  
          const tipoCell = row.insertCell();
          tipoCell.textContent = item.tipo;
          tipoCell.classList.add("align-middle");
  
          const nomeListaCell = row.insertCell();
          nomeListaCell.textContent = item.nomeLista;
          nomeListaCell.classList.add("align-middle");
  
          const quantidadeContatosCell = row.insertCell();
          quantidadeContatosCell.textContent = item.quantidadeContatos;
          quantidadeContatosCell.classList.add("align-middle");
  
          const quantidadeEnviadosCell = row.insertCell();
          quantidadeEnviadosCell.textContent = item.quantidadeEnviados;
          quantidadeEnviadosCell.classList.add("align-middle");
  
          const statusCell = row.insertCell();
          const progressBar = document.createElement("div");
          progressBar.classList.add("progress");
          const progressValue = (item.quantidadeEnviados / item.quantidadeContatos) * 100;
          progressBar.innerHTML = `<div class="progress-bar" role="progressbar" style="width: ${progressValue}%" aria-valuenow="${progressValue}" aria-valuemin="0" aria-valuemax="100">${progressValue}%</div>`;
          statusCell.appendChild(progressBar);
          statusCell.classList.add("align-middle");
  
          const acoesCell = row.insertCell();
          const editarBtn = document.createElement("button");
          editarBtn.classList.add("btn", "btn-primary", "btn-icon");
          editarBtn.innerHTML = '<i class="bi bi-pencil-fill"></i> Editar';
          editarBtn.addEventListener("click", () => {
            abrirModalEdicao(item);
          });
          acoesCell.appendChild(editarBtn);
          acoesCell.classList.add("align-middle", "espaco-envolta");
  
          const deletarBtn = document.createElement("button");
          deletarBtn.classList.add("btn", "btn-danger", "btn-icon");
          deletarBtn.innerHTML = '<i class="bi bi-trash-fill"></i> Deletar';
          acoesCell.appendChild(deletarBtn);
          acoesCell.classList.add("align-middle","espaco-envolta");
        });
      }
  
      // Função para abrir o modal de edição com os dados preenchidos
      function abrirModalEdicao(item) {
        const editModalLabel = document.getElementById("editModalLabel");
        const editNomeInput = document.getElementById("edit-nome");
        const editTipoInput = document.getElementById("edit-tipo");
        const saveChangesBtn = document.getElementById("saveChangesBtn");
  
        editModalLabel.textContent = `Editar Dados - ID: ${item.id}`;
        editNomeInput.value = item.nomeLista;
        editTipoInput.value = item.tipo;
  
        saveChangesBtn.addEventListener("click", () => {
          // Aqui você pode implementar a lógica para salvar as alterações feitas no modal
          // Por enquanto, apenas exibirei os valores no console
          console.log("Nome:", editNomeInput.value);
          console.log("Tipo:", editTipoInput.value);
  
          // Fechar o modal após salvar as alterações
          const modal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
          modal.hide();
        });
  
        // Abrir o modal de edição
        const modal = new bootstrap.Modal(document.getElementById("editModal"));
        modal.show();
      }
  
      // Chamar a função de preenchimento da tabela
      preencherTabela();