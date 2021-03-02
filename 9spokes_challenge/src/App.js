import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var revenueTotal = 0.0;
  var expenseTotal = 0.0;
  var salesTotal = 0.0;
  var grossProfitMargin = 0.0;
  var netProfitMargin = 0.0;
  var assetTotal = 0.0;
  var assetSubtraction = 0.0;
  var liabilityTotal = 0.0;
  var liabilityTotalSubtraction = 0.0;
  
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
        Array.from(jsonData.data).forEach(data => {
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


        });
        console.log(revenueTotal);
        console.log(expenseTotal);
        grossProfitMargin = (salesTotal / revenueTotal) * 100;
        console.log(salesTotal);
        console.log(grossProfitMargin);
        netProfitMargin = ((expenseTotal - revenueTotal)/ revenueTotal) * 100;
        
        console.log(netProfitMargin);
        console.log(assetSubtraction);
        console.log(assetTotal);
        assetTotal = assetTotal - assetSubtraction;
        console.log(assetTotal);
        console.log(liabilityTotalSubtraction);
        console.log(liabilityTotal);
        liabilityTotal = liabilityTotal - liabilityTotalSubtraction;
        console.log(liabilityTotal);
        
        //console.log(jsonData)
    });
     
  }
  useEffect(()=>{
      fetchData()
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
