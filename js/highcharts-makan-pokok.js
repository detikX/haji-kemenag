Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    },
})


// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container-makan-pokok', {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 16
    },
    title: {
        text: 'Estimasi Kebutuhan Bahan Baku Makanan Jemaah Haji Indonesia',
        align: 'left',
        style: {
            color: "#fafafa",
            font: 'bold 20px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    subtitle: {
        text: 'Sumber: BPS',
        style: {
            color: "#fafafa",
            font: 'normal 13px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    xAxis: {
        categories: [
            'Beras', 'Lauk Pauk', 'Sayuran', 'Mie Telur'
        ],
        accessibility: {
            description: 'Months of the year'
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
                color: "#fafafa",
                font: '18px "Zain", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },
    yAxis: {
        title: {
            text: null
        },
        gridLineColor: '#121b33',
        lineColor: '#121b33',
        labels: {
            format: null,
            style: {
                color: "#fafafa",
                font: '18px "Zain", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
            // formatter:
        },

    },
    credits: {
        enabled: false //buat highcharts com
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        // valueSuffix: '%',
        // formatter: function () {
        //     var a = this.y.toString().replace('.', ',');
        //     return 'Tahun <b>' + this.x + '</b> <br>' + this.series.name + ': <b>' + a + ' juta orang</b>';

        // },
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Zain',
            fontSize: '1.2rem'
        }
        // pointFormat: '{series.name}: <b>{point.y}</b><br/>',
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
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            },
            dataLabels: {
                style: {
                    color: "#fafafa",
                    font: 'normal 1.5rem "Zain", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',
                    textOutline: false
                },
            }

        }
    },
    series: [{
        //         2014: 70,68

        // 2015: 70,02

        // 2016: 70,32

        // 2017: 72,67

        // 2018: 75,61

        // 2019: 75,65

        // 2020: 75,50

        // 2021: 78,15

        // 2022: 81,33

        // 2023: 83,34

        // 2024: 84,13 juta orang orang
        name: 'Makkah',
        data: [2207, 1053, 991, 19]
    }, {
        name: 'Madinah',
        data: [581, 678, 453, 24]
    }]
});
