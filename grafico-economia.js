document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const ctx = document.getElementById('graficoEconomia').getContext('2d');
    let grafico;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const consumoPorAparelho = {
            microondas: 7.5,
            chuveiro: 202.5,
            televisores: 30.45,
            geladeira: 56.5,
            maquina: 6.3,
            ventilador: 12
        };

        const labels = Object.keys(consumoPorAparelho).map(label => label.charAt(0).toUpperCase() + label.slice(1));
        const valores = Array.from(form.querySelectorAll('.componentes input')).map((input, index) => {
            const key = Object.keys(consumoPorAparelho)[index];
            return Number(input.value || 0) * consumoPorAparelho[key];
        });

        const consumoTotal = valores.reduce((acc, val) => acc + val, 0);
        const economia = consumoTotal * 0.7;
        const consumoPosEconomia = consumoTotal - economia;

        if (grafico) grafico.destroy();

        grafico = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Consumo Atual (kWh)', 'Consumo com Energia Solar (kWh)'],
                datasets: [{
                    label: 'Consumo de Energia',
                    data: [consumoTotal.toFixed(2), consumoPosEconomia.toFixed(2)],
                    backgroundColor: ['#2f9e6b', '#a1d99b'],
                    borderRadius: 10
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: context => `${context.parsed.y} kWh`
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
