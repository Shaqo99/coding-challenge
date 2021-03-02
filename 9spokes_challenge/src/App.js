import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let revenueTotal = 0;
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
          if (data.account_category == 'expense')
            revenueTotal += data.total_value;
             
        });
        console.log(revenueTotal);
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
