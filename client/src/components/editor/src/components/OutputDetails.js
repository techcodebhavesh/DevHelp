import React,   { useRef }  from "react";



const OutputDetails = ({ outputDetails }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const lastSentData = useRef(null);
  
  const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
  
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
  };
  



  const sendDetailsToServer = (details) => {
    // Create a new object that includes details and the current timestamp
    const dataToSend = {
      status: details.status.description,
      memory: details.memory,
      time: details.time,
      timestamp: formatDate(new Date()), // Format the date
      email: user.email
    };
    const dataToCompare = {
      status: details.status.description,
      memory: details.memory,
      time: details.time,
      email: user.email
    };
  
    console.log({dataToSend});

    const dataString = JSON.stringify(dataToCompare);
    if (dataString !== lastSentData.current) {
      lastSentData.current = dataString;

  
    fetch('http://localhost:5003/api/graphs/senddata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}
  
  // Call the function with the outputDetails
  sendDetailsToServer(outputDetails);
  
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-sm">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
