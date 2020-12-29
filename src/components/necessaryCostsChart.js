import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function NecessaryCostsChart(props) {

    const [chartData, setChartData] = useState(() => {
        const data = {
            labels: [],
            datasets: [
                {
                    backgroundColor: ['rgba(37,95,133)', 'rgba(197,40,61)', 'rgba(255,200,87)', 'rgba(100,235,100)', 'rgba(233,114,76)', 'rgba(72,29,36)'],
                    data: []
                }
            ]
        }
        data.labels = props.labels;
        data.datasets[0].data = props.data;
        console.log('necessaryCosts chart data loaded')
        return data;
    })
    return (
        <div className="col-lg-4 pt-1">
            <h2 className="text-center">Necessary Costs</h2>
            <Doughnut useRef="chart" data={chartData} />
        </div>
    )
}
export default NecessaryCostsChart;