import React, { useState } from 'react';
import UserCard from './card';
import PieChart from './PieChart';
import Line_res_tot from './line.time';
import Line_memoo from './line.memory';
import Polar from './polar';
import Header from '../Header/Header';








const Dashboard = () => {
  return (
   <>   
  
     <Header />
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <UserCard />
      <PieChart />
      <Polar />
      <div style={{ width: '45%' }}>
       
        <Line_res_tot />
      </div>
      <div style={{ width: '45%' }}>
        <Line_memoo />
       
      </div>
     </div>   
   </>
  );
 };

export default  Dashboard;