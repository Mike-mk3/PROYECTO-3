console.log ("ENTRO A MI ARCHIVO JS");



const tbody = document.getElementById('tbody');



fetch ("https://dev4humans.com.mx/api/Clases/ventas_juguetes")
.then (Response => Response.json())
.then (datosApi => {
    console.log (datosApi);
    const ctx = document.getElementById('myChart');


    const labels = datosApi.data.labels;
    const data = datosApi.data.data


new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: datosApi.data.labels,
        datasets: [{
            label: 'Promedio De Ventas Semanales',
            data: datosApi.data.data,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});  



    tbody.innerHTML = "";
    labels.forEach((label, index) => {
        console.log(label);
        tbody.innerHTML += `
        <tr>
             <th>${index + 1}</th>
             <td>${label}</td>
             <td>${data[index]}</td>
        </tr>
            `;
    });
})




