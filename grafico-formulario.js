document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const ctx = document.getElementById('graficoEnergia').getContext('2d');
    let grafico;

    // Consumo médio mensal em kWh por tipo de aparelho
    const consumoPorAparelho = {
        Microondas: 7.5,
        Chuveiro: 202.5,
        Televisores: 30.45,
        Geladeira: 56.5,
        "Máquina de lavar": 6.3,
        Ventiladores: 12
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = form.querySelectorAll('.componentes input');
        const labels = Object.keys(consumoPorAparelho);
        const consumosCalculados = labels.map((nome, index) => {
            const qtd = Number(inputs[index].value || 0);
            return +(qtd * consumoPorAparelho[nome]).toFixed(2);
        });

        if (grafico) grafico.destroy();

        grafico = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Consumo mensal (kWh)',
                    data: consumosCalculados,
                    backgroundColor: '#2f9e6b',
                    borderRadius: 10
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: context => `${context.parsed.y} kWh/mês`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
});
