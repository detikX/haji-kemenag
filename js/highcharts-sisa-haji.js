Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    },

})

Highcharts.chart('container-sisa-haji', {
    chart: {
        backgroundColor: 'rgba(32,46,80,.9)',
        borderRadius: 16,
        zooming: {
            type: 'xy'
        }
    },
    title: {
        text: 'Sisa Kuota Haji Indonesia',
        align: 'center',
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
            '2015', '2016', '2017', '2018', '2019', '2022',
            '2023', '2024'
        ],
        crosshair: true,
        labels: {
            // text: null,
            // format: '{value}',
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

        // labels: {
        //     style: {
        //         color: Highcharts.getOptions().colors[1]
        //     }
        // },
        labels: {
            format: '{value}',
            // format: '{value:,.0f}',
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
        // gridLineColor: '#121b33',
        // lineColor: '#121b33',
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[0],
                textOutline: false
            }
        },
        labels: {
            // format: '{value:,.0f}',
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
            font: '13px Source Code Pro',
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
        data: [155200, 155200, 204000, 204000, 214000, 92825, 210680, 213320],
        tooltip: {
            valueSuffix: ' Jamaah'
        }

    }, {
        name: 'Sisa Kuota',
        type: 'spline',
        color: '#eaeaea',
        data: [744, 759, 935, 649, 1268, 157, 898, 45],
        tooltip: {
            valueSuffix: ' Jamaah'
        }
    }]
});