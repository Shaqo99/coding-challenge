import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var revenueTotal = 0.0;
  var expenseTotal = 0.0;
  var salesTotal = 0.0;
  var netProfitMargin = 0.0;
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
          if (data.account_category == 'revenue')
            revenueTotal += data.total_value;
          else if (data.account_category == 'expense')
            expenseTotal += data.total_value;
          else if (data.account_category == 'sales' && data.value_type == 'debit')
            salesTotal += data.total_value;
        });
        console.log(revenueTotal);
        console.log(expenseTotal);
        console.log(salesTotal);
        netProfitMargin = (expenseTotal - revenueTotal)/ revenueTotal;
        console.log(netProfitMargin);
        //console.log(jsonData)
        
    }); 
  }
  useEffect(()=>{
      fetchData()
  },[])

  return (
    <div className="App">
     {/* {
      data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }  */}
    </div>
  );
}

export default App;
