import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
    const [chartData, setChartData] = useState(() => {
        const data = {
            labels: ["Jan", "Feb", "Mar",
                "Apr", "May", "Jun",
                "Jul", "Aug", "Sep",
                "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: 'Income',
                    fill: false,
                    lineTension: 0.1,
                    borderColor: 'rgb(152,251,152)',
                    borderCapStyle: 'butt',
                    pointBorderColor: 'rgb(152,251,152)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    label: 'Expenses',
                    fill: false,
                    lineTension: 0.1,
                    borderColor: 'rgb(220,20,60)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    // borderJoinStyle: 'miter',
                    pointBorderColor: 'rgb(220,20,60)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            ]
        }
        data.datasets[0].data = props.incomeData;
        data.datasets[1].data = props.expenseData;
        console.log('LineChart data loaded')
        return data;
    })
    return (
        <div id="lineChart" className='col-lg-8 col-sm-10'>
            <Line useRef="chart" data={chartData} />
        </div>
    )
}

export default LineChart;