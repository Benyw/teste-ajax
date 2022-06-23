$(document).ready(() => {
    $.ajax({
        url: 'https://ispb.fiducia.digital/api/v1/ispb/listagem',
        type: 'get',
        dataType: "json",
        success: function(response) {
            const listaBancos = response.resposta;

            let table = "";

            listaBancos.forEach(banco => {
                table += "<tr>";
                table += `<td>${banco.ispb}</td>`;
                table += `<td>${banco.numero_codigo}</td>`;
                table += `<td>${banco.nome_reduzido}</td>`;
                table += "</tr>";
            });

            $("#tableBody").html(table);
        }
    });
});