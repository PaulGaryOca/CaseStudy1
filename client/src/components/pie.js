export function createPieChart(containerId) {
    return {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
        },
        title: {
            text: '<span style="color: #334155;">Number of Email Received /</span><span style="color: #64748B;">&nbspNumber of Views</span>'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                cursor: "pointer",
                innerSize: '80%',
                borderWidth: 10,
                borderColor: '#fff',
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            name: '',
            data: [{
                    name: 'Views', 
                    y: 150,
                },
                {
                    name: 'Emails Received', 
                    y: 50,
                },
               
            ]
        }]
    };
}
