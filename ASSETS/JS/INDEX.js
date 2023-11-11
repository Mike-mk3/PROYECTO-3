console.log ("ENTRO A MI ARCHIVO JS");





fetch ("https://dev4humans.com.mx/api/Clases/ventas_juguetes")
.then (Response => Response.json())
.then (datosApi => {
    console.log (datosApi);
    const ctx = document.getElementById('myChart');

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
})




