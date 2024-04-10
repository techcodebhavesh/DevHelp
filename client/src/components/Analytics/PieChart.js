import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
// import { isJsonString } from "../../../utilityFunctions";
Chart.register(...registerables);

function PieChart() {
    const [data, setData] = useState({
        labels: ["Accepted", "Not Accepted"],
        datasets: [
            {
                label: "Resolved Complaints",
                fill: false,
                lineTension: 0.1,
                backgroundColor: ["rgba(75,192,192,0.4)", "rgba(255,159,64,0.6)"],
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [12,34,45,2,34,45,5],
            },
        ],
    });

    useEffect(() => {
        async function loadPieData() {
            try {
                const response = await fetch("http://localhost:5003/api/graphs/pie", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                  
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                response.json()
                    .then((responseData) => {
                        console.log(responseData);
                        setData((prevData) => ({
                            ...prevData,
                            datasets: [
                                {
                                    ...prevData.datasets[0],
                                    data: responseData,
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
        <div>
            <div>
                <Pie data={data} />
            </div>
        </div>
    );
}

export default PieChart;
