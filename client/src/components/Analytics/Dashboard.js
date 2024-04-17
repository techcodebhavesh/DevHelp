import React, { useState } from 'react';
import UserCard from './card';
import PieChart from './PieChart';

const Dashboard = () => {

 return (
  <>   
    <div>
     <UserCard />
     <PieChart />
    </div>   
  </>
 );
};

export default  Dashboard;