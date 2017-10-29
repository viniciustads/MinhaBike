$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost:4004/api/bikes",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            preenchaBikes(data);
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
});

var preenchaBikes = function(bikes) {
    var corpoTabela = $('#BikesDisponiveis').find('tbody');
    bikes.forEach(function (item) {
        var linha = document.createElement("tr");
        var nome = document.createElement("td");
        nome.appendChild(document.createTextNode(item.Nomelocal));
        linha.appendChild(nome);

        var marcaModelo = document.createElement("td");
        marcaModelo.appendChild(document.createTextNode(item.MarcaModelo));
        linha.appendChild(marcaModelo);

        var categoria = document.createElement("td");
        categoria.appendChild(document.createTextNode(item.Categoria));
        linha.appendChild(categoria);

        var preco = document.createElement("td");
        preco.appendChild(document.createTextNode(item.Preco));
        linha.appendChild(preco);
        
        var evento = 'visualizar("' + item._id + '")';
        var consultar = '<td><i onclick=' + evento +' class="material-icons consultar">zoom_in</i></td>';
        $(linha).append(consultar);
        $(corpoTabela).append(linha);
    });
};

var visualizar = function(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:4004/api/bikes/" + id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            var texto = 'Nome: ' + data.Nomelocal + '\n';
            texto += 'Marca/Modelo: ' + data.MarcaModelo + '\n';
            texto += 'Categoria: ' + data.Categoria + '\n';
            texto += 'Horário Inicial: ' + data.HorarioFuncInicial + '\n';
            texto += 'Horário Final: ' + data.HorarioFuncFinal + '\n';
            texto += 'Preço: ' + data.Preco + '\n';
            texto += 'Url da loja: ' + data.UrlLojaImagem + '\n';
            texto += 'Imagem da Bike (url): ' + data.UrlBikeImagem;
            alert(texto);
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
};