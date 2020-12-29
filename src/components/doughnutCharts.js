import React from 'react';
import AllCostsChart from './allCostsChart';
import NecessaryCostsChart from './necessaryCostsChart';
import ExtraCostsChart from './extraCostsChart';

// function populateCosts(dataNames, dataValues, data) {
//     data.map((object) => {
//         dataNames.push(object.name);
//         dataValues.push(object.value);

//     })
// }
// function calculateAllCosts(sums, necessaryValues, extraValues) {
//     necessaryValues.map((value) => {
//         sums[0] = sums[0] + value;
//         console.log(value)
//     })
//     extraValues.map((value) => {
//         sums[1] = sums[1] + value;
//     })
// }

function DoughnutCharts() {

    // const necessaryCostData = data.costs[1].necessaryCosts;
    // const necessaryCostNames = [];
    // const necessaryCostValues = [];
    // populateCosts(necessaryCostNames, necessaryCostValues, necessaryCostData);
    // const extraCostData = data.costs[0].extraCosts;
    // const extraCostNames = [];
    // const extraCostValues = [];
    // populateCosts(extraCostNames, extraCostValues, extraCostData);

    // const allCostsValues = [0, 0];
    // calculateAllCosts(allCostsValues, necessaryCostValues, extraCostValues);

    return (
        <div className="row">
            <AllCostsChart labels={[
                'Necessary Cost',
                'Extra Cost'
            ]} data={[]} />
            <NecessaryCostsChart labels={[]} data={[]} />

            <ExtraCostsChart labels={[]} data={[]} />
        </div>
    )
}
export default DoughnutCharts;
