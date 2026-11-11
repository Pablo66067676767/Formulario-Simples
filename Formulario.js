const Cep = document.getElementById("TxtCep");

Cep.addEventListener("blur", function() {

    const viacep = this.value.replace(/\D/g, '');

    if (viacep.length !== 8) {
        alert("CEP inválido. Digite um CEP válido.");
        return;
    }

    fetch(`https://viacep.com.br/ws/${viacep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na requisição");
            }

            return response.json();
        })

        .then(dados => {

            if (dados.erro) {
                alert("CEP não encontrado.");
                return;
            }

            document.getElementById("TxtRua").value = dados.logradouro;
            document.getElementById("TxtBairro").value = dados.bairro;
            document.getElementById("TxtCidade").value = dados.localidade;
            document.getElementById("TxtEstado").value = dados.uf;

        })

        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
            alert("Não foi possível consultar o CEP. Tente novamente.");
        });

});
