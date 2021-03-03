import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import calculateRevenue from './CalculateRevenue';
import calculateExpense from './CalculateExpense';
import calculateGPM from './CalculateGrossProfitMargin';
import calculateNPM from './CalculateNetProfitMargin';
import calculateWCR from './CalculateWorkingCapitalRatio';
import reactDom from 'react-dom';


function App() {
  let revenueTotal = 0;
  let expenseTotal = 0;
  let salesTotal = 0;
  let grossProfitMargin = 0;
  let netProfitMargin = 0;
  let assetTotal = 0;
  let assetSubtraction = 0;
  let liabilityTotal = 0;
  let liabilityTotalSubtraction = 0;
  let workingCapitalRatio = 0;

  const [data,setData] = useState([]);
  const fetchData=()=>{
    fetch('data.json'
    ,{
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(function(res){
        console.log(res)
        return res.json();
    })
    .then(function(jsonData) { 
        console.log(jsonData);
        setData(jsonData);
        Array.from(jsonData.data).filter(data => {
          if (data.account_category === 'revenue')
            revenueTotal = calculateRevenue(revenueTotal, data.total_value);
          else if (data.account_category === 'expense')
            expenseTotal = calculateExpense(expenseTotal, data.total_value);
          else if (data.account_type === 'sales' && data.value_type === 'debit')
            salesTotal += data.total_value;
          else if (data.account_category === 'assets' && data.value_type === 'debit'){
            if (data.account_type === 'current' || data.account_type === 'bank' || data.account_type === 'current_accounts_receivable')
              assetTotal += data.total_value;
          }
          else if (data.account_category === 'assets' && data.value_type === 'credit'){
            if (data.account_type === 'current' || data.account_type === 'bank' || data.account_type === 'current_accounts_receivable')
              assetSubtraction += data.total_value;
          }
          else if (data.account_category === 'liability' && data.value_type === 'credit'){
            if (data.account_type === 'current' || data.account_type === 'bank' || data.account_type === 'current_accounts_receivable')
              liabilityTotal += data.total_value;
          }
          else if (data.account_category === 'liability' && data.value_type === 'debit'){
            if (data.account_type === 'current' || data.account_type === 'bank' || data.account_type === 'current_accounts_receivable')
              liabilityTotalSubtraction += data.total_value;
          }
        })
        console.log(revenueTotal);
        console.log(expenseTotal);
        grossProfitMargin = calculateGPM(salesTotal, revenueTotal);
        //console.log(salesTotal);
        console.log(grossProfitMargin);
        netProfitMargin = calculateNPM(expenseTotal, revenueTotal);
        console.log(netProfitMargin);
        // console.log(assetSubtraction);
        // console.log(assetTotal);
        //assetTotal = assetTotal - assetSubtraction;
        //console.log(assetTotal);
        workingCapitalRatio = calculateWCR(assetTotal, assetSubtraction, liabilityTotal,liabilityTotalSubtraction);
        // console.log(liabilityTotalSubtraction);
        // console.log(liabilityTotal);
        //liabilityTotal = liabilityTotal - liabilityTotalSubtraction;
        //console.log(liabilityTotal);
        //workingCapitalRatio = (assetTotal/liabilityTotal)*100;
        
        console.log(workingCapitalRatio);
        revenueTotal = Math.trunc(revenueTotal);
        expenseTotal = Math.trunc(expenseTotal);
        expenseTotal = expenseTotal.toLocaleString();
        revenueTotal = revenueTotal.toLocaleString();
        //workingCapitalRatio = workingCapitalRatio.toLocaleString(undefined, {maximumFractionDigits:1});
        const element = <div>
          <h1>9Spokes Coding Challenge:</h1>
          <p>Revenue: ${revenueTotal}</p>
          <p>Expenses: ${expenseTotal}</p>
          <p>Gross Profit Margin: {grossProfitMargin}%</p>
          <p>Net Profit Margin: {netProfitMargin}%</p>
          <p>Working Capital Ratio: {workingCapitalRatio}%</p>
        </div>;
        ReactDOM.render(
          element,
          document.getElementById('App'));
        
    });
    
  }
  useEffect(()=>{
      fetchData()
  },[])

  return (
     <div id="App">
      
     </div>
   );
}

export default App;
