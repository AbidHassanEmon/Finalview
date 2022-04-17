import React from 'react';
import { useState,useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from 'axios';

function Home (){
  const [st,setSt] = useState({});
  useEffect(function(){
    axios.get("http://localhost:8000/api/admin/home").then(function(rsp){
        setSt(rsp.data);
    },function(err){

    });
},[]);

    return(
      //<span>{st[0]}</span> 
      <div>
        
        <h1>Hello from React Admin Home page</h1>
            <h3>Show the linechart </h3> 
            <center>
            <center>User count in Months</center>
        <Chart
              chartType="LineChart"
              data={[["Age", "Weight"], ["jan", st[0]], ["feb", st[1]],["mar",st[2]],["april",st[3]],["may",st[4]],["jun",st[5]],
              ["july",st[6]],["aug",5],["sep",4],["oct",0],["nov",8],["Dec",22]]}
              width="90%"
              height="300px"
              legendToggle
        />
            </center>

            
        </div>
        
    )


    }
export default Home;
