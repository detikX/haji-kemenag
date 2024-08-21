Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    },

})

Highcharts.chart('container-penambahan', {
    chart: {
        backgroundColor: 'transparent',
        zooming: {
            type: 'xy'
        }
    },
    title: {
        text: 'Kuota Haji Indonesia',
        align: 'left',
        style: {
            color: "#ccc",
            font: 'bold 20px "Source Code Pro", sans-serif',
        }
    },
    credits: {
        enabled: false
    },

    xAxis: [{
        categories: [
            '2017', '2018', '2019', '2020', '2021', '2022',
            '2023', '2024'
        ],
        crosshair: true,
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
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
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
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[0],
                textOutline: false
            }
        },
        labels: {
            format: '{value:,.0f}',
            style: {
                // color: Highcharts.getOptions().colors[4]
                color: "#fafafa",
                font: '13px "Source Code Pro", sans-serif',
                textOutline: false
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        verticalAlign: 'top',
        itemStyle: {
            // fontSize: '35px',
            font: '13px Rubik',
            color: '#fafafa'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#fafafa'
        },
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0)',
    },
    plotOptions: {
        column: {
            borderWidth: 0,
            borderColor: '#ff0000',
        },
        // dataLabels: {
        //     style: {
        //         color: "#fafafa",
        //         font: 'normal 1.5rem "Zain", sans-serif',
        //         // lineHeight: '2rem'
        //         fontWeight: 'normal',
        //         textOutline: false
        //     },
        // },
    },
    tooltip: {
        shared: true,
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Source Code Pro',
            fontSize: '13px'
        },

    },

    series: [{
        name: 'Kuota',
        type: 'column',
        yAxis: 1,
        data: [
            211000, 221000, 221000, 100050, 221000, 221000
        ],
        tooltip: {
            valueSuffix: ' Jamaah'
        }

    }, {
        name: 'Penambahan',
        type: 'spline',
        color: '#65b87f',
        data: [
            10000, 0, 10000, 0, 8000, 20000
        ],
        tooltip: {
            valueSuffix: ' Jamaah'
        }
    }]
});