import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import calculateRevenue from './CalculateRevenue';
import reactDom from 'react-dom';

function App() {
  var revenueTotal = 0;
  var expenseTotal = 0;
  var salesTotal = 0;
  var grossProfitMargin = 0;
  var netProfitMargin = 0;
  var assetTotal = 0;
  var assetSubtraction = 0;
  var liabilityTotal = 0;
  var liabilityTotalSubtraction = 0;
  var workingCapitalRatio = 0;

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
            revenueTotal += data.total_value;
          else if (data.account_category === 'expense')
            expenseTotal += data.total_value;
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
        grossProfitMargin = (salesTotal / revenueTotal) * 100;
        console.log(salesTotal);
        console.log(grossProfitMargin);
        netProfitMargin = ((expenseTotal - revenueTotal)/ revenueTotal) * 100;
        console.log(netProfitMargin);
        // console.log(assetSubtraction);
        // console.log(assetTotal);
        assetTotal = assetTotal - assetSubtraction;
        console.log(assetTotal);
        // console.log(liabilityTotalSubtraction);
        // console.log(liabilityTotal);
        liabilityTotal = liabilityTotal - liabilityTotalSubtraction;
        console.log(liabilityTotal);
        workingCapitalRatio = (assetTotal/liabilityTotal)*100;
        console.log(workingCapitalRatio);
        revenueTotal = Math.trunc(revenueTotal);
        expenseTotal = Math.trunc(expenseTotal);
        revenueTotal = revenueTotal.toLocaleString();
        expenseTotal = expenseTotal.toLocaleString();
        grossProfitMargin = grossProfitMargin.toLocaleString(undefined, {maximumFractionDigits:1});
        netProfitMargin = netProfitMargin.toLocaleString(undefined, {maximumFractionDigits:1});
        workingCapitalRatio = workingCapitalRatio.toLocaleString(undefined, {maximumFractionDigits:1});
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
        // var heml = document.getElementsByClassName("App");
        // heml.innerHTML += revenueTotal;
        //console.log(jsonData)
        
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


// const sumReducer = (sum, value) => (
//   sum + value
// );

// export calculateRevenue = (data) => {
//   const revenue = data
//      .filter(record => record.account_category === 'revenue')
//      .reduce(sumReducer, 0);

//   return revenue;
// };

// export calculateExpenses = (data) => {
//   const expenses = data
//      .filter(record => record.account_category === 'expense')
//      .reduce(sumReducer, 0);

//   return expenses;
// };