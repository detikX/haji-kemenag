Highcharts.chart('container-bumbu', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent'
    },
    title: {
        text: null,
        align: 'left',
        style: {
            color: "#ccc",
            font: 'bold 20px "Source Code Pro", sans-serif',
        }
    },

    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['2022', '2023', '2024'],
        crosshair: true,
        gridLineColor: '#121b33',
        lineColor: '#121b33',
        accessibility: {
            description: 'Countries'
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
    },
    yAxis: {
        min: 0,
        gridLineColor: '#121b33',
        lineColor: '#121b33',
        title: {
            text: null
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
    },
    tooltip: {
        valueSuffix: ' Ton',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Source Code Pro',
            fontSize: '13px'
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'bottom',
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
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Berat',
            data: [0, 16, 70]
        },

    ]
});
