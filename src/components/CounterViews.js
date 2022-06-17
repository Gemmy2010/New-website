import React,{useEffect, useState} from "react";

function CounterViews() {
  const [totalCount, setTotalCount] = useState(0);

  const getCount = async () => {
    const response = await fetch(
      "https://api.countapi.xyz/update/biketrace/bikeblog/?amount=1"
    );
    const count = await response.json();

    return count.value
  };

  useEffect(async () => {
  
    setTotalCount(await getCount())
   
    
  }, []);

  return (
    <div id="views">
      <h1 className="views_header">Number of visitors</h1>
      <div className="views_card">
        <h2 className="view_number">The total number of visitors</h2>
        <h2 id="count">{totalCount}</h2>
      </div>
    </div>
  );
}

export default CounterViews;
