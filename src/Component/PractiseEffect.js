// import React, {useState, useEffect} from "react";

// function PractiseEffect(){

//     // 2. Create our *api* variable as well as the *setApi* function via useState
//     // We're setting the default value of dogImage to null, so that while we wait for the
//     // fetch to complete, we dont attempt to render the image
//     const [api, setApi] = useState(null)

//     // 3. Create out useEffect function
//   useEffect(() => {
//     fetch("http://localhost:5041/api/Values")
//     .then(response => response.json())
//         // 4. Setting *api* to the image url that we received from the response above
//     .then(data => setApi(data.message))
//   },[])
//   return (
//     <div >
//         {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
//     {api && api.map((dog) => <img width={"200px"} height={"200px"} src={dog}/>)}
//     </div>
//   );
// }

// export default PractiseEffect;

   

import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  // State to hold the fetched data
  const [data, setData] = useState(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      <h2>Fetched Data</h2>
      {data ? (
        <div>
          <p>Title: {data.title}</p>
          <p>Status: {data.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default DataFetchingComponent;

