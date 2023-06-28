function pesquisacep(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          document.getElementById('rua').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('uf').value = data.uf;
        })
        .catch(error => {
          console.log('Erro ao obter o endereço:', error);
        });
    }
  }

  $('#cadastro-form').submit(function(event) {
    event.preventDefault();

    const nome = $('#nome').val();
    const email = $('#email').val();
    const telefone = $('#telefone').val();
    const cpf = $('#cpf').val();
    const rg = $('#rg').val();
    const dataNascimento = $('#data-nascimento').val();
    const cep = $('#cep').val();
    const rua = $('#rua').val();
    const bairro = $('#bairro').val();
    const cidade = $('#cidade').val();
    const uf = $('#uf').val();

    console.log('Dados do cliente:');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('CPF:', cpf);
    console.log('RG:', rg);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('CEP:', cep);
    console.log('Rua:', rua);
    console.log('Bairro:', bairro);
    console.log('Cidade:', cidade);
    console.log('Estado:', uf);

    $('#cadastro-form')[0].reset();
  });    function pesquisacep(cep) {
      cep = cep.replace(/\D/g, '');
      if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => response.json())
          .then(data => {
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('uf').value = data.uf;
          })
          .catch(error => {
            console.log('Erro ao obter o endereço:', error);
          });
      }
    }

    $('#cadastro-form').submit(function(event) {
      event.preventDefault();

      const nome = $('#nome').val();
      const email = $('#email').val();
      const telefone = $('#telefone').val();
      const cpf = $('#cpf').val();
      const rg = $('#rg').val();
      const dataNascimento = $('#data-nascimento').val();
      const cep = $('#cep').val();
      const rua = $('#rua').val();
      const bairro = $('#bairro').val();
      const cidade = $('#cidade').val();
      const uf = $('#uf').val();

      console.log('Dados do cliente:');
      console.log('Nome:', nome);
      console.log('Email:', email);
      console.log('Telefone:', telefone);
      console.log('CPF:', cpf);
      console.log('RG:', rg);
      console.log('Data de Nascimento:', dataNascimento);
      console.log('CEP:', cep);
      console.log('Rua:', rua);
      console.log('Bairro:', bairro);
      console.log('Cidade:', cidade);
      console.log('Estado:', uf);

      $('#cadastro-form')[0].reset();
    });