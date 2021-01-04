import React from "react"
import { graphql } from "gatsby"
import LineChart from '../components/lineChart'
import DoughnutCharts from '../components/doughnutCharts'
import Layout from "../layouts/layout"

function organizeDatabyMonth(incomes, expenses, incomeData, expenseData) {
  incomes.map(income => {
    const months = income.date.substring(0,2);
    if(months === "01") {
      incomeData[0] = income.value + incomeData[0];
    }
    if(months === "02") {
      incomeData[1] = income.value + incomeData[1];
    }
    if(months === "03") {
      incomeData[2] = income.value + incomeData[2];
    }
    if(months ==="04") {
      incomeData[3] = income.value + incomeData[3];
    }
    if(months === "05") {
      incomeData[4] = income.value + incomeData[4];
    }
    if(months === "06") {
      incomeData[5] = income.value + incomeData[5];
    }
    if(months === "07") {
      incomeData[6] = income.value + incomeData[6];
    }
    if(months === "08") {
      incomeData[7] = income.value + incomeData[7];
    }
    if(months === "09") {
      incomeData[8] = income.value + incomeData[8];
    }
    if(months === "10") {
      incomeData[9] = income.value + incomeData[9];
    }
    if(months === "11") {
      incomeData[10] = income.value + incomeData[10];
    }
    if(months === "12") {
      incomeData[1] = income.value + incomeData[1];
    }
  })
  expenses.map(expense => {
    const months = expense.date.substring(0,2);
    if(months === "01") {
      expenseData[0] = expense.value + expenseData[0];
    }
    if(months === "02") {
      expenseData[1] = expense.value + expenseData[1];
    }
    if(months === "03") {
      expenseData[2] = expense.value + expenseData[2];
    }
    if(months === "04") {
      expenseData[3] = expense.value + expenseData[3];
    }
    if(months === "05") {
      expenseData[4] = expense.value + expenseData[4];
    }
    if(months === "06") {
      expenseData[5] = expense.value + expenseData[5];
    }
    if(months === "07") {
      expenseData[6] = expense.value + expenseData[6];
    }
    if(months === "08") {
      expenseData[7] = expense.value + expenseData[7];
    }
    if(months === "09") {
      expenseData[8] = expense.value + expenseData[8];
    }
    if(months === "10") {
      expenseData[9] = expense.value + expenseData[9];
    }
    if(months === "11") {
      expenseData[10] = expense.value + expenseData[10];
    }
    if(months === "12") {
      expenseData[1] = expense.value + expenseData[1];
    }
  })
}
const IndexPage = ({ data }) => {
  const {
    allContentfulIncome: { nodes: incomes },
    allContentfulExpense: { nodes: expenses}
  } = data
  const incomeData = [0,0,0,0,0,0,0,0,0,0,0,0]
  const expenseData = [0,0,0,0,0,0,0,0,0,0,0,0]
  //organize the data into the months by using the date string in the expenses array.
  organizeDatabyMonth(incomes, expenses, incomeData, expenseData)

  return (
    <Layout>
      <div className="row">
        <LineChart incomeData={incomeData} expenseData={expenseData} />
      </div>
        <DoughnutCharts expenses={expenses}/>
    
    </Layout>
  )
}

export const query = graphql`
{
  allContentfulIncome {
    nodes {
      value
      date
    }
  }
  allContentfulExpense {
    nodes {
      value
      date
      isNecessary
      type
    }
  }
}`
export default IndexPage
