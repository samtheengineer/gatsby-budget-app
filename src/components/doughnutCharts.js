import React from 'react';
import AllCostsChart from './allCostsChart';
import NecessaryCostsChart from './necessaryCostsChart';
import ExtraCostsChart from './extraCostsChart';

function setAllCostData(data, expenses) {
    expenses.map(expense => {
        if (expense.isNecessary) {
            data[0] = expense.value + data[0];
        } else {
            data[1] = expense.value + data[1];
        }
    })
}

function setNecessaryCostData(labels, data, expenses) {
    for (var i = 0; i < labels.length; i++) {
        expenses.map(expense => {
            console.log(expense.type + " " + labels[i])
            if (labels[i] === expense.type && expense.isNecessary) {
                data[i] = expense.value + data[i]
                console.log(data[i])
            }
        })
    }
}
function setExtraCostData(labels, data, expenses) {
    for (var i = 0; i < labels.length; i++) {
        expenses.map(expense => {
            console.log(expense.type + " " + labels[i])
            if (labels[i] === expense.type && !expense.isNecessary) {
                data[i] = expense.value + data[i]
            }
        })
    }
}

const DoughnutCharts = (props) => {
    const allCostData = [0, 0]
    const necessaryCostLabels = ["rent", "utilities", "food", "transportation", "debt", "personal", "house items/supplies"]
    const necessaryCostData = [0, 0, 0, 0, 0, 0, 0]
    const extraCostLabels = ["personal spending", "entertainment", "gifts/donations", "other"]
    const extraCostData = [0, 0, 0, 0]
    setAllCostData(allCostData, props.expenses)
    setNecessaryCostData(necessaryCostLabels, necessaryCostData, props.expenses)
    setExtraCostData(extraCostLabels, extraCostData, props.expenses)
    return (
        <div className="row" id="doughnutCharts">
            <AllCostsChart labels={[
                'Necessary Cost',
                'Extra Cost'
            ]} data={allCostData} />
            <NecessaryCostsChart labels={necessaryCostLabels} data={necessaryCostData} />

            <ExtraCostsChart labels={extraCostLabels} data={extraCostData} />
        </div>
    )
}
export default DoughnutCharts;
