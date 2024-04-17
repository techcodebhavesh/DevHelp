import React, { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
// import { isJsonString } from "../../../utilityFunctions";
Chart.register(...registerables);

function Polar() {
    const user = JSON.parse(localStorage.getItem('user'));

    
    const [data, setData] = useState({
        labels: [],
          datasets: [{
            label: 'My First Dataset',
            data: [],
            backgroundColor: [
                'rgb(75, 192, 192)',
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ]
            },
        ],
    });

    useEffect(() => {
        async function loadPieData() {
            try {
                const response = await fetch("http://localhost:5003/api/graphs/polar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                  body: JSON.stringify(user),
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                response.json()
                    .then((responseData) => {
                        console.log(responseData);
                        const labels  = responseData.parameterNames;
                        setData((prevData) => ({
                            ...prevData,
                            
                            labels: labels,
                            datasets: [
                                {
                                    ...prevData.datasets[0],
                                    data: responseData.counts,
                                },
                            ],
                        }));
                    })
                    .catch((error) => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });

            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }

        loadPieData();
    }, []);

    return (
        <div style={{ width: '300px', height: '300px' }}>
      
            <div>
                <PolarArea data={data} />
            </div>
        </div>
    );
}

export default Polar;
