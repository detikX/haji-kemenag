Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    },
})

Highcharts.chart('container-konsumsi', {
    chart: {
        backgroundColor: 'transparent'
    },
    title: {
        text: 'Data layanan konsumsi di Makkah',
        align: 'left',
        style: {
            color: "#ccc",
            font: 'bold 20px "Source Code Pro", sans-serif',
        }
    },

    subtitle: {
        text: null,
        align: 'left'
    },

    yAxis: {
        title: {
            text: null
        },
        gridLineColor: '#121b33',
        lineColor: '#121b33',
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                color: "#ccc",
                font: '13px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },

    xAxis: {
        categories: [
            '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
        ],
        crosshair: true,
        gridLineColor: '#121b33',
        lineColor: '#121b33',
        tickLength: 0,
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                color: "#fafafa",
                font: '13px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },
    tooltip: {
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Source Code Pro',
            fontSize: '13px'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemStyle: {
            // fontSize: '35px',
            font: '13px Source Code Pro',
            color: '#fafafa'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#fafafa'
        },
    },

    plotOptions: {
        series: {
            // lineColor: 'red',
            label: {
                connectorAllowed: false
            },
            dataLabels: {
                style: {
                    // color: "#fafafa",
                    font: '13px "Source Code Pro", sans-serif',
                    // lineHeight: '2rem'
                    textOutline: false
                },
            },
            pointStart: 2010
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Total Konsumsi',
        // color: 'white',
        data: [
            15, 24, 25, 40, 40, 75, 66, 84
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
